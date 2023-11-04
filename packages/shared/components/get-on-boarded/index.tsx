import { FC } from "react";
import { BoardCard } from "./card";
import styles from "./index.module.scss";

export const GetOnBoarded: FC = () => (
  <>
    <div className={styles.get_on_boarded}>
      <h1 className={styles.get_on_boarded__heading}>Get On Boarded</h1>
      <ul className={styles.get_on_boarded__list}>
        <li>
          <BoardCard task="Update Profile" percent={15} />
        </li>
        <li>
          <BoardCard task="Add Account" percent={30} />
        </li>
        <li>
          <BoardCard task="Varify Email" percent={90} />
        </li>
        <li>
          <BoardCard task="KYC" percent={40} />
        </li>
        <li>
          <BoardCard task="2Auth" percent={50} />
        </li>
        <li>
          <BoardCard task="3absamad" percent={20} />
        </li>
      </ul>
    </div>
  </>
);
