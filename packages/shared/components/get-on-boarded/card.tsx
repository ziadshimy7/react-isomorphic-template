import { FC } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LinearProgress from "@mui/joy/LinearProgress";
import styles from "./card.module.scss";

export const BoardCard: FC = () => (
  <div className={styles.BoardCard}>
    <div className={styles.cardHeader}>
      <PersonOutlineIcon style={{ color: "#2DD7AE" }} />
      <h2>Upadate Profile</h2>
    </div>
    <div className={styles.progress}>
      <p className={styles.percentage}>15% Completed</p>
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
