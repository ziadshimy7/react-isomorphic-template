import { FC } from "react";
import { QuickActionProps } from "./types";
import styles from "./index.module.scss";

export const QuickActionButton: FC<QuickActionProps> = ({ icon, action }) => (
  <button type="button" className={styles.btn}>
    {icon}
    <p className={styles.btn__paragraph}>{action}</p>
  </button>
);
