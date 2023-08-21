import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DeviceType, Meta } from "../types/ui";
import { uiDomain, uiInitialState } from "../constants/ui";

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
