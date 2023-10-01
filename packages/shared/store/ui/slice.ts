import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeviceType, Meta } from "./types";
import { uiDomain, uiInitialState } from "./constants";

export const uiSlice = createSlice({
  name: uiDomain,
  initialState: uiInitialState,
  reducers: {
    setDeviceTypeEvent: (draft, action: PayloadAction<DeviceType>) => {
      draft.deviceType = action.payload;
    },
    setMeta: (draft, action: PayloadAction<Meta>) => {
      draft.meta = action.payload;
    },
  },
});
