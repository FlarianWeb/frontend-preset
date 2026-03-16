import type { Config } from '../types/config';
import globals from 'globals';
import jsPlugin from '@eslint/js';

import esLintJavaScriptRules from './rules/javascript';

export const createJavascriptConfig = (): Config => [
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	jsPlugin.configs.recommended,
	esLintJavaScriptRules,
];

export const javascript: Config = createJavascriptConfig();
