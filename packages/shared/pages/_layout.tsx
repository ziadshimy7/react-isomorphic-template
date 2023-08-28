import { HeaderContainer } from "@shared/containers/header";
import { FC } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

const MainLayout: FC = () => (
  <>
    <HeaderContainer />
    <main>
      <Outlet />
    </main>
    <ScrollRestoration />
  </>
);

export default MainLayout;
