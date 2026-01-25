import { UiState } from "@shared/interfaces/ui";

export const uiDomain = "ui" as const;

export const uiInitialState: UiState = {
  deviceType: "mobile",
  meta: {
    title: "Jobs",
  },
};
