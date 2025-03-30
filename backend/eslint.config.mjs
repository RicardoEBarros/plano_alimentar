import { defineConfig } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";
import stylisticTs from "@stylistic/eslint-plugin-ts"

export default defineConfig([
  tseslint.configs.recommended,
  { 
    files: ["src/**/*.ts", 'tests/**/*.ts'],
    ignores: ["node_modules", "dist", "coverage", "data"],
    plugins: {
      '@stylistic/ts': stylisticTs
    },
    rules: {
      "semi": ["error", "never"],
      "eqeqeq": "error",
      "no-eval": "error",
      "curly": ["warn", "all"],
      "no-var": "warn",
      "indent": ["error", 2],
      "prefer-const": "warn",
      "quotes": ["error", "double"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@stylistic/ts/function-call-spacing": ["error", "never"],
      "@/array-bracket-spacing": ["error", "always"],
      "@/eol-last": ["error", "always"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
    languageOptions: { 
      globals: globals.browser
    }
  }
]);