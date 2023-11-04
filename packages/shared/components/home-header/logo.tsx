import { Link } from "react-router-dom";
import { FC } from "react";
import styles from "./logo.module.scss";

export const Logo: FC = () => (
  <Link className={styles.logo} to="/">
    <img src="/images/home-page/trust-bank-logo.svg" alt="trustbank logo" />
    <h3>TrustBank</h3>
  </Link>
);
