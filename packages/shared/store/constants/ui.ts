import { UiState } from "../types/ui";

export const uiDomain = "ui" as const;

export const uiInitialState: UiState = {
  deviceType: "mobile",
  meta: {},
};
