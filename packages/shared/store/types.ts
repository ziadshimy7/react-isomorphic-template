import { AxiosRequestConfig } from "axios";
import type { asyncStore } from "./index";

export type RootStore = typeof asyncStore.store;
export type RootState = ReturnType<RootStore["getState"]>;
export type RootSelector<Data> = (state: RootState) => Data;
export type AppDispatch = RootStore["dispatch"];

export enum ApiResponseStatus {
  Success,
}

export interface ApiResponse<Data = undefined> {
  data: Data;
  errors?: unknown;
  message: string;
  status: ApiResponseStatus;
}

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
}

export type PartialRootState = Partial<RootState>;

export interface ThunkExtraArgument {
  requestConfig?: AxiosRequestConfig;
}
