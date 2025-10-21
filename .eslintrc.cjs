/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2022: true, jest: false },
  parser: '@typescript-eslint/parser',
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  plugins: ['@typescript-eslint', 'react-refresh', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'eslint-config-prettier'
  ],
  ignorePatterns: ['dist', 'node_modules'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
  }
}
