import prettierBaseConfig from '../../prettier/config/base';
import type { Linter } from 'eslint';
import pluginPrettier from 'eslint-config-prettier';
import prettier from 'eslint-plugin-prettier';

const prettierConfig: Linter.Config[] = [
	{
		plugins: { prettier },
		rules: {
			...pluginPrettier.rules,
			'prettier/prettier': ['warn', prettierBaseConfig],
		},
	},
];

export default prettierConfig;
