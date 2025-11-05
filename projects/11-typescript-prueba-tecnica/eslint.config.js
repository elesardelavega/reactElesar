import { defineConfig } from 'eslint/config';
import jsPlugin from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import globals from 'globals';

export default defineConfig([
  {
    files: ['**/*.{js,jsx,cjs,mjs,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      globals: { ...globals.browser },
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      js: jsPlugin,
      react: reactPlugin,
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      ...jsPlugin.configs.recommended.rules,

      ...tsPlugin.configs.recommended.rules,

      // React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // TypeScript extra
      '@typescript-eslint/explicit-function-return-type': 'off',
    },
  },
]);
