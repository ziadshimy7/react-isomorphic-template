import { RouteObject } from "react-router-dom";
import { dynamic } from "./utils/dynamic";

const MainLayout = dynamic(
  () =>
    import(
      /* webpackChunkName: "main-layout" */
      "@shared/pages/_layout"
    ),
  { asset: "main-layout" },
);

const AuthLayout = dynamic(
  () =>
    import(
      /* webpackChunkName: "auth-layout" */
      "@shared/pages/auth/_layout"
    ),
  { asset: "auth-layout" },
);

const HomeLayout = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-layout" */
      "@shared/pages/home/_layout"
    ),
  { asset: "home-layout" },
);

const HomePage = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page" */
      "@shared/pages/home"
    ),
  { asset: "home-page" },
);

const AuthRegisterPage = dynamic(
  () =>
    import(
      /* webpackChunkName: "register-page" */
      "@shared/pages/auth/register"
    ),
  { asset: "register-page" },
);

const CompletedRegisterPage = dynamic(
  () =>
    import(
      /* webpackChunkName: "complete-register-page" */
      "@shared/pages/auth/complete-register"
    ),
  { asset: "complete-register-page" },
);

const AuthLoginPage = dynamic(
  () =>
    import(
      /* webpackChunkName: "login-page" */
      "@shared/pages/auth/login"
    ),
  { asset: "login-page" },
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "auth",
        element: <AuthLayout />,
        children: [
          { index: true, element: <AuthLoginPage /> },
          { path: "register", element: <AuthRegisterPage /> },
          { path: "completed", element: <CompletedRegisterPage /> },
        ],
      },
    ],
  },
  {
    path: "/home",
    element: <HomeLayout />,
    children: [{ index: true, element: <HomePage /> }],
  },
];
