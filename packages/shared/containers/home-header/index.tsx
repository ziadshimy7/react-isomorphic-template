import { FC } from "react";
import { Logo } from "@shared/components/home-header/logo";
import { HomeHeaderNav } from "@shared/components/home-header/home-header-nav";
import { HomeHeaderIcons } from "@shared/components/home-header/home-header-icons";
import styles from "./index.module.scss";

export const HomeHeaderContainer: FC = () => (
  <header>
    <nav className={styles.header}>
      <Logo />
      <HomeHeaderNav />
      <HomeHeaderIcons />
    </nav>
  </header>
);
