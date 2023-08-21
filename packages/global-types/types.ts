import { AxiosRequestConfig } from "axios";
import { createStore } from "packages/store/create-store";

export enum WebpackChunksNames {
  Vendor = "vendor",
  Webpack = "webpack",
}

export interface Assets {
  js: string[];
  css: string[];
}

export type FileAssets = Record<string, Assets>;

export interface ThunkExtraArgument {
  requestConfig?: AxiosRequestConfig;
}

export type RootStore = ReturnType<typeof createStore>;

export type RootState = ReturnType<RootStore["getState"]>;
export type AppDispatch = RootStore["dispatch"];
export type RootSelector<Data> = (state: RootState) => Data;

export interface AsyncThunkConfig {
  state: RootState;
  dispatch: AppDispatch;
  extra: ThunkExtraArgument;
}

export type PartialRootState = Partial<RootState>;
