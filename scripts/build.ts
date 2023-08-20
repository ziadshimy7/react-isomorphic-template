/* eslint-disable no-console */
import "dotenv/config";

import webpack from "webpack";
import clientProductionConfiguration from "../webpack/client/webpack.production";
import serverProductionConfiguration from "../webpack/server/webpack.production";

console.log("Запуск сборки...");

process.env.NODE_ENV = "production";

webpack(
  [clientProductionConfiguration, serverProductionConfiguration],
  (error, stats) => {
    if (error) {
      console.log("\u001B[31mОшибка сборки\u001B[0m");

      console.error(error.stack || error);

      if ("details" in error && error.details) {
        console.error(error.details);
      }
      return;
    }

    const info = stats?.toJson();

    if (stats?.hasErrors()) {
      console.error(info?.errors);
    }

    if (stats?.hasWarnings()) {
      // eslint-disable-next-line array-callback-return
      info?.warnings?.map(({ message }) => {
        console.warn(message);
      });
    }

    console.log("\u001B[32mСборка завершена\u001B[0m");
  }
);
