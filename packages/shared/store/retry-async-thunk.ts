import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { AsyncThunkConfig } from "./types";

let retry = true;
export const createRetryableAsyncThunk = <Returned, ThunkArgument = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArgument,
    AsyncThunkConfig
  >
): AsyncThunk<Returned, ThunkArgument, AsyncThunkConfig> =>
  createAsyncThunk<Returned, ThunkArgument, AsyncThunkConfig>(
    typePrefix,
    // @ts-expect-error Ошибка типов, не влияет на работу
    async (params: ThunkArgument, thunkApi) => {
      try {
        return await payloadCreator(params, thunkApi);
      } catch (error) {
        if (isAxiosError(error) && error.response?.status === 401 && retry) {
          // await thunkApi.dispatch(authReLogin());
          retry = false;
          return payloadCreator(params, thunkApi);
        }
        return thunkApi.rejectWithValue(error);
      }
    }
  );
