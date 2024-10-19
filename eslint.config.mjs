import eslint from '@eslint/js';
import prettierPluginRecommended from 'eslint-plugin-prettier/recommended';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config({
  files: ['**/*.ts'],
  ignores: ['node_modules', 'dist'],
  languageOptions: {
    globals: {
      ...globals.node,
      ...globals.worker,
      ...globals.jest,
    },
  },
  extends: [eslint.configs.recommended, ...tseslint.configs.recommended],
  rules: {
    'no-console': 'warn',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-import-type-side-effects': 'error',
  },
  ...prettierPluginRecommended,
});
