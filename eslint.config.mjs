import { baseRules, importSortRules } from './eslint/index.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...baseRules,
	...importSortRules,

	{
		ignores: [
			'node_modules/**',
			'pnpm-lock.yaml',
		],
	},
];
