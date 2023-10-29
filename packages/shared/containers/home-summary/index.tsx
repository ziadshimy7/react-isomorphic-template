import { FC } from "react";
import styles from "./index.module.scss";
import { HomeAccountSummary } from "../../components/home-account-summary";
import { HomeTransactionTypes } from "../../components/home-transaction-types";

export const HomeSummary: FC = () => (
  <section className={styles.section}>
    <div className={styles.summary}>
      <h1>Account Summary</h1>
      <HomeAccountSummary />
    </div>
    <div>
      <h1>TransactionTypes</h1>
      <HomeTransactionTypes />
    </div>
  </section>
);
