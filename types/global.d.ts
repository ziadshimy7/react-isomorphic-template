import { RootState } from "packages/global-types/types";

declare global {
  // eslint-disable-next-line no-unused-vars -- Override
  interface Window {
    __CSS_ASSETS__: string[];
    __JS_ASSETS__: string[];
    __PRELOADED_STATE__: RootState;
  }
}

export {};
