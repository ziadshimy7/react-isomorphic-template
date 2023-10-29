import { FC } from "react";
import QuickActions from "@shared/containers/quick-actions";
import styles from "./index.module.scss";

const HomePageBody: FC = () => (
  <div className={styles.homePageBody}>
    <QuickActions />
  </div>
);

export default HomePageBody;
