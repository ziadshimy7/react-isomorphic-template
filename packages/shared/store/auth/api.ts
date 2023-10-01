import { requestInstance } from "@shared/axios";
import { AuthGetUser, AuthLoginUser, AuthRegisterUser } from "./types";

export const authRegisterApi: AuthRegisterUser = async (params) => {
  const response = await requestInstance.post("/api/auth/register", {
    ...params,
  });

  return response.data;
};

export const authLoginApi: AuthLoginUser = async (params) => {
  const response = await requestInstance.post("/api/auth/login", {
    ...params,
  });

  return response.data;
};

export const authGetUserApi: AuthGetUser = async () => {
  const response = await requestInstance.get("/api/auth/user");

  return response.data;
};
