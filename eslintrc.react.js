module.exports = {
  env: {
    es2020: true,
    browser: true,
    node: true,
    mocha: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "airbnb-typescript",
    "plugin:mocha/recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.eslint.json",
    sourceType: "module",
    ecmaVersion: 11,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "spaced-comment": ["error", "always", { markers: ["/"] }],
    "no-underscore-dangle": ["error", { allowAfterThis: true }],
    "react/jsx-no-duplicate-props": ["error", { ignoreCase: false }],
    "@typescript-eslint/explicit-function-return-type": "off",
    "import/prefer-default-export": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-shadow": "off",
    "react/no-array-index-key": "off",
    "import/no-cycle": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "jsx-a11y/click-events-have-key-events": "off",
    "no-nested-ternary": "off",
    "no-plusplus": "off",
    "react/destructuring-assignment": "off",
    "no-restricted-syntax": "off",
    "react/require-default-props": "off",
    curly: ["error", "all"],
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal"],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
  overrides: [
    {
      files: ["./**/*.test.tsx", "./**/*.test.ts"],
      rules: {
        "no-console": "off",
        "jsx-a11y/anchor-is-valid": "off",
        "import/no-extraneous-dependencies": "off",
      },
    },
  ],
};
