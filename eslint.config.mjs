import { esLintBaseRules, esLintImportSortRules } from './eslint/index.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	...esLintBaseRules,
	...esLintImportSortRules,

	{
		ignores: [
			'node_modules/**',
			'pnpm-lock.yaml',
		]
	}
];
