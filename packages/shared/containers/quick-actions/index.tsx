import { QuickActionButton } from "@shared/components/quick-action-button";
import { FC } from "react";
import styles from "./index.module.scss";
import { QuickActionsMobileNav } from "./mobile-nav";

export const QuickActions: FC = () => (
  <>
    <section className={styles.quickActions}>
      <h1 className={styles.quickActions__h1Mobile}>Quick Features</h1>
      <ul>
        <li>
          <QuickActionButton icon="/images/home-page/banking.svg" action="Banking" />
        </li>
        <li>
          <QuickActionButton icon="/images/home-page/bills-pay.svg" action="Bills Pay" />
        </li>
        <li>
          <QuickActionButton icon="/images/home-page/fund-transfer.svg" action="Fund Transfer" />
        </li>
        <li>
          <QuickActionButton icon="/images/home-page/message-center.svg" action="Message Center" />
        </li>
        <li>
          <QuickActionButton icon="/images/home-page/partner.svg" action="Partners" />
        </li>
        <li>
          <QuickActionButton icon="/images/home-page/benifits.svg" action="Benifits" />
        </li>
      </ul>
    </section>
    <QuickActionsMobileNav />
  </>
);
