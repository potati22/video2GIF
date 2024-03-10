module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
    'plugin:prettier/recommended',
    './.eslintrc-auto-import.json',
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    // 启用最新的ES语法
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue'],
  rules: {
    /* 解决reg处报错信息 */
    'no-useless-escape': 0,
    /* 关闭组件命名规则 */
    'vue/multi-word-component-names': 0,
    'no-var': 'error',
    '@typescript-eslint/no-explicit-any': ['off'],
  },
}
