import { createSelector } from "@reduxjs/toolkit";

import { DeviceType, Meta } from "@shared/interfaces/ui";

import { RootSelector } from "../types";

export const deviceTypeSelector: RootSelector<DeviceType> = (state) =>
  state.ui.deviceType;

export const metaSelector: RootSelector<Meta | undefined> = (state) =>
  state.ui.meta;

export const isMobileSelector = createSelector(
  deviceTypeSelector,
  (deviceType) => deviceType === "mobile"
);

export const isTabletSelector = createSelector(
  deviceTypeSelector,
  (deviceType) => deviceType === "tablet"
);

export const isDesktopSelector = createSelector(
  deviceTypeSelector,
  (deviceType) => deviceType === "desktop"
);

export const isMobileOrTabletSelector = createSelector(
  deviceTypeSelector,
  (deviceType) => deviceType === "mobile" || deviceType === "tablet"
);
