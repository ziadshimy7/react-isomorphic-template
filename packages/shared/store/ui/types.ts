export type DeviceType = "mobile" | "tablet" | "desktop";

export type OpenGraphKey = `og:${string}`;

export interface Meta {
  title?: string;
  description?: string;

  [openGraphKey: OpenGraphKey]: string;
}

export interface UiState {
  deviceType: DeviceType;
  meta?: Meta;
}
