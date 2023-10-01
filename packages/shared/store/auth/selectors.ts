import { RootSelector } from "packages/global-types/types";
import { createSelector } from "@reduxjs/toolkit";
import type { User } from "./types";

export const clientInfoSelector: RootSelector<Partial<User> | undefined> = (
  state
) => state.auth.userInfo;

export const isAuthorizedSelector = createSelector(
  clientInfoSelector,
  (clientInfo) => clientInfo?.email != null && clientInfo.firstName != null
);

export const userInitialsSelector = createSelector(
  clientInfoSelector,
  (info) => {
    if (info?.firstName != null && info?.lastName != null) {
      const initials = `${info.firstName.at(0)?.toUpperCase()}${info.lastName
        .at(0)
        ?.toUpperCase()}`;

      return initials;
    }

    return "";
  }
);
