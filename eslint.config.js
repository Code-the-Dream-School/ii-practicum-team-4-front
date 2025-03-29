import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";


export default defineConfig([
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], languageOptions: { globals: globals.browser } },
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"], plugins: { js }, extends: ["js/recommended", "eslint:recommended",
  "plugin:react/recommended", "plugin:prettier/recommended"] },
  {
		rules: {
			"no-unused-vars": "warn",
			"no-undef": "warn",
      "react/react-in-jsx-scope": "off"
		},
	},
  {
    env: {
      "browser": true,
      "es2021": true,
      "jest": true
    }
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);