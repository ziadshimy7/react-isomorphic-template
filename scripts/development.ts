import "dotenv/config";

import express from "express";
import webpack from "webpack";
import http from "http";
import path from "path";
import devMiddleware from "webpack-dev-middleware";
import hotMiddleware from "webpack-hot-middleware";
import clientDevelopmentConfiguration from "../webpack/client/webpack.development";
import serverDevelopmentConfiguration from "../webpack/server/webpack.development";

const developmentPort = Number.parseInt(
  process.env.DEVELOPMENT_PORT ?? "8080",
  10
);

const app = express();

const multiCompiler = webpack([
  clientDevelopmentConfiguration,
  serverDevelopmentConfiguration,
]);

app.use(
  devMiddleware(multiCompiler, {
    writeToDisk: true,
    headers: {
      "Access-Control-Allow-Credentials": "true",
      "Access-Control-Allow-Origin": "*",
    },
  })
);

if (process.env.STATIC_VERSION !== "true") {
  app.use(
    hotMiddleware(multiCompiler.compilers[0], {
      path: "/client/__hmr",
    })
  );
}

app.use(
  "/",
  express.static(path.join(process.cwd(), ".build", "public"), {
    maxAge: 31536000000,
  })
);

http.createServer(app).listen(developmentPort, () => {
  // eslint-disable-next-line no-console
  console.log("Запущен сервер разработки");
});
