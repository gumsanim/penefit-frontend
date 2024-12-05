/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    "@repo/eslint-config/react-internal",
    "next",
    "next/core-web-vitals", // designed to handle Next.js-specific issues and will automatically resolve this conflict
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
