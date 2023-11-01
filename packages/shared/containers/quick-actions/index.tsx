import { QuickActionButton } from "@shared/components/quick-action-button";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import ReceiptIcon from "@mui/icons-material/Receipt";
import PaymentsIcon from "@mui/icons-material/Payments";
import MessageIcon from "@mui/icons-material/Message";
import HandshakeIcon from "@mui/icons-material/Handshake";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import { FC } from "react";
import styles from "./index.module.scss";
import { QuickActionsMobileNav } from "./mobile-nav";

const QuickActions: FC = () => (
  <>
    <h1 className={styles.h1Mobile}>Quick Features</h1>
    <section className={styles.quickActions}>
      <QuickActionButton icon={<AccountBalanceIcon />} action="Banking" />
      <QuickActionButton icon={<ReceiptIcon />} action="Bills Pay" />
      <QuickActionButton icon={<PaymentsIcon />} action="Fund Transfer" />
      <QuickActionButton icon={<MessageIcon />} action="Message Center" />
      <QuickActionButton icon={<HandshakeIcon />} action="Partners" />
      <QuickActionButton icon={<LoyaltyIcon />} action="Benifits" />
    </section>
    <QuickActionsMobileNav />
  </>
);

export default QuickActions;
