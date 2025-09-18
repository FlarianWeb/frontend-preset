import type { Linter } from 'eslint';
import prettierConfig from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';
import pluginVue from 'eslint-plugin-vue';

import esLintVueRules from './rules/vue';

export default <Linter.Config[]>[
	...pluginVue.configs['flat/recommended'],
	esLintVueRules,
	{
		plugins: { prettier },
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': 'warn',
		},
	},
];
