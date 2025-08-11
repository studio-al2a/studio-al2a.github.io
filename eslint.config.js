import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import react from 'eslint-plugin-react';
import reactRedux from 'eslint-plugin-react-redux';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import importPlugin from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(
  [
    globalIgnores(['dist']),
    {
      files: ['**/*.{ts,tsx}'],
      extends: [
        js.configs.recommended,
        tseslint.configs.recommended,
        reactHooks.configs['recommended-latest'],
        reactRefresh.configs.vite,
      ],
      plugins: {
        react,
        'react-redux': reactRedux,
        'jsx-a11y': jsxA11y,
        import: importPlugin,
        prettier,
      },
      rules: {
        // React rules
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'react/function-component-definition': [
          2,
          { namedComponents: 'arrow-function' },
        ],
        'react/jsx-no-useless-fragment': 'warn',
        'react/jsx-curly-brace-presence': [
          'warn',
          { props: 'never', children: 'never' },
        ],

        // Redux rules
        'react-redux/connect-prefer-named-arguments': 'error',
        'react-redux/prefer-separate-component-file': 'warn',

        // Accessibility rules
        'jsx-a11y/alt-text': 'error',
        'jsx-a11y/anchor-has-content': 'error',
        'jsx-a11y/anchor-is-valid': 'error',
        'jsx-a11y/aria-props': 'error',
        'jsx-a11y/aria-proptypes': 'error',
        'jsx-a11y/aria-unsupported-elements': 'error',
        'jsx-a11y/role-has-required-aria-props': 'error',
        'jsx-a11y/role-supports-aria-props': 'error',

        // Import rules
        'import/order': [
          'error',
          {
            groups: [
              'builtin',
              'external',
              'internal',
              'parent',
              'sibling',
              'index',
            ],
            'newlines-between': 'always',
            alphabetize: {
              order: 'asc',
              caseInsensitive: true,
            },
          },
        ],
        'import/no-unresolved': 'off', // TypeScript handles this
        'import/no-extraneous-dependencies': 'warn',

        // Prettier
        'prettier/prettier': 'error',

        // General rules
        'no-console': 'warn',
        'no-debugger': 'error',
        'no-unused-vars': 'off', // TypeScript handles this
        '@typescript-eslint/no-unused-vars': [
          'error',
          { argsIgnorePattern: '^_' },
        ],
        'prefer-const': 'error',
        'no-var': 'error',
      },
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
        parserOptions: {
          ecmaFeatures: {
            jsx: true,
          },
        },
      },
      settings: {
        react: {
          version: 'detect',
        },
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
            project: './tsconfig.json',
          },
          node: {
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
          },
        },
      },
    },
  ]
);
