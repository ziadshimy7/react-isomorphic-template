import { FC } from "react";
import styles from "./offer.module.scss";

export const Offer: FC = () => (
  <div className={styles.offer}>
    <img src="/images/home-page/offer.png" alt="offer" />
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="240"
      height="103"
      viewBox="0 0 240 103"
      fill="none"
      className={styles.offer__rectangle}
    >
      <path
        d="M0 38.5555L240.002 0.855469V83.0012C240.002 94.0469 231.048 103.001 220.002 103.001H20C8.95431 103.001 0 94.0469 0 83.0012V38.5555Z"
        fill="#1F1750"
      />
    </svg>
    <p>30% Discount on Every Hotel Booking For Five Days</p>
  </div>
);
