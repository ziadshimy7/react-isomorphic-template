import { FC } from "react";
import { Transaction } from "./transaction";
import styles from "./index.module.scss";

export const RecentTransactions: FC = () => (
  <div className={styles.RecentTransactions}>
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
    <button type="button" className={styles.btn}>
      ...
    </button>
  </div>
);
