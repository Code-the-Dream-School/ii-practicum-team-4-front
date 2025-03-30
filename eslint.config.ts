import type { FlatConfig } from '@typescript-eslint/utils/ts-eslint';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import pluginPrettier from 'eslint-plugin-prettier';
import pluginImport from 'eslint-plugin-import';
import prettier from 'eslint-config-prettier';

const config: FlatConfig.Config[] = [
  {
    ignores: [
      'node_modules/',
      'build/',
      'dist/',
      'public/',
      'eslint.config.ts',
    ],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    plugins: {
      'react-hooks': pluginReactHooks,
      'jsx-a11y': jsxA11y,
      prettier: pluginPrettier,
      import: pluginImport,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.json',
      },
      globals: globals.browser,
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // ✨ React
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'warn',
      'react/jsx-key': 'error',
      'react/jsx-no-undef': 'error',
      'react/jsx-no-bind': [
        'warn',
        {
          allowArrowFunctions: true,
          allowFunctions: false,
          allowBind: false,
        },
      ],
      'react/jsx-pascal-case': 'error',

      // ✨ Accessibility
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'error',
      'jsx-a11y/label-has-associated-control': 'error',
      'jsx-a11y/no-static-element-interactions': 'error',

      // ✨ Import sorting
      // 'import/order': [
      //   'error',
      //   {
      //     groups: ['builtin', 'external', 'internal'],
      //     pathGroups: [
      //       {
      //         pattern: 'react',
      //         group: 'external',
      //         position: 'before',
      //       },
      //     ],
      //     pathGroupsExcludedImportTypes: ['react'],
      //     'newlines-between': 'always',
      //     alphabetize: {
      //       order: 'asc',
      //       caseInsensitive: true,
      //     },
      //   },
      // ],

      // ✨ General
      'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-debugger': 'warn',

      // ✨ Prettier
      'prettier/prettier': ['error'],
    },
  },
  {
    rules: {
      ...prettier.rules, // disables conflicting ESLint rules
    },
  },
];

export default config;
