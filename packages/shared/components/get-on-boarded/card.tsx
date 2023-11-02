import { FC } from "react";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LinearProgress from "@mui/joy/LinearProgress";
import styles from "./card.module.scss";
import { GetOnBoardProps } from "./type";

export const BoardCard: FC<GetOnBoardProps> = ({ task, percent }) => (
  <div className={styles.board_card}>
    <div className={styles.board_card__header}>
      <PersonOutlineIcon style={{ color: "#2DD7AE" }} />
      <h2 className={styles.board_card__header__title}>{task}</h2>
    </div>
    <div className={styles.board_card__progress}>
      <p className={styles.board_card__progress__percentage}>
        {percent}% Completed
      </p>
      <LinearProgress
        color="warning"
        determinate
        size="md"
        value={percent}
        variant="solid"
      />
    </div>
  </div>
);
