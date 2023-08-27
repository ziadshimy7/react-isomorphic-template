import { FC, useCallback, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import LoginSharpIcon from "@mui/icons-material/LoginSharp";
import { Link } from "@shared/components/link";
import { SideMenu } from "@shared/components/side-menu";

import styles from "./index.module.scss";

export const HeaderContainer: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleSideMenu = useCallback(() => {
    setIsMenuOpen((previousState) => !previousState);
  }, []);

  return (
    <header className={styles.header}>
      <Link className={styles.header__logo} to="/">
        <img src="/images/home-page/trust-bank-logo.svg" alt="trustbank logo" />
        <h3>TrustBank</h3>
      </Link>
      <ul className={styles.header__list}>
        <li>
          <Link to="#s">Features</Link>
        </li>
        <li>
          <Link to="#s">Pricing</Link>
        </li>
        <li>
          <Link to="#s">Business</Link>
        </li>
        <li>
          <Link to="#s">About</Link>
        </li>
      </ul>
      <div className={styles.header__buttons}>
        <Link to="/auth" className={styles.header__buttons__login}>
          Login
        </Link>
        <Link
          to="/auth/register"
          className={styles.header__buttons__signup}
          type="button"
        >
          Sign up
        </Link>
      </div>
      <div className={styles.header__icons}>
        <button type="button">
          <LoginSharpIcon />
        </button>
        <button onClick={handleToggleSideMenu} type="button">
          <MenuIcon />
        </button>
      </div>

      <SideMenu onCloseMenu={handleToggleSideMenu} visible={isMenuOpen} />
    </header>
  );
};
