import { FC } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LinearProgress from "@mui/joy/LinearProgress";
import styles from "./card.module.scss";

export const BoardCard: FC = () => (
  <div className={styles.board_card}>
    <div className={styles.board_card__header}>
      <PersonOutlineIcon style={{ color: "#2DD7AE" }} />
      <h2 className={styles.board_card__header__title}>Upadate Profile</h2>
    </div>
    <div className={styles.board_card__progress}>
      <p className={styles.board_card__progress__percentage}>15% Completed</p>
      <LinearProgress
        color="warning"
        determinate
        size="md"
        value={15}
        variant="solid"
      />
    </div>
  </div>
);
