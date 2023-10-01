import { HeaderContainer } from "@shared/containers/header";
import { FC, useEffect } from "react";
import { Outlet, ScrollRestoration } from "react-router-dom";

import { useAppDispatch } from "@shared/store/use-app-dispatch";
import { authGetUser } from "@shared/store/auth/actions";
import styles from "./layout.module.scss";

const MainLayout: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(authGetUser());
  }, [dispatch]);

  return (
    <>
      <HeaderContainer />
      <main className={styles.main}>
        <Outlet />
      </main>
      <ScrollRestoration />
    </>
  );
};

export default MainLayout;
