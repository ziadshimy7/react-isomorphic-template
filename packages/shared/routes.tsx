import { RouteObject } from "react-router-dom";
import { dynamic } from "./utils/dynamic";

const HomePage = dynamic(
  () =>
    import(
      /* webpackChunkName: "home-page" */
      "@shared/containers/home-page"
    ),
  { asset: "home-page" }
);

const Test = dynamic(
  () =>
    import(
      /* webpackChunkName: "test" */
      "@shared/components/test"
    ),
  { asset: "test" }
);

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "test",
    element: <Test />,
  },
];
