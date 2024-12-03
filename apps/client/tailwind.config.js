// ./apps/client/tailwind.config.js
const baseConfig = require("@repo/styles/tailwind");

module.exports = {
  ...baseConfig,
  content: ["./app/**/*.{js,jsx,ts,tsx}"], // local path
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".xy_center": {
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
        },
        ".x_center": {
          display: "flex",
          "justify-content": "center",
        },
        ".y_center": {
          display: "flex",
          "align-items": "center",
        },
      });
    },
  ],
};
