const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js", // Entry point is the raw CSS
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js", // Dummy JS file to satisfy Webpack, since output is actually the CSS file
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS to a separate file
          {
            loader: "css-loader",
            options: { importLoaders: 1 },
          },
          "postcss-loader", // Process with PostCSS (includes Tailwind)
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "global.css", // Final built CSS file
    }),
  ],
};
