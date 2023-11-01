import { FC } from "react";
import styles from "./transaction.module.scss";

export const Transaction: FC = () => (
  <div className={styles.transaction}>
    <img
      className={styles.transaction__profile_photo}
      src="https://i.ibb.co/QDZmW5y/Profile-Image.png"
      alt="Profile"
    />
    <div className={styles.transaction__data}>
      <div className={styles.transaction__data__customer_info}>
        <p className={styles.transaction__data__customer_info__name}>
          Albert Flores
        </p>
        <p className={styles.transaction__data__customer_info__date}>
          22 May, 2022
        </p>
      </div>
      <div className={styles.transaction__data__info}>
        <p className={styles.transaction__data__info__amount}>+ $1526.32</p>
        <p className={styles.transaction__data__info__rate}>Rate 2%</p>
      </div>
    </div>
  </div>
);
