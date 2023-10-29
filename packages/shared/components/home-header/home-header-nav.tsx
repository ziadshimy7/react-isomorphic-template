import { FC } from "react";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./home-header-nav.module.scss";

export const HomeHeaderNav: FC = () => (
  <ul className={styles.header_list}>
    <li>
      <NavLink
        to="/home"
        className={({ isActive }) => clsx(isActive && styles.active)}
      >
        HOME
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/#s"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        DASHBOARD
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/#s"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        WALLET
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/#s"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        TRANSFER
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/#s"
        className={({ isActive }) => (isActive ? styles.active : "")}
      >
        BILLPAY
      </NavLink>
    </li>
  </ul>
);
