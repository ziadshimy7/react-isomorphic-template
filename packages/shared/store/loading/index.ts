import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { loadingDomain, loadingInitialState } from "./constants";
import { loadingEntityAdapter } from "./entity-adapters";
import {
  IFulfilledAction,
  IPendingAction,
  IRejectedAction,
  LoadingStatus,
} from "./types";

export const getTypePrefixByAction = (
  action: IPendingAction | IFulfilledAction | IRejectedAction,
): string =>
  action.type.replace(new RegExp(`/${action.meta.requestStatus}$`), "");

export const loadingSlice = createSlice({
  name: loadingDomain,
  initialState: loadingInitialState,
  reducers: {
    reset: (draft, action: PayloadAction<string>) => {
      loadingEntityAdapter.removeOne(draft, action.payload);
    },
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(isPending, (draft, action) => {
      const typePrefix = getTypePrefixByAction(action);

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: LoadingStatus.Pending,
        error: undefined,
      });
    });

    addMatcher(isFulfilled, (draft, action) => {
      const typePrefix = getTypePrefixByAction(action);

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: LoadingStatus.Fulfilled,
        error: undefined,
      });
    });

    addMatcher(isRejected, (draft, action: IRejectedAction) => {
      const typePrefix = getTypePrefixByAction(action);
      const error =
        action.payload instanceof AxiosError
          ? action.payload.response?.data?.message || action.payload.message
          : action.error?.message;

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: LoadingStatus.Rejected,
        error: error ?? "Ошибка загрузки данных",
      });
    });
  },
});
