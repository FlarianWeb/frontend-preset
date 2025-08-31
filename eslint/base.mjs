import jsPlugin from '@eslint/js';

import esLintJavaScriptRules from './rules/javascript.mjs';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		files: [
			'**/*.{js,ts,jsx,tsx,cjs,mjs}',
		]
	},
	jsPlugin.configs.recommended,
	esLintJavaScriptRules,
];
