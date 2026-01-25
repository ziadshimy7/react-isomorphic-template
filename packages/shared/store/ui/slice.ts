import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { uiDomain, uiInitialState } from "@shared/constants/ui";

import { DeviceType, Meta } from "@shared/interfaces/ui";

export const uiSlice = createSlice({
  name: uiDomain,
  initialState: uiInitialState,
  reducers: {
    setDeviceTypeEvent: (draft, action: PayloadAction<DeviceType>) => {
      draft.deviceType = action.payload;
    },
    setMeta: (draft, action: PayloadAction<Meta>) => {
      draft.meta = {
        ...action.payload,
        title: action.payload.title
          ? `${action.payload.title} | EDU`
          : uiInitialState.meta.title,
      };
    },
  },
});
