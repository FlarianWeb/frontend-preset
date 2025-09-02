import jsPlugin from '@eslint/js';
import type { Linter } from 'eslint';

import esLintJavaScriptRules from './rules/javascript';
import esLintStylisticRules from './rules/stylistic';

const config: Linter.Config[] = [
	{
		files: ['**/*.{js,ts,jsx,tsx,cjs,mjs}'],
	},
	jsPlugin.configs.recommended,
	esLintJavaScriptRules,
	esLintStylisticRules,
];

export default config;
