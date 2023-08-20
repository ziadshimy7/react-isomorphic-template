import { merge } from "webpack-merge";
import path from "path";
import { HotModuleReplacementPlugin } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import clientCommonConfiguration from "./webpack.common";

const developmentPort = "8080";

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

// /* eslint-disable import/no-extraneous-dependencies */
// import { CustomizeRule, mergeWithRules } from "webpack-merge";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { HotModuleReplacementPlugin } from "webpack";
// import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
// import { clientCommonConfiguration } from "./webpack.common";

// type MergeRules = Parameters<typeof mergeWithRules>[0];

// const clientDevelopmentMergeRules: MergeRules = {
//   optimization: {
//     rules: {
//       test: CustomizeRule.Match,
//       use: CustomizeRule.Append,
//     },
//   },
//   module: {
//     rules: {
//       test: CustomizeRule.Match,
//       use: {
//         loader: CustomizeRule.Match,
//         options: CustomizeRule.Replace,
//       },
//     },
//   },
// };

// const webpackClientDevelopmentConfig = mergeWithRules(
//   clientDevelopmentMergeRules
// )(clientCommonConfiguration, {
//   mode: "development",
//   optimization: {
//     moduleIds: "named",
//     chunkIds: "named",
//   },
//   output: {
//     filename: "[name].js",
//   },
//   devtool: "inline-source-map",
//   module: {
//     rules: [
//       {
//         test: /\.module.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader",
//             options: {
//               modules: {
//                 auto: true,
//                 localIdentName: "[local]--[hash:base64:6]",
//               },
//             },
//           },
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new HotModuleReplacementPlugin(),
//     new ReactRefreshWebpackPlugin(),
//     new MiniCssExtractPlugin({
//       filename: "[name].css",
//     }),
//   ],
// });

// export default webpackClientDevelopmentConfig;
