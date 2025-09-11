import type { Linter } from 'eslint';
import pluginJsonc from 'eslint-plugin-jsonc';

import esLintJsonRules from './rules/json';
import esLintJsonPackageRules from './rules/json.package.js';
import esLintJsonTsconfigRules from './rules/json.tsconfig.js';

export default <Linter.Config[]>[
	...pluginJsonc.configs['flat/all'],
	esLintJsonRules,
	esLintJsonPackageRules,
	esLintJsonTsconfigRules,
];
