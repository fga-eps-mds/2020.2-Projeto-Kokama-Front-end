module.exports = {
  "env": {
    "es2021": true,
  },
  "extends": [
    "plugin:react/recommended",
    "airbnb",
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 12,
    "sourceType": "module",
  },
  "plugins": [
    "react",
    "@typescript-eslint",
  ],
  "rules": {
    "indent": [
      "error",
      2,
    ],
    "semi": [
      "error",
      "always",
    ],
    "no-underscore-dangle": 0,
    "no-param-reassign": 0,
    "no-console": 0,
    "max-len": [
      "error",
      {
        "code": 120,
      },
    ],
    "no-useless-catch": 0,
    "class-methods-use-this": 0,
    "quote-props": [
      "error",
      "as-needed",
    ],
    "quote": [
      "error",
      "single",
    ],
  },
};
