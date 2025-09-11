import type { Linter } from 'eslint';
import tsPlugin from 'typescript-eslint';
import jsPlugin from '@eslint/js';

import esLintJavaScriptRules from './rules/javascript';
import esLintStylisticRules from './rules/stylistic';
import esLintTypeScriptRules from './rules/typescript';

export default <Linter.Config[]>[
	jsPlugin.configs.recommended,
	...tsPlugin.configs.recommended,
	esLintJavaScriptRules,
	esLintTypeScriptRules,
	esLintStylisticRules,
];
