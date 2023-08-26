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
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
      chunkFilename: "[name].[contenthash].css",
      runtime: false,
    }),
  ],
});

export default serverProductionConfiguration;
