import { HomeHeaderContainer } from "@shared/containers/home-header";
import { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const HomeLayout: FC = () => (
  <>
    <HomeHeaderContainer />
    <main>
      <Outlet />
    </main>

    <ScrollRestoration />
  </>
);
export default HomeLayout;
