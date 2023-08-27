import { FC } from "react";
import clsx from "clsx";
import AttachMoneySharpIcon from "@mui/icons-material/AttachMoneySharp";
import WorkIcon from "@mui/icons-material/Work";
import SettingsIcon from "@mui/icons-material/Settings";
import InfoIcon from "@mui/icons-material/Info";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CloseIcon from "@mui/icons-material/Close";

import styles from "./index.module.scss";
import { Link } from "../link";

interface SideMenuProps {
  visible: boolean;
  onCloseMenu: () => void;
}

export const SideMenu: FC<SideMenuProps> = ({
  visible,
  onCloseMenu: handleCloseMenu,
}) => (
  <aside
    className={clsx(styles.side_menu, visible && styles.side_menu__visible)}
  >
    <CloseIcon onClick={handleCloseMenu} className={styles.side_menu__close} />
    <Link className={styles.side_menu__logo} to="/">
      <img src="/images/home-page/trust-bank-logo.svg" alt="trustbank logo" />
      <h3>TrustBank</h3>
    </Link>
    <ul className={styles.side_menu__list}>
      <li>
        <SettingsIcon />
        <Link to="#s">Features</Link>
      </li>
      <li>
        <AttachMoneySharpIcon />
        <Link to="#s">Pricing</Link>
      </li>
      <li>
        <WorkIcon />
        <Link to="#s">Business</Link>
      </li>
      <li>
        <InfoIcon />
        <Link to="#s">About</Link>
      </li>
      <li>
        <LockOpenIcon />
        <Link to="/auth/register">Register</Link>
      </li>
      <li>
        <LoginSharpIcon />
        <Link to="/auth/login">Login</Link>
      </li>
    </ul>
  </aside>
);
