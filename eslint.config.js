const globals = require("globals")
const pluginJs = require("@eslint/js")
const tseslint = require("typescript-eslint")
const stylisticJs = require("@stylistic/eslint-plugin")

module.exports = [
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["src/**/*.ts"],
    ignores: ["node_modules", "dist", "coverage"],
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
      "quotes": ["warn", "single"],
      "prefer-const": "warn",
      "arrow-spacing": ["error", { before: true, after: true }],
      "@typescript-eslint/no-explicit-any": "off",
      "@stylistic/js/function-call-spacing": ["error", "never"],
      "@stylistic/js/eol-last": ["error", "always"],
      "@typescript-eslint/no-unused-vars": "off",
      "@stylistic/js/array-bracket-spacing": ["error", "always"],
    }
  },
  {
    languageOptions: { 
      globals: globals.browser 
    }
  },
];