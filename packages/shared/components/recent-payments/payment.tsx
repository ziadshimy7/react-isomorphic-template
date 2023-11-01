import { FC } from "react";
import styles from "./payment.module.scss";

export const Payment: FC = () => (
  <div className={styles.payment}>
    <img src="/images/home-page/payment.svg" alt="Electricity Bill" />
    <p>Electricity Bill</p>
  </div>
);
