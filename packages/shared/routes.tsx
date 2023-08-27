import { RouteObject } from "react-router-dom";
import { dynamic } from "./utils/dynamic";

const HomePage = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page" */
      "@shared/pages/index"
    ),
  { asset: "home-page" }
);

const AuthLayout = dynamic(
  () =>
    import(
      /* webpackChunkName: "auth-layout" */
      "@shared/pages/auth/_layout"
    ),
  { asset: "auth-layout" }
);

const AuthRegisterPage = dynamic(
  () =>
    import(
      /* webpackChunkName: "register-page" */
      "@shared/pages/auth/register"
    ),
  { asset: "register-page" }
);

const AuthLoginPage = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */
      "@shared/pages/auth/login"
    ),
  { asset: "login-page" }
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <AuthLoginPage /> },
      { path: "register", element: <AuthRegisterPage /> },
    ],
  },
];
