import { RequestHandler } from "express";
import { renderToPipeableStream } from "react-dom/server";
import { App } from "@shared/app";
import {
  StaticRouterProvider,
  createStaticHandler,
  createStaticRouter,
} from "react-router-dom/server";
import { Assets, FileAssets } from "packages/global-types/types";
import { routes } from "@shared/routes";
import MobileDetect from "mobile-detect";
import { RouteMatch } from "react-router-dom";
import { isValidElement } from "react";
import { createStore } from "@shared/store/create-store";
import { createFetchRequest } from "./create-fetch-request";
import { reduceAssets } from "./reduce-assets";
import { readJsonFile } from "./read-json-file";
import { getCssAssetsMarkup, getJsAssetsMarkup } from "./get-css-markup";
import { getPreloadedState } from "./get-preloaded-state";
import { getPreloadedStateMarkup } from "./get-preloaded-state-markup";

export const requestHandler: RequestHandler = async (request, response) => {
  const mobileDetect = new MobileDetect(request.headers["user-agent"] ?? "");
  const handler = createStaticHandler(routes);

  const fetchRequest = createFetchRequest(request);
  const routerContext = await handler.query(fetchRequest);

  if (routerContext instanceof Response) {
    throw routerContext;
  }

  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  const { pathAssets } = (routerContext.matches as RouteMatch[]).reduce<{
    paths: string[];
    pathAssets: string[];
  }>(
    (accumulator, { route: { path, element } }) => {
      if (path) {
        accumulator.paths.push(path);
      }
      if (isValidElement(element) && typeof element.props.asset === "string") {
        accumulator.pathAssets.push(element.props.asset);
      }

      return accumulator;
    },
    {
      paths: [],
      pathAssets: [],
    }
  );

  const assets = readJsonFile<FileAssets>(".build/assets.json", {});
  const entryAssets = readJsonFile<Assets>(".build/entryAssets.json", {
    js: [],
    css: [],
  });

  const staticRouter = createStaticRouter(handler.dataRoutes, routerContext);

  const pageAssets = reduceAssets(pathAssets, assets, entryAssets);

  const store = createStore({
    preloadedState: getPreloadedState({
      isMobile: Boolean(mobileDetect.mobile()),
    }),
  });

  const { pipe } = renderToPipeableStream(
    <App store={store} js={pageAssets.js} css={pageAssets.css}>
      <StaticRouterProvider router={staticRouter} context={routerContext} />
    </App>,
    {
      bootstrapScriptContent: `
      ${getCssAssetsMarkup(pageAssets.css)}
      ${getJsAssetsMarkup(pageAssets.js)}
      ${getPreloadedStateMarkup(store)}`,

      onShellReady() {
        response.setHeader("Content-type", "text/html");
        pipe(response);
      },
    }
  );
};
