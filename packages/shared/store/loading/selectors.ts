import { RootSelector, RootState } from "../types";
import { loadingEntityAdapter } from "./entity-adapters";
import { LoadingItem, LoadingStatus } from "./types";

export const loadingEntityAdapterSelectors =
  loadingEntityAdapter.getSelectors<RootState>((state) => state.loading);

export const loadingSelector =
  (typePrefix: string): RootSelector<LoadingItem> =>
  (state) =>
    loadingEntityAdapterSelectors.selectById(state, typePrefix) ?? {
      typePrefix,
      loadingStatus: LoadingStatus.Initial,
    };
