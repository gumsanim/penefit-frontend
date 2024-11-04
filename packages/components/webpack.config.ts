/* eslint-disable no-undef */
import "webpack-dev-server";
import webpack, { Configuration } from "webpack";
import path from "path";
import RefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";

const resolver = (_path: string) => path.resolve(__dirname, _path);

const webpackConfig: Configuration[] = [
  {
    name: "commonjs",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@button": resolver("./src/button"),
        "@input": resolver("./src/input"),
      },
    },
    entry: "./src/index.ts",
    output: {
      path: resolver("./dist/cjs"),
      filename: "index.js",
      libraryTarget: "commonjs2",
      clean: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // hot module reload
      new RefreshWebpackPlugin(),
    ],
  },
  {
    name: "esm",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@button": resolver("./src/button"),
        "@input": resolver("./src/input"),
      },
    },
    entry: "./src/index.ts",
    output: {
      path: resolver("./dist/esm"),
      filename: "index.mjs",
      libraryTarget: "module",
      environment: {
        module: true,
      },
      clean: true,
    },
    experiments: {
      outputModule: true,
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx|js|jsx)$/,
          use: ["babel-loader"],
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // hot module reload
      new RefreshWebpackPlugin(),
      new webpack.ProvidePlugin({ React: "react" }),
    ],
  },
];

export default webpackConfig;
