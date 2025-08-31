import pluginJsonc from 'eslint-plugin-jsonc';

/** @type {import('eslint').Linter.Config} */
export default {
	files: ['**/*.json'],
	plugins: { pluginJsonc },
	rules: {
		'jsonc/indent': ['warn', 'tab'], // Используем табуляцию
		'jsonc/no-comments': 'off', // Разрешаем комментарии
		'jsonc/comma-dangle': ['error', 'never'], // Запрет висячих запятых
		'jsonc/key-name-casing': [
			'error',
			{
				camelCase: false,
				PascalCase: false,
				SCREAMING_SNAKE_CASE: false,
				'kebab-case': false,
				snake_case: false,
				ignores: [],
			},
		],
		'jsonc/object-curly-spacing': ['warn', 'always'],
		'jsonc/array-element-newline': ['error', 'consistent'],
		'jsonc/array-bracket-newline': ['warn', 'consistent'],
		'jsonc/sort-keys': ['warn', 'asc', { caseSensitive: true, natural: false, minKeys: 10 }],
	},
};
