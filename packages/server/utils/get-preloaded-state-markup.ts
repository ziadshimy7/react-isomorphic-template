import { RootStore } from "packages/global-types/types";

export const getPreloadedStateMarkup = (store: RootStore) =>
  `window.__PRELOADED_STATE__=${JSON.stringify(store.getState())};`;
