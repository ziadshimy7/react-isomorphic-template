import {
  AsyncThunk,
  AsyncThunkPayloadCreator,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { AsyncThunkConfig } from "./types";

export const createAppAsyncThunk = <Returned, ThunkArgument = void>(
  typePrefix: string,
  payloadCreator: AsyncThunkPayloadCreator<
    Returned,
    ThunkArgument,
    AsyncThunkConfig
  >,
): AsyncThunk<Returned, ThunkArgument, AsyncThunkConfig> =>
  createAsyncThunk<Returned, ThunkArgument, AsyncThunkConfig>(
    typePrefix,
    // @ts-expect-error Ошибка типов, не влияет на работу
    async (params: ThunkArgument, thunkApi) => {
      try {
        return await payloadCreator(params, thunkApi);
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    },
  );
