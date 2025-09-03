
import { baseRules, importSortRules } from './src/eslint/index';

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
