import configPrettier from 'eslint-config-prettier';

import { baseConfig, pugConfig, vueConfig, ymlConfig } from '../../prettier';
import { prettier as prettierPlugin } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

/**
 * Prettier как единственный форматтер.
 *
 * `eslint-config-prettier` идёт последним и гасит все правила, спорящие
 * с форматтером, — включая те, что мог включить соседний конфиг из другого
 * пресета. Без него два форматтера правят один и тот же код в разные
 * стороны, и `--fix` начинает зацикливаться.
 */
export const createPrettierConfig: CreateConfig = (options = {}) => {
	const config = {
		plugins: { prettier: prettierPlugin },
		rules: {
			'prettier/prettier': ['warn', baseConfig],
		},
	} as Config[number];

	// Шаблон Vue форматирует Prettier целиком, поэтому отступы скрипта
	// отдаём ему же. Плагин vue для этого регистрировать не нужно —
	// правило выключается по имени.
	const vueOverride = {
		files: ['**/*.vue'],
		plugins: { prettier: prettierPlugin },
		rules: {
			'vue/script-indent': 'off',
			'prettier/prettier': [
				'warn',
				{ ...baseConfig, ...vueConfig, ...ymlConfig, ...pugConfig },
			],
		},
	} as Config[number];

	return [
		configPrettier,
		applyPluginPolicy(config, options),
		applyPluginPolicy(vueOverride, options),
	];
};

export const prettier: Config = createPrettierConfig();
