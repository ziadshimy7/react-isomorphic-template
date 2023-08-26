import path from "path";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import NodemonPlugin from "nodemon-webpack-plugin";
import merge from "webpack-merge";
import serverCommonConfiguration from "./webpack.common";

const serverDevelopmentConfiguration = merge(serverCommonConfiguration, {
  mode: "development",
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(process.cwd(), ".build", ".cache"),
  },
  plugins: [
    new NodemonPlugin({
      script: "./.build/server/index.js",
      watch: ["./.build/server/**/*"],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      runtime: false,
      chunkFilename: "[name].[contenthash].css",
      ignoreOrder: true,
    }),
  ],
});

export default serverDevelopmentConfiguration;
