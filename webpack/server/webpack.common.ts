import path from "path";
import { Configuration } from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import nodeExternals from "webpack-node-externals";
import { mapTsAliases } from "../utils/map-ts-aliases";
import tsConfig from "../../tsconfig.json";

const serverCommonConfiguration: Configuration = {
  name: "server",
  externalsPresets: { node: true },
  target: "node",
  entry: path.join(process.cwd(), "packages", "server", "index.ts"),
  output: {
    clean: true,
    filename: "index.js",
    chunkFilename: "[name].[contenthash].js",
    path: path.resolve(process.cwd(), ".build", "server"),
  },
  resolve: {
    extensions: [".ts", ".tsx"],
    alias: mapTsAliases(tsConfig.compilerOptions.paths),
  },
  externals: [nodeExternals()],
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
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              url: false,
            },
          },
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
};

export default serverCommonConfiguration;
