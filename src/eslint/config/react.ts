import pluginReact from 'eslint-plugin-react';

import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintReactRules from './rules/react';
import esLintReactHooksRules from './rules/react-hooks';

export const createReactConfig: CreateConfig = (options = {}) => [
	...[pluginReact.configs.flat.recommended, pluginReact.configs.flat['jsx-runtime']].map(config =>
		applyPluginPolicy(config, options)
	),
	applyPluginPolicy(esLintReactRules, options),
	applyPluginPolicy(esLintReactHooksRules, options),
];

export const react: Config = createReactConfig();
