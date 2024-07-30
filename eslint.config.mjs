import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylisticJs from '@stylistic/eslint-plugin-js'

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ignores: ['node_modules'],
    plugins: {
      "@stylistic/js": stylisticJs 
    },
    rules: {
      "semi": ["error", "never"],
      "quotes": ["error", "double"],
      "eqeqeq": "error",
      "curly": "error",
      "eol-last": ["error", "always"],
      "no-eval": "error",
      "no-unused-vars": "error",
      "@stylistic/js/indent": ["error", 2],
      "@stylistic/js/array-bracket-spacing": ["error", "always"],
      "@stylistic/js/comma-spacing": ["error", { before: false, after: true }]
    }
  },
];