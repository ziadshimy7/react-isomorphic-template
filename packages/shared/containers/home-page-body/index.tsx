import { FC } from "react";
import { QuickActions } from "@shared/containers/quick-actions";
import { RecentTransactions } from "@shared/components/recent-transactions";
import { GetOnBoarded } from "@shared/components/get-on-boarded";
import { Offers } from "@shared/components/offers";
import { RecentPayments } from "@shared/components/recent-payments";
import styles from "./index.module.scss";

const HomePageBody: FC = () => (
  <div className={styles.home_page_body}>
    <div className={styles.home_page_body__main}>
      <QuickActions />
      <Offers />
      <RecentPayments />
    </div>
    <aside className={styles.home_page_body__aside}>
      <RecentTransactions />
      <GetOnBoarded />
    </aside>
  </div>
);

export default HomePageBody;
