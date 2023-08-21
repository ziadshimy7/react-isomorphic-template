import { PartialRootState } from "packages/global-types/types";

interface GetPreloadedStateOptions {
  isMobile?: boolean;
}

export const getPreloadedState = ({
  isMobile,
}: GetPreloadedStateOptions): PartialRootState => ({
  ui: { deviceType: isMobile ? "mobile" : "desktop" },
});
