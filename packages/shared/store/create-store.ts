import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import type { ThunkExtraArgument } from "packages/global-types/types";
import { uiSlice } from "./ui/slice";
import { loadingSlice } from "./loading/slice";
import { authSlice } from "./auth/slice";
import { listenerMiddleware } from "./start-app-listening";

export const createStore = ({
  preloadedState,
  requestConfig,
}: Pick<ConfigureStoreOptions, "preloadedState"> & ThunkExtraArgument = {}) => {
  const store = configureStore({
    preloadedState,
    devTools: true,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: { extraArgument: { requestConfig } },
      }).prepend(listenerMiddleware.middleware),
    reducer: {
      [uiSlice.name]: uiSlice.reducer,
      [loadingSlice.name]: loadingSlice.reducer,
      [authSlice.name]: authSlice.reducer,
    },
  });

  return store;
};
