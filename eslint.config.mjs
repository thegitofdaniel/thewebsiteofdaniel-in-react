import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import React from 'React';

export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
  pluginReactConfig,
  {settings: { react: { version: "detect" } }} ,
];