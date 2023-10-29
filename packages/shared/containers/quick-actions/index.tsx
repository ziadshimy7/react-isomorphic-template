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
  <section className={styles.quickActions}>
    <QuickActionButton Icon={<AccountBalanceIcon />} Action="Banking" />
    <QuickActionButton Icon={<ReceiptIcon />} Action="Bills Pay" />
    <QuickActionButton Icon={<PaymentsIcon />} Action="Fund Transfer" />
    <QuickActionButton Icon={<MessageIcon />} Action="Message Center" />
    <QuickActionButton Icon={<HandshakeIcon />} Action="Partners" />
    <QuickActionButton Icon={<LoyaltyIcon />} Action="Benifits" />
  </section>
);

export default QuickActions;
