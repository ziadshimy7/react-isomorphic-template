import { FC } from "react";
// import Carousel from "nuka-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BankCard } from "../bank-card";
import styles from "./index.module.scss";

export const HomeAccountSummary: FC = () => (
  <div className={styles.carousel}>
    <Carousel width={300} showStatus={false} showIndicators={false}>
      <BankCard />
      <BankCard />
      <BankCard />
      <BankCard />
    </Carousel>
  </div>
);
