import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';
import pluginVue from 'eslint-plugin-vue';

import esLintVueRules from './rules/vue';

export const createVueConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	...(registerPlugins
		? pluginVue.configs['flat/recommended']
		: pluginVue.configs['flat/recommended'].map(stripPlugins)),
	registerPlugins ? esLintVueRules : stripPlugins(esLintVueRules),
];

export const vue: Config = createVueConfig();
