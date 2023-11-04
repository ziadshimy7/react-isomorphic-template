import { FC } from "react";
import styles from "./index.module.scss";
import { Payment } from "./payment";

export const RecentPayments: FC = () => (
  <div className={styles.recent_payments}>
    <h1>Recent Payments</h1>
    <ul>
      <li>
        <Payment
          logo="/images/home-page/electricity.svg"
          paymentName="Electricity Bill"
        />
      </li>
      <li>
        <Payment
          logo="/images/home-page/internet.svg"
          paymentName="Internet Bill"
        />
      </li>
      <li>
        <Payment logo="/images/home-page/nike.svg" paymentName="Nike Store" />
      </li>
      <li>
        <Payment
          logo="/images/home-page/educationfee.svg"
          paymentName="Education Fee"
        />
      </li>
      <li>
        <Payment logo="/images/home-page/payment.svg" paymentName="Netflix" />
      </li>
      <li>
        <Payment
          logo="/images/home-page/batastore.svg"
          paymentName="Bata Store"
        />
      </li>
      <li>
        <Payment
          logo="/images/home-page/onlinecourse.svg"
          paymentName="Online Course"
        />
      </li>
      <li>
        <Payment logo="/images/home-page/gasbill.svg" paymentName="Gas Bill" />
      </li>
    </ul>
  </div>
);
