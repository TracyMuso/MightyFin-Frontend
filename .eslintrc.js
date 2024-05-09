module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "standard-with-typescript",
    "prettier",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
  },
  plugins: ["react"],
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
  },
};