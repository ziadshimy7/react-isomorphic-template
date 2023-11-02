import { FC } from "react";
import { PaymentProps } from "./types";
import styles from "./payment.module.scss";

export const Payment: FC<PaymentProps> = ({ paymentName, logo }) => (
  <div className={styles.payment}>
    <img src={logo} alt={paymentName} />
    <p>{paymentName}</p>
  </div>
);
