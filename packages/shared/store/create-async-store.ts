import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";
import { requestInstance } from "@shared/request-instance";
import { listenerMiddleware } from "./listener-middleware";
import { loadingSlice } from "./loading";
import { uiSlice } from "./ui/slice";
import { ThunkExtraArgument } from "./types";

export const createAsyncStore = ({
  preloadedState,
  requestConfig,
}: Pick<ConfigureStoreOptions, "preloadedState"> & ThunkExtraArgument = {}) => {
  const store = configureStore({
    preloadedState,
    devTools: true,
    reducer: {
      [loadingSlice.name]: loadingSlice.reducer,
      [uiSlice.name]: uiSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: requestConfig } }).prepend(
        listenerMiddleware.middleware
      ),
  });

  requestInstance.interceptors.response.use(
    (response) => response,
    async (error) => Promise.reject(error)
  );

  return { store };
};
