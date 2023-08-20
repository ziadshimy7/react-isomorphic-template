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
  // { ymaps3: ["promise Promise.resolve({})"] }
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

// import MiniCssExtractPlugin from "mini-css-extract-plugin";
// import path from "path";
// import { Configuration } from "webpack";
// import { Manifest, WebpackManifestPlugin } from "webpack-manifest-plugin";
// import nodeExternals from "webpack-node-externals";

// const cwd = process.cwd();

// export const serverCommonConfiguration: Configuration = {
//   name: "client",
//   entry: path.resolve(cwd, "packages", "server", "index.ts"),
//   externalsPresets: { node: true },
//   target: "node",
//   externals: [nodeExternals()],
//   output: {
//     clean: true,
//     path: path.resolve(cwd, ".build", "server"),
//     filename: "[name].js",
//   },
//   resolve: {
//     extensions: [".js", ".ts", ".tsx"],
//     alias: {
//       "@shared": path.resolve(cwd, "packages/shared"),
//     },
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(ts|tsx)$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//           options: {
//             presets: [
//               "@babel/preset-env",
//               "@babel/preset-typescript",
//               [
//                 "@babel/preset-react",
//                 {
//                   runtime: "automatic",
//                 },
//               ],
//             ],
//             plugins: ["@babel/plugin-transform-runtime"],
//           },
//         },
//       },
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
//     new WebpackManifestPlugin({
//       generate: (_, files) => {
//         const manifest: Manifest = {};
//         files.forEach((file) => {
//           const fileName = file.name;
//           const fileType = fileName.split(".").pop();
//           const entryName = fileName.split(".")[0];
//           if (!manifest[entryName]) {
//             manifest[entryName] = [];
//           }
//           if (fileType === "js" || fileType === "css") {
//             manifest[entryName].push(fileName);
//           }
//         });

//         return manifest;
//       },
//     }),
//   ],
// };
