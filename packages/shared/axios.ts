import axios from "axios";
import { API_HOST } from "./constants";

export const requestInstance = axios.create({
  baseURL: API_HOST,
  withCredentials: true,
});
