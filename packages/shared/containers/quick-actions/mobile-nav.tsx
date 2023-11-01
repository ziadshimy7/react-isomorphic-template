import { FC } from "react";
import styles from "./mobile-nav.module.scss";

export const QuickActionsMobileNav: FC = () => (
  <nav className={styles.mobile_nav}>
    <h1>Transfer</h1>
    <ul>
      <li>
        <img src="/images/home-page/banking.svg" alt="banking" />
      </li>
      <li>
        <img src="/images/home-page/bills-pay.svg" alt="banking" />
      </li>
      <li>
        <img src="/images/home-page/fund-transfer.svg" alt="banking" />
      </li>
      <li>
        <img src="/images/home-page/message-center.svg" alt="banking" />
      </li>
      <li>
        <img src="/images/home-page/partner.svg" alt="banking" />
      </li>
    </ul>
  </nav>
);
