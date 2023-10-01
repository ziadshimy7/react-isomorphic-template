import { createSlice } from "@reduxjs/toolkit";
import { authDomain, authInitialState } from "./constants";
import { authGetUser, authLogin, authRegister } from "./actions";

export const authSlice = createSlice({
  name: authDomain,
  initialState: authInitialState,
  reducers: {},
  extraReducers({ addCase }) {
    addCase(authRegister.fulfilled, (draft, action) => {
      draft.userInfo = action.payload;
    });

    addCase(authLogin.fulfilled, (draft, action) => {
      draft.userInfo = action.payload;
    });

    addCase(authGetUser.fulfilled, (draft, action) => {
      draft.userInfo = action.payload;
    });
  },
});
