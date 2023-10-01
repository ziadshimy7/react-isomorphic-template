import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
  PayloadAction,
} from "@reduxjs/toolkit";
import { IFulfilledAction, IPendingAction, IRejectedAction } from "./types";
import { loadingEntityAdapter } from "./adapter";
import { loadingDomain, loadingInitialState } from "./constants";

export const getTypePrefixByAction = (
  action: IPendingAction | IFulfilledAction | IRejectedAction
): string =>
  action.type.replace(new RegExp(`/${action.meta.requestStatus}$`), "");

export const loadingSlice = createSlice({
  name: loadingDomain,
  initialState: loadingInitialState,
  reducers: {
    reset: (draft, action: PayloadAction<string | string[]>) => {
      if (typeof action.payload === "string") {
        loadingEntityAdapter.removeOne(draft, action.payload);
      } else {
        loadingEntityAdapter.removeMany(draft, action.payload);
      }
    },
  },
  extraReducers: ({ addMatcher }) => {
    addMatcher(isPending, (draft, action) => {
      const typePrefix = getTypePrefixByAction(action);

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: "pending",
      });
    });

    addMatcher(isFulfilled, (draft, action) => {
      const typePrefix = getTypePrefixByAction(action);

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: "done",
      });
    });

    addMatcher(isRejected, (draft, action) => {
      const typePrefix = getTypePrefixByAction(action);

      loadingEntityAdapter.upsertOne(draft, {
        typePrefix,
        loadingStatus: "fail",
      });
    });
  },
});
