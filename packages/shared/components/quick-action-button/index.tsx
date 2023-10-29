import { FC } from "react";
import { QuickActionProps } from "./types";
import styles from "./index.module.scss";

export const QuickActionButton: FC<QuickActionProps> = ({ Icon, Action }) => (
  <button type="button" className={styles.btn}>
    {Icon}
    <p>{Action}</p>
  </button>
);
