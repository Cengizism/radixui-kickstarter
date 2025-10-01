// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [{
  ignores: ["build", "node_modules", "storybook-static/**", "temp/**", "postcss.config.js", "src/routeTree.gen.ts"]
}, {
  files: ["**/*.{js,jsx,ts,tsx}"],
  languageOptions: {
    ecmaVersion: 2020,
    globals: {
      ...globals.browser,
      ...globals.node
    },
    parser: tsParser,
    parserOptions: {
      ecmaVersion: "latest",
      ecmaFeatures: { jsx: true },
      sourceType: "module"
    }
  },
  plugins: {
    "@typescript-eslint": tseslint,
    "react-hooks": reactHooks,
    "react-refresh": reactRefresh
  },
  rules: {
    ...js.configs.recommended.rules,
    ...reactHooks.configs.recommended.rules,
    
    // React specific
    "react-refresh/only-export-components": "off",
    
    // TypeScript specific
    "@typescript-eslint/no-unused-vars": ["warn", { 
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "@typescript-eslint/no-explicit-any": "warn",
    
    // General
    "no-console": "warn",
    "prefer-const": "error",
    "no-var": "error",
    "no-undef": "off" // TypeScript handles this
  }
}, ...storybook.configs["flat/recommended"]];