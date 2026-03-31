import { baseConfig, pugConfig, vueConfig, ymlConfig } from '../../prettier';
import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';
import prettierPlugin from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

import esLintPrettierRules from './rules/prettier';

export const createPrettierConfig: CreateConfig = ({ registerPlugins = true } = {}) => {
	const config = {
		plugins: { prettier: prettierPlugin, ...esLintPrettierRules.plugins },
		rules: {
			'prettier/prettier': ['warn', baseConfig],
			...esLintPrettierRules.rules,
		},
	} as Config[number];

	const vueOverride = {
		files: ['**/*.vue'],
		plugins: {
			prettier: prettierPlugin,
			vue: pluginVue,
		},
		rules: {
			'vue/script-indent': 'off',
			'prettier/prettier': [
				'warn',
				{ ...baseConfig, ...vueConfig, ...ymlConfig, ...pugConfig },
			],
		},
	} as Config[number];

	return [
		registerPlugins ? config : stripPlugins(config),
		registerPlugins ? vueOverride : stripPlugins(vueOverride),
	];
};

export const prettier: Config = createPrettierConfig();
