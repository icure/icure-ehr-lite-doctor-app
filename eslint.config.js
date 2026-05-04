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
      // Pre-existing patterns the legacy .eslintrc never flagged. Downgraded to warn so CI doesn't break on the migration PR.
      'no-extra-boolean-cast': 'warn',
      'no-empty-pattern': 'warn',
      'no-empty': 'warn',
      'no-redeclare': 'warn',
      '@eslint-react/static-components': 'warn',
      '@eslint-react/rules-of-hooks': 'warn',
      '@eslint-react/no-nested-component-definitions': 'warn',
    },
  },
  prettierRecommended,
]
