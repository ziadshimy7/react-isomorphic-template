import { createAppAsyncThunk } from "../app-async-thunk";
import { authGetUserApi, authLoginApi, authRegisterApi } from "./api";
import { authDomain } from "./constants";

export const authRegister = createAppAsyncThunk(
  `${authDomain}/authRegister`,
  authRegisterApi
);

export const authLogin = createAppAsyncThunk(
  `${authDomain}/authLogin`,
  authLoginApi
);

export const authGetUser = createAppAsyncThunk(
  `${authDomain}/authGetUser`,
  authGetUserApi
);
