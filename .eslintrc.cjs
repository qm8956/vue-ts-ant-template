module.exports = {
  root: true,
  extends: [
    '@antfu',
    'plugin:vue/vue3-essential',
    '@vue/eslint-config-typescript',
  ],
  plugins: ['@unocss'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    '@unocss/order': 'error',
    '@unocss/order-attributify': 'error',
  },
}