import { FC } from "react";
import styles from "./transaction.module.scss";
import { RecentTransactionsProps } from "./types";

export const Transaction: FC<RecentTransactionsProps> = ({
  photo,
  amount,
  date,
  rate,
  name,
}) => (
  <div className={styles.transaction}>
    <img
      loading="lazy"
      className={styles.transaction__profile_photo}
      src={photo}
      alt="Profile"
    />
    <div className={styles.transaction__data}>
      <div className={styles.transaction__data__customer_info}>
        <p className={styles.transaction__data__customer_info__name}>{name}</p>
        <p className={styles.transaction__data__customer_info__date}>{date}</p>
      </div>
      <div className={styles.transaction__data__info}>
        <p className={styles.transaction__data__info__amount}>+ ${amount}</p>
        <p className={styles.transaction__data__info__rate}>Rate {rate}%</p>
      </div>
    </div>
  </div>
);
