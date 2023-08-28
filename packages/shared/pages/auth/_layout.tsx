import { FC } from "react";
import { Outlet } from "react-router-dom";

import styles from "./layout.module.scss";

const AuthLayout: FC = () => (
  <div className={styles.auth_layout}>
    <Outlet />
  </div>
);

export default AuthLayout;
