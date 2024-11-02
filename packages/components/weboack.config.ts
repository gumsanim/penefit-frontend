import { Configuration } from 'webpack';

const webpackConfig: Configuration= {
    mode: "development",
    entry: "./",
    output: {
      filename: "bundle.js",
    },
  };

export default webpackConfig