import { FC } from "react";
import { BoardCard } from "./card";
import styles from "./index.module.scss";

export const GetOnBoarded: FC = () => (
  <>
    <div className={styles.get_on_boarded}>
      <h1 className={styles.get_on_boarded__heading}>Get On Boarded</h1>
      <ul className={styles.get_on_boarded__list}>
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
        <li>
          <BoardCard />
        </li>
        <li>
          <BoardCard />
        </li>
      </ul>
    </div>
  </>
);
