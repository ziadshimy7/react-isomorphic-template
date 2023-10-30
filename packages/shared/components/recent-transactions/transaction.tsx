import { FC } from "react";
import styles from "./transaction.module.scss";

export const Transaction: FC = () => (
  <div className={styles.transaction}>
    <img
      className={styles.profilePhoto}
      src="https://i.ibb.co/QDZmW5y/Profile-Image.png"
      alt="Profile"
    />
    <div className={styles.data}>
      <div className={styles.customerInfo}>
        <p className={styles.transactionName}>Albert Flores</p>
        <p className={styles.transactionDate}>22 May, 2022</p>
      </div>
      <div className={styles.transactionInfo}>
        <p className={styles.transactionAmount}>+ $1526.32</p>
        <p className={styles.transactionRate}>Rate 2%</p>
      </div>
    </div>
  </div>
);
