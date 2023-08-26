import { merge } from "webpack-merge";
import path from "path";
import { HotModuleReplacementPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import clientCommonConfiguration from "./webpack.common";

const developmentPort = "8081";

const clientDevelopmentConfiguration = merge(clientCommonConfiguration, {
  mode: "development",
  cache: {
    type: "filesystem",
    cacheDirectory: path.resolve(process.cwd(), ".build", ".cache"),
  },
  entry: [
    `webpack-hot-middleware/client?path=http://localhost:${developmentPort}/client/__hmr`,
  ],
  output: {
    publicPath: `http://localhost:${developmentPort}/client/`,
  },
  devtool: "inline-source-map",
  stats: "minimal",
  plugins: [
    new HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin({
      overlay: {
        sockIntegration: "wds",
      },
    }),
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),
  ],
});

export default clientDevelopmentConfiguration;
