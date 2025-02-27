module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    'no-console': 0,
    'consistent-return': 0,
    'no-underscore-dangle': 0,
    'space-before-function-paren': 0,
  },
};
