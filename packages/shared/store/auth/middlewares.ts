import { router } from "@client/create-browser-router";
import { isAnyOf } from "@reduxjs/toolkit";
import { startAppListening } from "../start-app-listening";
import { authGetUser, authLogin } from "./actions";

startAppListening({
  matcher: isAnyOf(authLogin.fulfilled, authGetUser.fulfilled),
  effect: () => {
    router.navigate("/");
  },
});
