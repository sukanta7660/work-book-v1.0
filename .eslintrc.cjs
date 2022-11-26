/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-prettier",
  ],
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {
    'quotes': [2, 'single', { 'avoidEscape': true,'allowTemplateLiterals': true }],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 1,
    'linebreak-style': [2, 'unix'],
    "vue/html-quotes": [ "error", "double", { "avoidEscape": false } ],
    'vue/no-unused-components' : 'off',
  }
};
