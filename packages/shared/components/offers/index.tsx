import { FC } from "react";
import styles from "./index.module.scss";
import { Offer } from "./offer";

export const Offers: FC = () => (
  <div className={styles.offers}>
    <h1>Offers</h1>

    <ul>
      <li>
        <Offer
          backGround="/images/home-page/offer.png"
          offer="30% Discount on Every Hotel Booking For Five Days"
          fill="#1F1750"
        />
      </li>
      <li>
        <Offer
          offer="BDT. 2,000 Discount
+ 3 Times ECO Coins"
          backGround="/images/home-page/offer2.svg"
          fill="#2DD7AE"
        />
      </li>
      <li>
        <Offer
          offer="30% Discount on Every Hotel Booking For Five Days"
          backGround="/images/home-page/offer3.svg"
          fill="#1F1750"
        />
      </li>
      <li>
        <Offer
          backGround="/images/home-page/offer.png"
          offer="30% Discount on Every Hotel Booking For Five Days"
          fill="#2DD7AE"
        />
      </li>
      <li>
        <Offer
          offer="BDT. 2,000 Discount
+ 3 Times ECO Coins"
          backGround="/images/home-page/offer2.svg"
          fill="#1F1750"
        />
      </li>
      <li>
        <Offer
          offer="30% Discount on Every Hotel Booking For Five Days"
          backGround="/images/home-page/offer3.svg"
          fill="#2DD7AE"
        />
      </li>
    </ul>
  </div>
);
