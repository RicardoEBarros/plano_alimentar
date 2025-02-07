const globals = require("globals")
const pluginJs = require("@eslint/js")
const tseslint = require("typescript-eslint")
const stylisticJs = require("@stylistic/eslint-plugin")

module.exports = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  { 
    files: ["src/**/*.ts", 'tests/**/*.ts'],
    ignores: ["node_modules", "dist", "coverage", "data"],
    plugins: {
      '@stylistic/js': stylisticJs
    },
    rules: {
      "semi": ["error", "never"],
      "eqeqeq": "error",
      "no-eval": "error",
      "curly": ["warn", "all"],
      "no-var": "warn",
      "indent": ["error", 2],
      "prefer-const": "warn",
      "quotes": ["error", "single"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/strict-boolean-expressions": "off",
      "@stylistic/js/function-call-spacing": ["error", "never"],
      "@stylistic/js/array-bracket-spacing": ["error", "always"],
      "@stylistic/js/eol-last": ["error", "always"],
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-unused-vars": "off"
    },
    languageOptions: { 
      globals: globals.browser 
    }
  }
];