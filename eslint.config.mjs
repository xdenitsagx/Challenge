// eslint.config.js
import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import typescriptParser from '@typescript-eslint/parser';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import globals from 'globals';

export default [
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
      },
    },
    plugins: {
      react: reactPlugin,
      '@typescript-eslint': typescriptPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,

    },
    
  },
];