import path from "path";
import { Configuration } from "webpack";
import CopyPlugin from "copy-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { AssetsPlugin } from "../plugin/assets-plugin";

import tsConfig from "../../tsconfig.json";
import { mapTsAliases } from "../utils/map-ts-aliases";

const cwd = process.cwd();

const clientCommonConfiguration: Configuration = {
  name: "client",
  entry: [path.resolve(cwd, "packages", "client", "index.tsx")],
  output: {
    clean: true,
    path: path.resolve(cwd, ".build", "client"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/client/",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: mapTsAliases(tsConfig.compilerOptions.paths),
  },
  optimization: {
    runtimeChunk: {
      name: "webpack",
    },
    splitChunks: {
      cacheGroups: {
        framework: {
          test: /[\\/]node_modules[\\/](react|react-dom|scheduler)[\\/]/,
          name: "framework",
          chunks: "initial",
        },
        vendor: {
          test: /node_modules/,
          name: "vendors",
          chunks: "initial",
        },
      },
    },
  },
  externalsType: "script",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-typescript",
              [
                "@babel/preset-react",
                {
                  runtime: "automatic",
                },
              ],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.scss$/,
        exclude: /\.module.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
          "sass-loader",
        ],
      },
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
                localIdentName: "[local]--[hash:base64:6]",
              },
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
  plugins: [
    new AssetsPlugin({
      path: path.resolve(cwd, ".build"),
      exclude: /hot-update/,
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(cwd, "public"),
          to: path.resolve(cwd, ".build", "public"),
        },
      ],
    }),
  ],
};

export default clientCommonConfiguration;
