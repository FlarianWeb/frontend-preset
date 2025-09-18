import type { Linter } from 'eslint';
import stylisticJs from '@stylistic/eslint-plugin';

export default <Linter.Config>{
	files: ['**/*.{jsx,tsx}'],
	plugins: { '@stylistic': stylisticJs },
	rules: {
		/**
		 * Принудительное или запретительное использование пробелов внутри фигурных скобок в атрибутах и выражениях JSX
		 * https://eslint.style/rules/default/jsx-child-element-spacing
		 */
		'@stylistic/jsx-child-element-spacing': ['warn'],

		/**
		 * Обеспечить размещение закрывающей скобки в JSX
		 * https://eslint.style/rules/default/jsx-closing-bracket-location
		 */
		'@stylistic/jsx-closing-bracket-location': ['warn', 'tag-aligned'],

		/**
		 * Обеспечить расположение закрывающего тега для многострочного JSX
		 * https://eslint.style/rules/default/jsx-closing-tag-location
		 */
		'@stylistic/jsx-closing-tag-location': ['warn', 'tag-aligned'],

		/**
		 * Запрещает ненужные выражения JSX, когда достаточно одних литералов, или применяет выражения JSX к литералам в дочерних элементах JSX или атрибутах
		 * https://eslint.style/rules/default/jsx-curly-brace-presence
		 */
		'@stylistic/jsx-curly-brace-presence': ['warn', { props: 'never', children: 'never', propElementValues: 'always' }],

		/**
		 * Обеспечить единообразие переносов строк в фигурных скобках в атрибутах и выражениях JSX
		 * https://eslint.style/rules/default/jsx-curly-newline
		 */
		'@stylistic/jsx-curly-newline': ['warn', { multiline: 'consistent', singleline: 'consistent' }],

		/**
		 * Принудительное или запретительное использование пробелов внутри фигурных скобок в атрибутах и выражениях JSX
		 * https://eslint.style/rules/default/jsx-curly-spacing
		 */
		'@stylistic/jsx-curly-spacing': [
			'warn',
			{
				when: 'always',
				attributes: { allowMultiline: false },
				children: true,
			},
		],

		/**
		 * Принудительное или запретительное использование пробелов вокруг знаков равенства в атрибутах JSX
		 * https://eslint.style/rules/default/jsx-equals-spacing
		 */
		'@stylistic/jsx-equals-spacing': ['warn', 'always'],

		/**
		 * Обеспечить правильное положение первого свойства в JSX
		 * https://eslint.style/rules/default/jsx-first-prop-new-line
		 */
		'@stylistic/jsx-first-prop-new-line': ['warn', 'multiline'],

		/**
		 * Принудительно вставляйте переносы строк до и после элементов JSX, когда они используются в качестве аргументов функции.
		 * https://eslint.style/rules/default/jsx-function-call-newline
		 */
		'@stylistic/jsx-function-call-newline': ['warn', 'multiline'],

		/**
		 * Принудительно применять отступ JSX. Устарело, вместо этого используйте правило `indent`.
		 * https://eslint.style/rules/default/jsx-indent
		 */
		'@stylistic/jsx-indent': ['warn', 'tab', { checkAttributes: true, indentLogicalExpressions: true }],

		/**
		 * Обеспечить отступы свойств в JSX
		 * https://eslint.style/rules/default/jsx-indent-props
		 */
		'@stylistic/jsx-indent-props': ['warn', 'tab'],

		/**
		 * Обеспечить максимальное количество реквизитов в одной строке в JSX
		 * https://eslint.style/rules/default/jsx-max-props-per-line
		 */
		'@stylistic/jsx-max-props-per-line': ['warn', { maximum: { single: 3, multi: 1 } }],

		/**
		 * Требовать или запрещать новую строку после элементов и выражений jsx.
		 * https://eslint.style/rules/default/jsx-newline
		 */
		'@stylistic/jsx-newline': ['warn', { prevent: false }],

		/**
		 * Требуется один элемент JSX на строку
		 * https://eslint.style/rules/default/jsx-one-expression-per-line
		 */
		'@stylistic/jsx-one-expression-per-line': ['warn'],

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
		 * Запретить множественные пробелы между встроенными свойствами JSX
		 * https://eslint.style/rules/default/jsx-props-no-multi-spaces
		 */
		'@stylistic/jsx-props-no-multi-spaces': ['warn'],

		/**
		 * Обеспечить последовательное использование двойных или одинарных кавычек в атрибутах JSX
		 * https://eslint.style/rules/default/jsx-quotes
		 */
		'@stylistic/jsx-quotes': ['warn', 'prefer-double'],

		/**
		 * Запретить дополнительные закрывающие теги для компонентов без дочерних элементов
		 * https://eslint.style/rules/default/jsx-self-closing-comp
		 */
		'@stylistic/jsx-self-closing-comp': ['warn', { component: true, html: true }],

		/**
		 * Обеспечить сортировку реквизитов в алфавитном порядке
		 * https://eslint.style/rules/default/jsx-sort-props
		 */
		'@stylistic/jsx-sort-props': [
			'warn',
			{
				callbacksLast: true,
				shorthandFirst: true,
				shorthandLast: true,
				multiline: 'first',
				ignoreCase: true,
				noSortAlphabetically: true,
				reservedFirst: true,
				locale: 'auto',
			},
		],

		/**
		 * Обеспечить наличие пробелов внутри и вокруг открывающих и закрывающих скобок JSX
		 * https://eslint.style/rules/default/jsx-tag-spacing
		 */
		'@stylistic/jsx-tag-spacing': [
			'warn',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'always',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],

		/**
		 * Запретить отсутствующие скобки вокруг многострочного JSX
		 * https://eslint.style/rules/default/jsx-wrap-multilines
		 */
		'@stylistic/jsx-wrap-multilines': [
			'warn',
			{
				declaration: 'parens-new-line',
				assignment: 'parens-new-line',
				return: 'parens-new-line',
				arrow: 'parens-new-line',
				condition: 'parens-new-line',
				logical: 'parens-new-line',
				prop: 'parens-new-line',
			},
		],
	},
};
