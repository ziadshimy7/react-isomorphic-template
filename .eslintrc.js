module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "airbnb",
    "prettier",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        extensions: [".ts", ".tsx"],
      },
      typescript: {},
    },
  },
  plugins: ["react", "@typescript-eslint", "prettier", "unicorn"],
  rules: {
    "react/jsx-handler-names": [
      "error",
      {
        checkLocalVariables: true,
        checkInlineFunction: false,
      },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/no-unused-vars": ["error"],
    "import/no-extraneous-dependencies": "off",
    "no-use-before-define": "off",
    "no-underscore-dangle": "off",
    "class-methods-use-this": "off",
    "react/prop-types": "off",
    "import/prefer-default-export": "off",
    "no-shadow": "off",
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "no-console": "error",
    "func-names": "error",
    "arrow-body-style": ["error", "as-needed"],
    "react/require-default-props": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": [1, { extensions: [".ts", ".tsx"] }],
    "react/jsx-props-no-spreading": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    "@typescript-eslint/no-shadow": ["off"],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        assertionStyle: "never",
      },
    ],
    "import/no-duplicates": "error",
    "react/no-danger": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: ["variable", "function"],
        format: ["camelCase", "UPPER_CASE", "PascalCase"],
        leadingUnderscore: "allow",
        trailingUnderscore: "allow",
        filter: {
          regex: "(^_id|^__v|^__html)$",
          match: false,
        },
      },
      {
        selector: ["enum", "enumMember", "interface", "typeAlias"],
        format: ["PascalCase"],
        leadingUnderscore: "forbid",
        trailingUnderscore: "forbid",
      },
    ],
    "no-param-reassign": [
      "error",
      {
        props: true,
        ignorePropertyModificationsFor: [
          "acc",
          "accumulator",
          "event",
          "draft",
          "request",
          "response",
          "staticContext",
        ],
      },
    ],
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
      },
    ],
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/jsx-no-useless-fragment": "off",
    "unicorn/prevent-abbreviations": [
      "error",
      {
        extendDefaultReplacements: true,
        replacements: {
          props: {
            properties: false,
          },
          params: {
            parameters: false,
          },
          ref: {
            reference: false,
          },
          adr: {
            address: true,
          },
          adrs: {
            addresses: true,
          },
        },
      },
    ],
    "import/no-import-module-exports": "off",
    "jsx-a11y/no-autofocus": "off",
  },
};
