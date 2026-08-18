import type { Linter } from 'eslint';

import { stylistic } from '../../plugins';

export default <Linter.Config>{
	plugins: { '@stylistic': stylistic },
	rules: {
		/**
		 * Запрещает ненужные выражения JSX, когда достаточно одних литералов, или применяет выражения JSX к литералам в дочерних элементах JSX или атрибутах
		 * https://eslint.style/rules/default/jsx-curly-brace-presence
		 */
		'@stylistic/jsx-curly-brace-presence': [
			'warn',
			{
				props: 'never',
				children: 'never',
				propElementValues: 'always',
			},
		],

		/**
		 * Принудительно вставляйте переносы строк до и после элементов JSX, когда они используются в качестве аргументов функции.
		 * https://eslint.style/rules/default/jsx-function-call-newline
		 */
		'@stylistic/jsx-function-call-newline': ['warn', 'multiline'],

		/**
		 * Применять PascalCase для определяемых пользователем компонентов JSX
		 * https://eslint.style/rules/default/jsx-pascal-case
		 */
		'@stylistic/jsx-pascal-case': [
			'warn',
			{
				allowAllCaps: false,
				allowNamespace: true,
				allowLeadingUnderscore: false,
				ignore: [],
			},
		],

		/**
		 * Запретить дополнительные закрывающие теги для компонентов без дочерних элементов
		 * https://eslint.style/rules/default/jsx-self-closing-comp
		 */
		'@stylistic/jsx-self-closing-comp': [
			'warn',
			{
				component: true,
				html: true,
			},
		],
	},
};
