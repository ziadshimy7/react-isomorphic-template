import { FC } from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import styles from "./index.module.scss";

export const HomeTransactionTypes: FC = () => {
  const data = [
    { label: "Cash withdrawals", value: 50 },
    { label: "Payments", value: 25 },
    { label: "Deposit", value: 35 },
    { label: "Loans", value: 25 },
  ];
  return (
    <article className={styles.transaction}>
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 50,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={170}
        height={170}
        legend={{ hidden: true }}
      />
    </article>
  );
};
