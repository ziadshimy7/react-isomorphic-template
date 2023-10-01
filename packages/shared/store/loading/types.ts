import { EntityState } from "@reduxjs/toolkit";
import {
  AsyncThunkPendingActionCreator,
  AsyncThunkFulfilledActionCreator,
  AsyncThunkRejectedActionCreator,
} from "@reduxjs/toolkit/dist/createAsyncThunk";

export type LoadingStatus = "initial" | "pending" | "done" | "fail";

export type IPendingAction = ReturnType<
  AsyncThunkPendingActionCreator<unknown>
>;
export type IFulfilledAction = ReturnType<
  AsyncThunkFulfilledActionCreator<unknown, unknown>
>;
export type IRejectedAction = ReturnType<
  AsyncThunkRejectedActionCreator<unknown>
>;

export interface LoadingItem {
  typePrefix: string;
  loadingStatus: LoadingStatus;
}

export type LoadingState = EntityState<LoadingItem>;
