import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "@shared/app";
import { router } from "./create-browser-router";

import "@shared/styles/bootstrap.css";
import { createAsyncStore } from "@shared/store/create-async-store";

const cssAssets = window.__CSS_ASSETS__;
const preloadedState = window.__PRELOADED_STATE__;

const store = createAsyncStore({ preloadedState });

hydrateRoot(
  document,
  <App store={store.store} css={cssAssets}>
    <RouterProvider router={router} />
  </App>
);
