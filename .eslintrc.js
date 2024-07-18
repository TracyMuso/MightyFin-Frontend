module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb-typescript",
    "prettier",
    "next/core-web-vitals",
    "plugin:storybook/recommended",
  ],
  overrides: [],
  plugins: ["react", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json",
  },
  rules: {
    "@typescript-eslint/consistent-type-definitions": ["off"],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-confusing-void-expression": "off",
    "import/no-anonymous-default-export": "off",
    "import/extensions": "off",
    "react/no-unescaped-entities": "off",
  },
};
