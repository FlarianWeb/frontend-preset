import pluginJsonc from 'eslint-plugin-jsonc';

import esLintJsonRules from './rules/json.mjs';
import esLintJsonPackageRules from './rules/json.package.mjs';
import esLintJsonTsconfigRules from './rules/json.tsconfig.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...pluginJsonc.configs['flat/all'],
	esLintJsonRules,
	esLintJsonPackageRules,
	esLintJsonTsconfigRules,
];
