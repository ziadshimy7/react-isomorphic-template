import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { AxiosRequestConfig } from "axios";
import type { AppDispatch, RootState } from "packages/global-types/types";

export interface ThunkExtraArgument {
  requestConfig?: AxiosRequestConfig;
}

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  extra: ThunkExtraArgument;
}

export const createAppAsyncThunk = <Returned, ThunkArgument = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArgument,
    AsyncThunkConfig
  >
): AsyncThunk<Returned, ThunkArgument, AsyncThunkConfig> =>
  createAsyncThunk<Returned, ThunkArgument, AsyncThunkConfig>(
    typePrefix,
    payloadCreator
  );
