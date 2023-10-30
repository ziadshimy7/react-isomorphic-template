import { FC } from "react";
import QuickActions from "@shared/containers/quick-actions";
import { RecentTransactions } from "@shared/components/recent-transactions";
import { GetOnBoarded } from "@shared/components/get-on-boarded";
import { Offers } from "@shared/components/offers";
import { RecentPayments } from "@shared/components/recent-payments";
import styles from "./index.module.scss";

const HomePageBody: FC = () => (
  <body className={styles.homePageBody}>
    <div className={styles.homePageBodyMain}>
      <QuickActions />
      <Offers />
      <RecentPayments />
    </div>
    <aside className={styles.homePageAside}>
      <RecentTransactions />
      <GetOnBoarded />
    </aside>
  </body>
);

export default HomePageBody;
