import { hydrateRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { App } from "@shared/app";

import { getDeviceTypeByWidth } from "@shared/utils/get-device-type-by-width";
import { createStore } from "@shared/store/create-store";
import { uiSlice } from "@shared/store/ui/slice";
import { router } from "./create-browser-router";

import "@shared/store/auth/middlewares";

const cssAssets = window.__CSS_ASSETS__;
const preloadedState = window.__PRELOADED_STATE__;
const jsAssets = window.__JS_ASSETS__;

const store = createStore({ preloadedState });

store.dispatch(
  uiSlice.actions.setDeviceTypeEvent(getDeviceTypeByWidth(window.innerWidth))
);

window.addEventListener("resize", (event) => {
  if (event.target instanceof Window) {
    store.dispatch(
      uiSlice.actions.setDeviceTypeEvent(
        getDeviceTypeByWidth(event.target.innerWidth)
      )
    );
  }
});

hydrateRoot(
  document,
  <App store={store} css={cssAssets} js={jsAssets}>
    <RouterProvider router={router} />
  </App>
);
