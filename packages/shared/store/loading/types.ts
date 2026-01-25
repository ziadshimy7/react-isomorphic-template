import { EntityState } from "@reduxjs/toolkit";
import {
  AsyncThunkPendingActionCreator,
  AsyncThunkFulfilledActionCreator,
  AsyncThunkRejectedActionCreator,
} from "@reduxjs/toolkit/dist/createAsyncThunk";

export type IPendingAction = ReturnType<
  AsyncThunkPendingActionCreator<unknown>
>;
export type IFulfilledAction = ReturnType<
  AsyncThunkFulfilledActionCreator<unknown, unknown>
>;
export type IRejectedAction = ReturnType<
  AsyncThunkRejectedActionCreator<unknown>
>;

export enum LoadingStatus {
  Initial,
  Pending,
  Fulfilled,
  Rejected,
}

export interface LoadingItem {
  typePrefix: string;
  loadingStatus: LoadingStatus;
  error?: string;
}

export type LoadingState = EntityState<LoadingItem>;
