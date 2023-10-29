import { FC } from "react";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AppleIcon from "@mui/icons-material/Apple";
import styles from "./index.module.scss";

export const BankCard: FC = () => (
  <div className={styles.bankCard}>
    <div className={styles.icons}>
      <p>eco</p>
      <ContactlessIcon />
    </div>
    <div className={styles.data}>
      <p>Omar Medhat Elsayed</p>
      <p>**** **** **** 7322</p>
    </div>
    <div className={styles.exp}>
      <p>Exp 09/22</p>
      <div className={styles.applePay}>
        <AppleIcon />
        <p>Pay</p>
      </div>
    </div>
  </div>
);
