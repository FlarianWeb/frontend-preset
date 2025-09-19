import type { Linter } from 'eslint';
import pluginJsonc from 'eslint-plugin-jsonc';

import esLintJsonRules from './rules/json';
import esLintJsonPackageRules from './rules/json.package';
import esLintJsonTsconfigRules from './rules/json.tsconfig';

const jsonConfig: Linter.Config[] = [
	...pluginJsonc.configs['flat/base'],
	...pluginJsonc.configs['flat/recommended-with-json'],
	...pluginJsonc.configs['flat/recommended-with-json5'],
	...pluginJsonc.configs['flat/recommended-with-jsonc'],

	esLintJsonRules,
	esLintJsonPackageRules,
	esLintJsonTsconfigRules,
];

export default jsonConfig;
