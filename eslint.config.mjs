import { baseRules, importSortRules, jsonRules } from './eslint/index.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...baseRules,
	...importSortRules,
	...jsonRules,

	{
		ignores: [
			'node_modules/**',
			'pnpm-lock.yaml',
		],
	},
];
