import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import prettier from 'eslint-plugin-prettier';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    // MDN Style Guide rules
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021,
        process: 'readonly',
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier: prettier,
    },
    rules: {
      // Prettier integration - let Prettier handle formatting
      'prettier/prettier': 'error',

      // MDN Style Guide: Prefer const and let over var
      'no-var': 'error',
      'prefer-const': 'error',

      // MDN Style Guide: Use strict equality
      eqeqeq: ['error', 'always'],

      // MDN Style Guide: Use template literals over string concatenation
      'prefer-template': 'error',

      // MDN Style Guide: Use arrow functions where appropriate
      'prefer-arrow-callback': 'error',

      // MDN Style Guide: Descriptive variable and function names (but allow short names for common patterns)
      'id-length': ['error', { min: 2, exceptions: ['e', 'i', '_', 't'] }],
      'camelcase': ['error', { properties: 'never' }],

      // MDN Style Guide: No unused variables
      'no-unused-vars': 'error',

      // MDN Style Guide: No console statements in production
      'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'warn',

      // React specific rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      // TypeScript specific MDN-style rules
      '@typescript-eslint/no-unused-vars': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-nullish-coalescing': 'warn',
      '@typescript-eslint/no-unsafe-return': 'warn',
      '@typescript-eslint/no-unsafe-assignment': 'warn',
      '@typescript-eslint/no-unsafe-member-access': 'warn',
      '@typescript-eslint/restrict-template-expressions': 'warn',
    },
  },
  {
    files: ['**/*.{js,jsx}'],
    ...js.configs.recommended,
  },
);
