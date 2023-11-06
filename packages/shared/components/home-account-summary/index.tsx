import { FC } from "react";
import { BankCard } from "../bank-card";
import styles from "./index.module.scss";

export const HomeAccountSummary: FC = () => (
  <div className={styles.carousel}>
    <ul className={styles.carousel__list}>
      <li>
        <BankCard />
      </li>
      <li>
        <BankCard />
      </li>
      <li>
        <BankCard />
      </li>
      <li>
        <BankCard />
      </li>
    </ul>
  </div>
);
