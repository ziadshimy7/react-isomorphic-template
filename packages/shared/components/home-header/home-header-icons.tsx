import { FC } from "react";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import { SearchSharp } from "@mui/icons-material";
import { useSelector } from "react-redux";
import { userInitialsSelector } from "@shared/store/auth/selectors";
import styles from "./home-header-icons.module.scss";

export const HomeHeaderIcons: FC = () => {
  const userInitials = useSelector(userInitialsSelector);
  return (
    <div className={styles.buttons}>
      <button type="button" className={styles.buttons__icon_wrapper}>
        <SearchSharp />
      </button>
      <button type="button" className={styles.buttons__icon_wrapper}>
        <NotificationsOutlinedIcon />
      </button>
      <button type="button" className={styles.buttons__icon_wrapper}>
        {userInitials || "OM"}
      </button>
    </div>
  );
};
