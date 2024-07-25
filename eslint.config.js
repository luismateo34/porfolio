import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import eslintPluginAstro from "eslint-plugin-astro";
import eslintConfigPrettier from "eslint-config-prettier";
import eslintParse from "@typescript-eslint/parser";
import love from "eslint-config-love";

export default [
  { files: ["**/*.{js,mjs,cjs,ts, astro}"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  { languageOptions: { globals: globals.browser } },
  {
    ignores: [
      "node_modules/*", // ignore its content
    ],
  },
  // react config
  { files:["**/*.{ ts,tsx}"],

   languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } ,

  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  love,
  pluginReactConfig,
  settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  eslintConfigPrettier,
  love,
 ...eslintPluginAstro.configs.recommended,
  {
    files: ["**/*.{astro}"],
    languageOptions: {
      parser: eslintParse,
      parserOptions: {
        parser: eslintParse,
        extraFileExtensions: [".astro"],
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/explicit-function-return-type": "off",
      "react/prop-types": "off",
    }
  }
];
