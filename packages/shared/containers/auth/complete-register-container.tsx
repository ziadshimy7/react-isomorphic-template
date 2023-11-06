import { GetOnBoarded } from "@shared/components/get-on-boarded";
import { FC } from "react";
import { Link } from "react-router-dom";
import styles from "./complete-register-container.module.scss";
import { QuickActionsMobileNav } from "../quick-actions/mobile-nav";

export const CompletedRegisterContainer: FC = () => (
  <>
    <section className={styles.compelted_register_container}>
      <div className={styles.compelted_register_container__sign_up_completed}>
        <img src="/images/home-page/completed.svg" alt="Registration Completed" />
        <div className={styles.compelted_register_container__sign_up_completed__sign_up_paragraph}>
          <h1>Sign Up Complete!</h1>
          <p>Login to Your Account to Get Started Now!</p>
        </div>
        <Link to="/auth" className={styles.compelted_register_container__sign_up_completed__link}>
          Login to Dashboard
        </Link>
      </div>
      <div className={styles.compelted_register_container__continue}>
        <p>Account Setup Guided Journey</p>
        <GetOnBoarded />
      </div>
    </section>
    <QuickActionsMobileNav />
  </>
);
