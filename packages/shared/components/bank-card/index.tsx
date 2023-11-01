import { FC } from "react";
import ContactlessIcon from "@mui/icons-material/Contactless";
import AppleIcon from "@mui/icons-material/Apple";
import styles from "./index.module.scss";

export const BankCard: FC = () => (
  <div className={styles.bank_card}>
    <div className={styles.bank_card__icons}>
      <p>eco</p>
      <ContactlessIcon />
    </div>
    <div className={styles.bank_card__data}>
      <p>Omar Medhat Elsayed</p>
      <p>**** **** **** 7322</p>
    </div>
    <div className={styles.bank_card__exp}>
      <p>Exp 09/22</p>
      <div className={styles.bank_card__exp__apple_pay}>
        <AppleIcon />
        <p>Pay</p>
      </div>
    </div>
  </div>
);
