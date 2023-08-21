import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import type { ThunkExtraArgument } from "packages/global-types/types";
import { uiSlice } from "./slices/ui";

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
      }),
    reducer: {
      [uiSlice.name]: uiSlice.reducer,
    },
  });

  return store;
};
