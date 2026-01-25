import { RouteObject } from "react-router-dom";
import { dynamic } from "./lib/dynamic";

const HomePage = dynamic(() => import("./pages/index"));
const MainLayout = dynamic(() => import("./pages/_layout"));

export const routes: RouteObject[] = [
  {
    // errorElement: <ErrorPage />,
    children: [
      {
        element: <MainLayout />,
        path: "/",
        children: [
          { index: true, element: <HomePage /> },
          // { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
];
