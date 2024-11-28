/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 12,
    sourceType: 'module',
  },
  extends: [
    'airbnb-base',
    'plugin:@typescript-eslint/recommended',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    'prettier',
    '@nuxtjs/eslint-config-typescript',
  ],
  rules: {
    semi: ['error', 'never'],
    'no-undef': 'off',
    'no-void': 'off',
    'max-classes-per-file': 'off',
    'max-len': 'off',
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',
    'import/first': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    quotes: ['warn', 'single', {avoidEscape: true}],
    'prefer-promise-reject-errors': 'off',
    // 'space-before-function-paren': ['error', 'always'],
    'linebreak-style': 0,
    'arrow-parens': ['error', 'always'],
    'prefer-destructuring': ['error', {object: true, array: false}],
    'no-param-reassign': ['error', {props: false}],
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',
    'consistent-return': 0,
    camelcase: 0,
    'no-nested-ternary': 'off',
    'no-mixed-operators': 'off',
    'vue/no-v-html': 'off',
    'vue/no-multiple-template-root': 'off',
    'vue/multi-word-component-names': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'no-unused-vars': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error', {'function-paren-newline': 'off'}],
    'quote-props': ['error', 'as-needed'],
  },
}