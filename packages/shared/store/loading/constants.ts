import { loadingEntityAdapter } from "./entity-adapters";
import { LoadingState } from "./types";

export const loadingDomain = "loading";

export const loadingInitialState: LoadingState =
  loadingEntityAdapter.getInitialState();
