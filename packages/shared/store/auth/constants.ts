import { AuthState } from "./types";

export const authDomain = "auth" as const;

export const authInitialState: AuthState = {
  userInfo: {},
};
