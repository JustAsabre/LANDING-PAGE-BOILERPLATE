// ESLint v9+ flat config
import ts from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  ...ts.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...reactHooks.configs.recommended.rules
    }
  },
  {
    ignores: ['dist', 'node_modules', 'coverage', '.eslintrc.cjs', '**/*.js']
  }
]
