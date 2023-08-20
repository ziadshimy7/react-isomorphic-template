import { CustomizeRule, mergeWithRules } from "webpack-merge";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import clientCommonConfiguration from "./webpack.common";

type MergeRules = Parameters<typeof mergeWithRules>[0];

const clientMergeRules: MergeRules = {
  module: {
    rules: {
      test: CustomizeRule.Match,
      use: CustomizeRule.Replace,
    },
  },
};

const clientProductionConfiguration = mergeWithRules(clientMergeRules)(
  clientCommonConfiguration,
  {
    mode: "production",
    output: {
      filename: "[contenthash].js",
      chunkFilename: "[contenthash].js",
    },
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
        filename: "[contenthash].css",
      }),
    ],
  }
);

export default clientProductionConfiguration;

// /* eslint-disable import/no-extraneous-dependencies */
// import { CustomizeRule, mergeWithRules } from "webpack-merge";
// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import { clientCommonConfiguration } from "./webpack.common";

// type MergeRules = Parameters<typeof mergeWithRules>[0];

// const clientProductionMergeRules: MergeRules = {
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

// const webpackClientProductionConfig = mergeWithRules(
//   clientProductionMergeRules
// )(clientCommonConfiguration, {
//   mode: "production",
//   output: { filename: "[contenthash].js" },
//   optimization: {
//     moduleIds: "deterministic",
//     chunkIds: "deterministic",
//   },
//   module: {
//     rules: [
//       {
//         test: /\.module.scss$/,
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
// });

// export default webpackClientProductionConfig;
