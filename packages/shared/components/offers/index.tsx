import { FC } from "react";
import styles from "./index.module.scss";
import { Offer } from "./offer";

export const Offers: FC = () => (
  <div className={styles.offers}>
    <h1>Offers</h1>

    <ul>
      <li>
        <Offer />
      </li>
      <li>
        <Offer />
      </li>
      <li>
        <Offer />
      </li>
      <li>
        <Offer />
      </li>
      <li>
        <Offer />
      </li>
      <li>
        <Offer />
      </li>
    </ul>
  </div>
);
