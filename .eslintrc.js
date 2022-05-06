module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'import', 'mocha',
  ],
  rules: {
    semi: [2, 'never'], // 不要分号
    'no-param-reassign': 0, // 允许对函数参数再赋值
  },
  settings: {

  },
}
