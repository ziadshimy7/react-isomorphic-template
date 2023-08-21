import type { DeviceType } from "@shared/store/types/ui";

export const getDeviceTypeByWidth = (width: number): DeviceType => {
  if (width < 768) {
    return "mobile";
  }

  if (width < 1024) {
    return "tablet";
  }

  return "desktop";
};
