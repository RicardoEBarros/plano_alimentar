// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import stylistic from '@stylistic/eslint-plugin'

export default tseslint.config(
  {
    ignores: ['eslint.config.mjs'],
    files: ["src/**/*.{js,mjs,cjs,ts}", "tests/**/*.ts"],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommendedTypeChecked,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'commonjs',
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      "eqeqeq": "error",
      "no-eval": "error",
      "curly": ["warn", "all"],
      "no-var": "warn",
      "prefer-const": "warn",
      "eol-last": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@stylistic/semi": ["error", "never"],
      "@stylistic/quotes": ["error", "single"],
      "@stylistic/function-call-spacing": ["error", "never"],
      "@stylistic/brace-style": ["error", "1tbs", { "allowSingleLine": true }],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-floating-promises": "off"
    },
  },
);
