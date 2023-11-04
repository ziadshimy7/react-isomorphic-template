import { FC } from "react";
import { Transaction } from "./transaction";
import styles from "./index.module.scss";

export const RecentTransactions: FC = () => (
  <div className={styles.recent_transactions}>
    <h1>Recent Transactions</h1>
    <ul>
      <li>
        <Transaction
          photo="/images/home-page/omar.jpeg"
          amount={1560}
          date="22 May, 2022"
          rate={3}
          name="Omar Zaid"
        />
      </li>
      <li>
        <Transaction
          photo="/images/home-page/zozo.jpg"
          amount={1700}
          date="22 May, 2022"
          rate={3}
          name="Ziad Elshimy"
        />
      </li>
      <li>
        <Transaction
          photo="/images/home-page/3absamad.jpeg"
          amount={2500}
          date="22 May, 2022"
          rate={3}
          name="Mohamed Abdelsamad"
        />
      </li>
      <li>
        <Transaction
          photo="/images/home-page/mamet3absamad.jpg"
          amount={2.5}
          date="26 March, 2023"
          rate={2}
          name="Mamet Abdelsamad"
        />
      </li>
      <li>
        <Transaction
          photo="/images/home-page/hussein.jpg"
          amount={2000}
          date="06 September, 2023"
          rate={3}
          name="Hussein Almabry"
        />
      </li>
    </ul>
    <button type="button" className={styles.recent_transactions__btn}>
      ...
    </button>
  </div>
);
