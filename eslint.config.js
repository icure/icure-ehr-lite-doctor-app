import js from '@eslint/js'
import globals from 'globals'
import tsParser from '@typescript-eslint/parser'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import reactPlugin from '@eslint-react/eslint-plugin'
import prettierRecommended from 'eslint-plugin-prettier/recommended'

export default [
  {
    ignores: ['build/**', 'dist/**', 'coverage/**', 'node_modules/**', '.yarn/**'],
  },
  js.configs.recommended,
  reactPlugin.configs.recommended,
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        JSX: 'readonly',
      },
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      semi: ['error', 'never', { beforeStatementContinuationChars: 'never' }],
      'max-len': ['error', 180],
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_', varsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
      'no-extra-boolean-cast': 'error',
      'no-empty-pattern': 'error',
      'no-empty': 'error',
      'no-redeclare': 'error',
      '@eslint-react/static-components': 'error',
      '@eslint-react/rules-of-hooks': 'error',
      '@eslint-react/no-nested-component-definitions': 'error',
    },
  },
  prettierRecommended,
]
