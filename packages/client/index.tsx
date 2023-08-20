import { hydrateRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "@shared/routes";
import { App } from "@shared/app";

const router = createBrowserRouter(routes);
const cssAssets = window.__CSS_ASSETS__;
const jsAssets = window.__JS_ASSETS__;

hydrateRoot(
  document,
  <App css={cssAssets} js={jsAssets}>
    <RouterProvider router={router} />
  </App>
);
