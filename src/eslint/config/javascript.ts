import globals from 'globals';

import { js } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintJavaScriptRules from './rules/javascript';

export const createJavascriptConfig: CreateConfig = (options = {}) => [
	{
		languageOptions: {
			globals: { ...globals.browser, ...globals.node },
		},
	},
	// Правила ядра, своего плагина здесь нет — политика применяется
	// ради единообразия сигнатуры.
	applyPluginPolicy(js.configs.recommended, options),
	applyPluginPolicy(esLintJavaScriptRules, options),
];

export const javascript: Config = createJavascriptConfig();
