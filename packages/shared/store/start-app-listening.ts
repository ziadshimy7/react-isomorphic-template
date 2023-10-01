import { createListenerMiddleware } from "@reduxjs/toolkit";
import type { TypedStartListening } from "@reduxjs/toolkit";
import type { AppDispatch, RootState } from "packages/global-types/types";

export const listenerMiddleware = createListenerMiddleware();

export type AppStartListening = TypedStartListening<RootState, AppDispatch>;

export const startAppListening =
  // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
  listenerMiddleware.startListening as AppStartListening;
