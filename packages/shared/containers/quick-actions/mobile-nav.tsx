import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";
import MessageIcon from "@mui/icons-material/Message";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { FC } from "react";
import styles from "./mobile-nav.module.scss";

export const QuickActionsMobileNav: FC = () => (
  <nav className={styles.mobile_nav}>
    <h1>Transfer</h1>
    <ul>
      <li>
        <AccountBalanceIcon />
      </li>
      <li>
        <ReceiptIcon />
      </li>
      <li>
        <PaymentsIcon />
      </li>
      <li>
        <MessageIcon />
      </li>
      <li>
        <LoyaltyIcon />
      </li>
    </ul>
  </nav>
);
