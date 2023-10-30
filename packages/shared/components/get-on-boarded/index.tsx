import { FC } from "react";
import { Carousel } from "react-responsive-carousel";
import { BoardCard } from "./card";
import styles from "./index.module.scss";

export const GetOnBoarded: FC = () => (
  <>
    <h1 className={styles.h1}>Get On Boarded</h1>
    {/* <div className={styles.getOnBoarded}>
      <ul>
        <li>
          <BoardCard />
        </li>
        <li>
          <BoardCard />
        </li>
        <li>
          <BoardCard />
        </li>
        <li>
          <BoardCard />
        </li>
      </ul>
    </div> */}
    <div className={styles.mobileVersion}>
      <Carousel width={160} showStatus={false} showIndicators={false}>
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </Carousel>
    </div>
  </>
);
