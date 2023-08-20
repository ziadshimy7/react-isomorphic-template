// import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { CustomizeRule, mergeWithRules } from "webpack-merge";
import { Configuration } from "webpack";

import serverCommonConfiguration from "./webpack.common";

type MergeRules = Parameters<typeof mergeWithRules>[0];

const clientMergeRules: MergeRules = {
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: CustomizeRule.Replace,
    },
  },
};

const serverProductionConfiguration: Configuration = mergeWithRules(
  clientMergeRules
)(serverCommonConfiguration, {
  mode: "production",
  module: {
    rules: [
      {
        test: /\.module.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
              esModule: true,
              modules: {
                localIdentName: "[hash:base64:6]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    // new BundleAnalyzerPlugin({
    //   logLevel: "silent",
    //   analyzerMode: "static",
    //   openAnalyzer: false,
    // }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
      runtime: false,
    }),
  ],
});

export default serverProductionConfiguration;

// import path from "path";
// import { Configuration } from "webpack";
// import nodeExternals from "webpack-node-externals";
// // eslint-disable-next-line import/no-extraneous-dependencies
// import MiniCssExtractPlugin from "mini-css-extract-plugin";

// const serverProductionConfiguration: Configuration = {
//   mode: "production",
//   externals: [nodeExternals()],
//   entry: path.join(process.cwd(), "packages", "server", "index.ts"),
//   output: {
//     clean: true,
//     filename: "main.js",
//     path: path.resolve(process.cwd(), ".build", "server"),
//   },
//   resolve: {
//     extensions: [".ts", ".tsx"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         use: "babel-loader",
//         exclude: /node_modules/,
//       },
//       {
//         test: /\.(sa|sc|c)ss$/,
//         use: "null-loader",
//         exclude: /\.module\.scss$/,
//       },
//       {
//         test: /\.module\.scss$/,
//         use: [
//           MiniCssExtractPlugin.loader,
//           {
//             loader: "css-loader",
//             options: {
//               modules: { auto: true, localIdentName: "[hash:base64:5]" },
//             },
//           },
//           "sass-loader",
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "[contenthash].css",
//     }),
//   ],
// };

// export default serverProductionConfiguration;
