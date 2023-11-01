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
    <section className={styles.quickActions}>
      <h1 className={styles.quickActions__h1Mobile}>Quick Features</h1>
      <ul>
        <li>
          <QuickActionButton icon={<AccountBalanceIcon />} action="Banking" />
        </li>
        <li>
          <QuickActionButton icon={<ReceiptIcon />} action="Bills Pay" />
        </li>
        <li>
          <QuickActionButton icon={<PaymentsIcon />} action="Fund Transfer" />
        </li>
        <li>
          <QuickActionButton icon={<MessageIcon />} action="Message Center" />
        </li>
        <li>
          {" "}
          <QuickActionButton icon={<HandshakeIcon />} action="Partners" />
        </li>
        <li>
          <QuickActionButton icon={<LoyaltyIcon />} action="Benifits" />
        </li>
      </ul>
    </section>
    <QuickActionsMobileNav />
  </>
);

export default QuickActions;
