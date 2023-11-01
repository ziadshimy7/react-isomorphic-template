import { FC } from "react";
import { Transaction } from "./transaction";
import styles from "./index.module.scss";

export const RecentTransactions: FC = () => (
  <div className={styles.recent_transactions}>
    <h1>Recent Transactions</h1>
    <ul>
      <li>
        <Transaction />
      </li>
      <li>
        <Transaction />
      </li>
      <li>
        <Transaction />
      </li>
      <li>
        <Transaction />
      </li>
      <li>
        <Transaction />
      </li>
    </ul>
    <button type="button" className={styles.recent_transactions__btn}>
      ...
    </button>
  </div>
);
