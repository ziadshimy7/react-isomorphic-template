import { FC } from "react";
// import Carousel from "nuka-carousel";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BankCard } from "../bank-card";
// import styles from "./index.module.scss";

export const HomeAccountSummary: FC = () => (
  <Carousel>
    <BankCard />
    <BankCard />
    <BankCard />
    <BankCard />
  </Carousel>
);
