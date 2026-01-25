import axios, { CreateAxiosDefaults } from "axios";
import { API_HOST } from "./constants";

const config: CreateAxiosDefaults = {
  baseURL: API_HOST,
  withCredentials: true,
  paramsSerializer: {
    indexes: null,
  },
};

export const requestInstance = axios.create(config);

requestInstance.interceptors.request.use((requestConfig) => {
  const workspaceKey = sessionStorage.getItem("workspaceKey");
  const modifiedConfig = { ...requestConfig };

  if (workspaceKey) {
    modifiedConfig.headers["x-workspace"] = workspaceKey;
  }

  return modifiedConfig;
});
