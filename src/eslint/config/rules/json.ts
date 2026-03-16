import type { Linter } from 'eslint';
import pluginJsonc from 'eslint-plugin-jsonc';

export default <Linter.Config>{
	files: ['**/*.json'],
	plugins: { pluginJsonc },
	rules: {
		// @stylistic правила предназначены для JS/TS и некорректно работают с JSONC парсером
		'@stylistic/lines-around-comment': 'off',
		'@stylistic/no-multiple-empty-lines': 'off',
		'@stylistic/padded-blocks': 'off',

		'jsonc/indent': ['warn', 'tab'],
		'jsonc/no-comments': 'off',
		'jsonc/comma-dangle': ['error', 'never'],
		'jsonc/key-name-casing': 'off',
		'jsonc/object-curly-spacing': ['warn', 'always'],
		'jsonc/array-element-newline': ['error', 'consistent'],
		'jsonc/array-bracket-newline': ['warn', 'consistent'],
		'jsonc/sort-keys': [
			'warn',
			'asc',
			{
				caseSensitive: true,
				natural: false,
				minKeys: 10,
			},
		],
	},
};
