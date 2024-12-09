const baseConfig = require("@repo/styles/tailwind");

module.exports = {
  ...baseConfig,
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // based from current path
  ],
};
