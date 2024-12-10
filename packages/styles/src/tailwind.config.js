module.exports = {
  content: [
    "../../../apps/**/*.{js,jsx,ts,tsx}", // based from current path
    "../../packages/**/*.{js,jsx,ts,tsx}", // based from current path
  ],
  darkMode: "class",
  theme: {
    extend: {},
  },
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
        ".space_between": {
          display: "flex",
          "justify-content": "space-between",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".body1": {
          color: "red",
        },
        ".body2": {
          color: "blue",
        },
        ".body3": {},
        ".heading1": {},
        ".heading2": {},
        ".heading3": {},
      });
    },
  ],
};
