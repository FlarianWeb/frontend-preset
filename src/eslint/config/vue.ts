import { vue as pluginVue } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintVueRules from './rules/vue';

export const createVueConfig: CreateConfig = (options = {}) => [
	...pluginVue.configs['flat/recommended'].map(config => applyPluginPolicy(config, options)),
	applyPluginPolicy(esLintVueRules, options),
];

export const vue: Config = createVueConfig();
