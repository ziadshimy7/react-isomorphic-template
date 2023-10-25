import { FC, useCallback, useState } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { Link } from "@shared/components/link";
import { SideMenu } from "@shared/components/side-menu";

import MenuIcon from "@mui/icons-material/Menu";
import { SearchSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userInitialsSelector } from "@shared/store/auth/selectors";
import styles from "./index.module.scss";

export const HeaderContainer: FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userInitials = useSelector(userInitialsSelector);

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
        <button type="button" className={styles.header__buttons__icon_wrapper}>
          <SearchSharp />
        </button>
        <button type="button" className={styles.header__buttons__icon_wrapper}>
          <NotificationsOutlinedIcon />
        </button>
        <button
          onClick={handleToggleSideMenu}
          type="button"
          className={styles.header__buttons__icon_wrapper}
        >
          {userInitials || <MenuIcon />}
        </button>
      </div>

      <SideMenu onCloseMenu={handleToggleSideMenu} visible={isMenuOpen} />
    </header>
  );
};
