import { UiState } from "./types";

export const uiDomain = "ui" as const;

export const uiInitialState: UiState = {
  deviceType: "mobile",
  meta: {},
};
