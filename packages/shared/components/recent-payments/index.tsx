import { FC } from "react";
import styles from "./index.module.scss";
import { Payment } from "./payment";

export const RecentPayments: FC = () => (
  <div className={styles.recent_payments}>
    <h1>Recent Payments</h1>
    <ul>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
      <li>
        <Payment />
      </li>
    </ul>
  </div>
);
