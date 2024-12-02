// ./apps/client/tailwind.config.js
const baseConfig = require("@repo/styles/tailwind");

module.exports = {
  ...baseConfig,
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // local path
};
