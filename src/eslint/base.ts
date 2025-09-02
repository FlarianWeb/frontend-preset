// import jsPlugin from '@eslint/js';

// import esLintJavaScriptRules from './rules/javascript.mjs';
// import esLintStylisticRules from './rules/stylistic.mjs';

// /** @type {import('eslint').Linter.Config[]} */
// export default [
// 	{
// 		files: ['**/*.{js,ts,jsx,tsx,cjs,mjs}'],
// 	},
// 	jsPlugin.configs.recommended,
// 	esLintJavaScriptRules,
// 	esLintStylisticRules,
// ];


import jsPlugin from '@eslint/js';
import type { Linter } from 'eslint';

// import esLintJavaScriptRules from './rules/javascript';
// import esLintStylisticRules from './rules/stylistic';

const config: Linter.Config[] = [
	{
		files: ['**/*.{js,ts,jsx,tsx,cjs,mjs}'],
	},
	jsPlugin.configs.recommended,
	// esLintJavaScriptRules,
	// esLintStylisticRules,
];

export default config;
