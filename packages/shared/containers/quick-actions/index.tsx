import { QuickActionButton } from "@shared/components/quick-action-button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";
import MessageIcon from "@mui/icons-material/Message";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { FC } from "react";
import styles from "./index.module.scss";

const QuickActions: FC = () => (
  <>
    <h1 className={styles.h1Mobile}>Quick Features</h1>
    <section className={styles.quickActions}>
      <QuickActionButton Icon={<AccountBalanceIcon />} Action="Banking" />
      <QuickActionButton Icon={<ReceiptIcon />} Action="Bills Pay" />
      <QuickActionButton Icon={<PaymentsIcon />} Action="Fund Transfer" />
      <QuickActionButton Icon={<MessageIcon />} Action="Message Center" />
      <QuickActionButton Icon={<HandshakeIcon />} Action="Partners" />
      <QuickActionButton Icon={<LoyaltyIcon />} Action="Benifits" />
    </section>
    <nav className={styles.mobileNav}>
      <h1 className={styles.h1MobNav}>Transfer</h1>
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
  </>
);

export default QuickActions;
