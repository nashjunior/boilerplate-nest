module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin', 'prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    
    '@typescript-eslint/explicit-function-return-type': ["error"],
    '@typescript-eslint/explicit-module-boundary-types': ["error"],
    '@typescript-eslint/no-explicit-any': "warn",
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
      },
    ],
   
    "@typescript-eslint/naming-convention": [
      "error",
      {
        "selector": ["interface"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "^I[A-Z]",
          "match": true
        }
      },
      {
        "selector": ["typeAlias"],
        "format": ["PascalCase"],
        "custom": {
          "regex": "[A-Z]*Type",
          "match": true
        }
      },
    ],

    "prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      }
    ],
    "no-bitwise": "warn",
    "class-methods-use-this": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "argsIgnorePattern": "_"
      }
    ],
    "no-underscore-dangle": [2, { "allowAfterThis": true }]
  },
};
