import "dotenv/config";
import fs from "fs";
import path from "path";
import express from "express";
import { createServer as createViteServer } from "vite";
import { renderToPipeableStream } from "react-dom/server";
import {
  createStaticHandler,
  createStaticRouter,
  StaticRouterProvider,
} from "react-router-dom/server";
import { createAsyncStore } from "@shared/store/create-async-store";

const isProduction = process.env.NODE_ENV === "production";

async function createServer() {
  const app = express();

  let vite: Awaited<ReturnType<typeof createViteServer>> | undefined;

  if (!isProduction) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "custom",
    });
    app.use(vite.middlewares);
  } else {
    app.use(
      "/client",
      express.static(path.resolve("dist/client"), { maxAge: 31536000000 })
    );
  }

  app.use("/", express.static(path.resolve("public"), { maxAge: 31536000000 }));

  app.get("*", async (request, response, next) => {
    try {
      const url = request.originalUrl;

      let routes;
      let App;
      let createStore;
      let getPreloadedState;

      let ssrCss = "";

      if (!isProduction && vite) {
        const routesModule = await vite.ssrLoadModule(
          "/packages/shared/routes.tsx"
        );
        const appModule = await vite.ssrLoadModule("/packages/shared/app.tsx");
        const storeModule = await vite.ssrLoadModule(
          "/packages/shared/store/create-async-store"
        );
        const preloadedStateModule = await vite.ssrLoadModule(
          "/packages/server/utils/get-preloaded-state.ts"
        );

        // Collect CSS for SSR using ?inline query
        try {
          const cssModule = await vite.ssrLoadModule(
            "/packages/shared/styles/bootstrap.css?inline"
          );
          if (cssModule?.default) {
            ssrCss = cssModule.default;
          }
        } catch (e) {
          console.error("Failed to load CSS:", e);
        }

        routes = routesModule.routes;
        App = appModule.App;
        createStore = storeModule.createAsyncStore;
        getPreloadedState = preloadedStateModule.getPreloadedState;
      } else {
        // Production: use built server bundle
        const serverEntry = await import("./dist/server/entry-server.mjs");
        routes = serverEntry.routes;
        App = serverEntry.App;
        createStore = serverEntry.createStore;
        getPreloadedState = serverEntry.getPreloadedState;
      }

      const handler = createStaticHandler(routes);

      const fetchRequest = new Request(
        `${request.protocol}://${request.get("host")}${url}`,
        {
          method: request.method,
          headers: new Headers(
            Object.entries(request.headers).reduce((acc, [key, value]) => {
              if (typeof value === "string") {
                acc[key] = value;
              }
              return acc;
            }, {} as Record<string, string>)
          ),
        }
      );

      const routerContext = await handler.query(fetchRequest);

      if (routerContext instanceof Response) {
        return response.redirect(
          routerContext.status,
          routerContext.headers.get("Location") || "/"
        );
      }

      const staticRouter = createStaticRouter(
        handler.dataRoutes,
        routerContext
      );

      const store = createAsyncStore({
        preloadedState: getPreloadedState(),
      });

      // Get client script path and CSS
      let clientScript = "/packages/client/entry-client.tsx";
      let cssLinks: string[] = [];

      if (isProduction) {
        const manifest = JSON.parse(
          fs.readFileSync(
            path.resolve("dist/client/.vite/manifest.json"),
            "utf-8"
          )
        );
        const entry = manifest["packages/client/entry-client.tsx"];
        clientScript = `/client/${entry.file}`;
        if (entry.css) {
          cssLinks = entry.css.map((css: string) => `/client/${css}`);
        }
      }

      const { pipe } = renderToPipeableStream(
        <App
          store={store.store}
          css={cssLinks}
          js={[]}
          devMode={!isProduction}
          ssrCss={ssrCss}
        >
          <StaticRouterProvider router={staticRouter} context={routerContext} />
        </App>,
        {
          bootstrapModules: [clientScript],
          bootstrapScriptContent: `
            window.__PRELOADED_STATE__ = ${JSON.stringify(
              store.store.getState()
            ).replace(/</g, "\\u003c")};
            window.__CSS_ASSETS__ = ${JSON.stringify(cssLinks)};
            window.__JS_ASSETS__ = [];
          `,
          onShellReady() {
            response.setHeader("Content-Type", "text/html");
            pipe(response);
          },
          onError(error) {
            console.error("SSR Error:", error);
          },
        }
      );
    } catch (error) {
      if (!isProduction && vite) {
        vite.ssrFixStacktrace(error as Error);
      }
      next(error);
    }
  });

  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
}

createServer();
