module.exports = {
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "prettier"],
  root: true,
  ignorePatterns: ["*.json", "*.cjs"],
  rules: {
    "prettier/prettier": "warn"
  }
};
