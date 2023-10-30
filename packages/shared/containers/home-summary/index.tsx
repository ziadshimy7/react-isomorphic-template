import { FC } from "react";
import styles from "./index.module.scss";
import { HomeAccountSummary } from "../../components/home-account-summary";
import { HomeTransactionTypes } from "../../components/home-transaction-types";

export const HomeSummary: FC = () => (
  <section className={styles.section}>
    <div className={styles.summary}>
      <h1 className={styles.account}>Account Summary</h1>
      <HomeAccountSummary />
    </div>
    <div>
      <h1>Transaction Types</h1>
      <HomeTransactionTypes />
    </div>
  </section>
);
