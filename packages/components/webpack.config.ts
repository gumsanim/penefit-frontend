/* eslint-disable no-undef */
import "webpack-dev-server";
import webpack, { Configuration } from "webpack";
import path from "path";
import RefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import packageJson from "./package.json";

const resolver = (_path: string) => path.resolve(__dirname, _path);
const generateExternalsFromPeerDependencies = (
  peerDependencies: Record<string, string>,
) => {
  const externals: Record<string, string> = {};

  Object.keys(peerDependencies).forEach((dependency) => {
    externals[dependency] = dependency; // Map the dependency to itself
  });

  return externals;
};



const webpackConfig: Configuration[] = [
  {
    name: "commonjs",
    mode: "development",
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
        "@svg": resolver("./assets/svg"),
        "@png": resolver("./assets/png"),
        "@button": resolver("./src/button"),
        "@input": resolver("./src/input"),
        "@wrapper": resolver("./src/wrapper"),
        "@header": resolver("./src/header"),
        "@icons": resolver("./src/icons"),
        "@banner": resolver("./src/banner"),
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
        {
<<<<<<< HEAD
          test: /\.svg$/,
          use: ["svg-react-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource", // use Webpack 5's built-in asset modules
=======
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
>>>>>>> 23b7123 (svg 테스트)
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource", // use Webpack 5's built-in asset modules
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // hot module reload
      new RefreshWebpackPlugin(),
    ],
    externals: generateExternalsFromPeerDependencies(
      packageJson.peerDependencies,
    ),
  },
  {
    name: "esm",
    mode: "development",

    resolve: {
      extensions: [".ts", ".tsx", ".js", ".jsx"],
      alias: {
<<<<<<< HEAD
        "@assets": resolver("./assets"),
=======
        "@svg": resolver("./assets/svg"),
        "@png": resolver("./assets/png"),
>>>>>>> 23b7123 (svg 테스트)
        "@button": resolver("./src/button"),
        "@input": resolver("./src/input"),
        "@wrapper": resolver("./src/wrapper"),
        "@header": resolver("./src/header"),
        "@icons": resolver("./src/icons"),
        "@banner": resolver("./src/banner"),
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
        {
<<<<<<< HEAD
          test: /\.svg$/,
          use: ["svg-react-loader"],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource", // use Webpack 5's built-in asset modules
=======
          test: /\.svg$/i,
          issuer: /\.[jt]sx?$/,
          use: ["@svgr/webpack"],
>>>>>>> 23b7123 (svg 테스트)
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: "asset/resource", // use Webpack 5's built-in asset modules
        },
      ],
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(), // hot module reload
      new RefreshWebpackPlugin(),
      new webpack.ProvidePlugin({ React: "react" }),
    ],
    externals: generateExternalsFromPeerDependencies(
      packageJson.peerDependencies,
    ),
  },
];

export default webpackConfig;
