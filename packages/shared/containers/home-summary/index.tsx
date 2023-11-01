import { FC } from "react";
import styles from "./index.module.scss";
import { HomeAccountSummary } from "../../components/home-account-summary";
import { HomeTransactionTypes } from "../../components/home-transaction-types";

export const HomeSummary: FC = () => (
  <section className={styles.section}>
    <div className={styles.section__summary}>
      <h1 className={styles.section__summary__account}>Account Summary</h1>
      <HomeAccountSummary />
    </div>
    <div>
      <h1>Transaction Types</h1>
      <HomeTransactionTypes />
    </div>
  </section>
);
