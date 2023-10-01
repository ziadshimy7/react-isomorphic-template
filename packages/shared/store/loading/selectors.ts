import { RootSelector, RootState } from "packages/global-types/types";
import { loadingEntityAdapter } from "./adapter";
import { LoadingItem } from "./types";

export const loadingEntityAdapterSelectors =
  loadingEntityAdapter.getSelectors<RootState>((state) => state.loading);

export const loadingSelector =
  (typePrefix: string): RootSelector<LoadingItem> =>
  (state) =>
    loadingEntityAdapterSelectors.selectById(state, typePrefix) ?? {
      typePrefix,
      loadingStatus: "initial",
    };
