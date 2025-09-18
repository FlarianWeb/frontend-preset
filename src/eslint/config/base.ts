import type { Linter } from 'eslint';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import jsPlugin from '@eslint/js';

import esLintJavaScriptRules from './rules/javascript';
import esLintStylisticRules from './rules/stylistic';
import esLintTypeScriptRules from './rules/typescript';

export default <Linter.Config[]>[
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},

	jsPlugin.configs.recommended,
	...tsPlugin.configs.recommended,
	esLintJavaScriptRules,
	esLintTypeScriptRules,
	esLintStylisticRules,
];
