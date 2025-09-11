import type { Linter } from 'eslint';
import stylisticJs from '@stylistic/eslint-plugin';

export default <Linter.Config>{
	files: ['**/*.{js,ts,jsx,tsx,cjs,mjs,vue}'],
	languageOptions: {
	},
	plugins: {
		'@stylistic': stylisticJs,
	},
	rules: {
		/**
		 * Принудительно вводить переносы строк после открытия и перед закрытием скобок массива
		 * https://eslint.style/rules/default/array-bracket-newline
		 */
		'@stylistic/array-bracket-newline': ['warn', { multiline: true, minItems: 4 }],

		/**
		 * Обеспечить единообразие интервалов внутри скобок массива
		 * https://eslint.style/rules/default/array-bracket-spacing
		 */
		'@stylistic/array-bracket-spacing': ['warn', 'never'],

		/**
		 * Принудительно вставлять переносы строк после каждого элемента массива
		 * https://eslint.style/rules/default/array-element-newline
		 */
		'@stylistic/array-element-newline': ['warn', { consistent: true, multiline: true, minItems: 4 }],

		/**
		 * Требуйте заключения аргументов стрелочной функции в скобки
		 * https://eslint.style/rules/default/arrow-parens
		 */
		'@stylistic/arrow-parens': ['off'],

		/**
		 * Обеспечить одинаковый интервал до и после стрелки в стрелочных функциях
		 * https://eslint.style/rules/default/arrow-spacing
		 */
		'@stylistic/arrow-spacing': ['warn', { before: true, after: true }],

		/**
		 * Запрещать или принудительно вводить пробелы внутри блоков после открытия блока и перед закрытием блока
		 * https://eslint.style/rules/default/block-spacing
		 */
		'@stylistic/block-spacing': ['warn', 'always'],

		/**
		 * Обеспечить единообразный стиль крепления блоков
		 * https://eslint.style/rules/default/brace-style
		 */
		'@stylistic/brace-style': ['warn', '1tbs', { allowSingleLine: true }],

		/**
		 * Требовать или запрещать конечные запятые
		 * https://eslint.style/rules/default/comma-dangle
		 */
		'@stylistic/comma-dangle': [
			'warn',
			{
				arrays: 'always-multiline',
				objects: 'always-multiline',
				imports: 'never',
				exports: 'never',
				functions: 'never',
				importAttributes: 'never',
				dynamicImports: 'never',
			},
		],

		/**
		 * Обеспечьте одинаковый интервал до и после запятых
		 * https://eslint.style/rules/default/comma-spacing
		 */
		'@stylistic/comma-spacing': ['warn', { before: false, after: true }],

		/**
		 * Обеспечить единообразие стиля запятых
		 * https://eslint.style/rules/default/comma-style
		 */
		'@stylistic/comma-style': ['warn', 'last'],

		/**
		 * Обеспечить постоянный интервал внутри вычисляемых скобок свойств
		 * https://eslint.style/rules/default/computed-property-spacing
		 */
		'@stylistic/computed-property-spacing': ['warn', 'never'],

		/**
		 * Обеспечивать единообразие переносов строк после открывающихся и перед закрывающимися фигурными скобками
		 * https://eslint.style/rules/default/curly-newline
		 */
		'@stylistic/curly-newline': ['warn', 'always'],

		/**
		 * Обеспечивать единообразие переносов строк до и после точек
		 * https://eslint.style/rules/default/dot-location
		 */
		'@stylistic/dot-location': ['warn', 'property'],

		/**
		 * Требовать или запрещать новую строку в конце файлов
		 * https://eslint.style/rules/default/eol-last
		 */
		'@stylistic/eol-last': ['warn', 'always'],

		/**
		 * Требовать или запрещать пробелы между идентификаторами функций и их вызовами
		 * https://eslint.style/rules/default/func-call-spacing
		 */
		'@stylistic/function-call-spacing': ['warn', 'never'],

		/**
		 * Обеспечить переносы строк между аргументами вызова функции
		 * https://eslint.style/rules/default/function-call-argument-newline
		 */
		'@stylistic/function-call-argument-newline': ['warn', 'consistent'],

		/**
		 * Обеспечить последовательные переносы строк внутри скобок функций
		 * https://eslint.style/rules/default/function-paren-newline
		 */
		'@stylistic/function-paren-newline': ['warn', 'consistent'],

		/**
		 * Обеспечить единообразие интервалов вокруг операторов `*` в функциях генератора
		 * https://eslint.style/rules/default/generator-star-spacing
		 */
		'@stylistic/generator-star-spacing': ['warn', { before: true, after: false }],

		/**
		 * Обеспечить расположение тел стрелочных функций
		 * https://eslint.style/rules/default/implicit-arrow-linebreak
		 */
		'@stylistic/implicit-arrow-linebreak': ['off'],

		/**
		 * Обеспечить единообразие отступов
		 * https://eslint.style/rules/default/indent
		 */
		'@stylistic/indent': ['warn', 'tab', { SwitchCase: 1 }],

		/**
		 * Отступы для бинарных операторов
		 * https://eslint.style/rules/default/indent-binary-ops
		 */
		'@stylistic/indent-binary-ops': ['warn', 'tab'],

		/**
		 * Обеспечьте соблюдение единообразных интервалов между именами свойств и аннотациями типов в типах и интерфейсах.
		 * https://eslint.style/rules/default/key-spacing
		 */
		'@stylistic/key-spacing': ['warn', { beforeColon: false }],

		/**
		 * Обеспечьте одинаковый интервал до и после ключевых слов.
		 * https://eslint.style/rules/default/keyword-spacing
		 */
		'@stylistic/keyword-spacing': ['warn', { before: true }],

		/**
		 * Обеспечить положение строчных комментариев
		 * https://eslint.style/rules/default/line-comment-position
		 */
		'@stylistic/line-comment-position': ['off'],

		/**
		 * Обеспечить единообразие стиля переноса строк
		 * https://eslint.style/rules/default/linebreak-style
		 */
		'@stylistic/linebreak-style': ['warn', 'unix'],

		/**
		 * Требовать пустые строки вокруг комментариев
		 * https://eslint.style/rules/default/lines-around-comment
		 */
		'@stylistic/lines-around-comment': [
			'warn',
			{
				allowBlockStart: true,
				allowObjectStart: true,
				beforeLineComment: true,
				afterLineComment: false,
			},
		],

		/**
		 * Требовать или запрещать пустую строку между членами класса
		 * https://eslint.style/rules/default/lines-between-class-members
		 */
		'@stylistic/lines-between-class-members': ['warn', 'always', { exceptAfterSingleLine: true }],

		/**
		 * Обеспечить максимальную длину строки
		 * https://eslint.style/rules/default/max-len
		 */
		'@stylistic/max-len': ['off'],

		/**
		 * Обеспечить максимально допустимое количество утверждений в строке
		 * https://eslint.style/rules/default/max-statements-per-line
		 */
		'@stylistic/max-statements-per-line': ['warn', { max: 1 }],

		/**
		 * Требовать определенный стиль разделителя элементов для интерфейсов и литералов типов
		 * https://eslint.style/rules/default/member-delimiter-style
		 */
		'@stylistic/member-delimiter-style': [
			'warn',
			{
				multiline: {
					delimiter: 'semi',
					requireLast: true,
				},
				singleline: {
					delimiter: 'semi',
					requireLast: false,
				},

				overrides: {
					interface: {
						multiline: {
							delimiter: 'semi',
							requireLast: true,
						},
					},
				},
			},
		],

		/**
		 * Применить определенный стиль для многострочных комментариев
		 * https://eslint.style/rules/default/multiline-comment-style
		 */
		'@stylistic/multiline-comment-style': ['warn', 'separate-lines'],

		/**
		 * Обеспечить наличие новых строк между операндами троичных выражений
		 * https://eslint.style/rules/default/multiline-ternary
		 */
		'@stylistic/multiline-ternary': ['warn', 'always-multiline'],

		/**
		 * Включить или отключить скобки при вызове конструктора без аргументов
		 * https://eslint.style/rules/default/new-parens
		 */
		'@stylistic/new-parens': ['warn', 'always'],

		/**
		 * Требовать новую строку после каждого вызова в цепочке методов
		 * https://eslint.style/rules/default/newline-per-chained-call
		 */
		'@stylistic/newline-per-chained-call': ['warn', { ignoreChainWithDepth: 4 }],

		/**
		 * Запретить стрелочные функции там, где их можно спутать со сравнениями
		 * https://eslint.style/rules/default/no-confusing-arrow
		 */
		'@stylistic/no-confusing-arrow': ['warn'],

		/**
		 * Запретить ненужные скобки
		 * https://eslint.style/rules/default/no-extra-parens
		 */
		'@stylistic/no-extra-parens': ['warn'],

		/**
		 * Запретить ненужные точки с запятой
		 * https://eslint.style/rules/default/no-extra-semi
		 */
		'@stylistic/no-extra-semi': ['warn'],

		/**
		 * Запретить начальные и конечные десятичные точки в числовых литералах
		 * https://eslint.style/rules/default/no-floating-decimal
		 */
		'@stylistic/no-floating-decimal': ['warn'],

		/**
		 * Запретить смешанные бинарные операторы
		 * https://eslint.style/rules/default/no-mixed-operators
		 */
		'@stylistic/no-mixed-operators': ['error'],

		/**
		 * Запретить смешанные пробелы и табуляции для отступов
		 * https://eslint.style/rules/default/no-mixed-spaces-and-tabs
		 */
		'@stylistic/no-mixed-spaces-and-tabs': ['warn', 'smart-tabs'],

		/**
		 * Запретить множественные пробелы
		 * https://eslint.style/rules/default/no-multi-spaces
		 */
		'@stylistic/no-multi-spaces': ['warn', { ignoreEOLComments: true }],

		/**
		 * Запретить несколько пустых строк
		 * https://eslint.style/rules/default/no-multiple-empty-lines
		 */
		'@stylistic/no-multiple-empty-lines': ['warn', { max: 1, maxBOF: 0, maxEOF: 0 }],

		/**
		 * Запретить табуляцию
		 * https://eslint.style/rules/default/no-tabs
		 */
		'@stylistic/no-tabs': ['off', { allowIndentationTabs: true }],

		/**
		 * Запретить пробелы в конце строк
		 * https://eslint.style/rules/default/no-trailing-spaces
		 */
		'@stylistic/no-trailing-spaces': ['warn'],

		/**
		 * Запретить пробелы перед свойствами
		 * https://eslint.style/rules/default/no-whitespace-before-property
		 */
		'@stylistic/no-whitespace-before-property': ['warn'],

		/**
		 * Обеспечить размещение однострочных операторов
		 * https://eslint.style/rules/default/nonblock-statement-body-position
		 */
		'@stylistic/nonblock-statement-body-position': ['warn', 'beside'],

		/**
		 * Обеспечивать единообразие переносов строк после открывающихся и перед закрывающимися фигурными скобками
		 * https://eslint.style/rules/default/object-curly-newline
		 */
		'@stylistic/object-curly-newline': [
			'warn',
			{
				ObjectExpression: { multiline: true, minProperties: 4, consistent: true },
				ObjectPattern: { multiline: true, minProperties: 4, consistent: true },
				ImportDeclaration: { multiline: true, minProperties: 4 },
				ExportDeclaration: { multiline: true, minProperties: 4 },
			},
		],

		/**
		 * Обеспечьте постоянный интервал внутри скобок
		 * https://eslint.style/rules/default/object-curly-spacing
		 */
		'@stylistic/object-curly-spacing': ['warn', 'always'],

		/**
		 * Обеспечить размещение свойств объекта на отдельных строках
		 * https://eslint.style/rules/default/object-property-newline
		 */
		'@stylistic/object-property-newline': ['warn', { allowAllPropertiesOnSameLine: true }],

		/**
		 * Требовать или запрещать переносы строк вокруг объявлений переменных
		 * https://eslint.style/rules/default/one-var-declaration-per-line
		 */
		'@stylistic/one-var-declaration-per-line': ['warn', 'initializations'],

		/**
		 * Обеспечить единый стиль переноса строк для операторов
		 * https://eslint.style/rules/default/operator-linebreak
		 */
		'@stylistic/operator-linebreak': ['warn', 'before'],

		/**
		 * Требовать или запрещать отступы внутри блоков
		 * https://eslint.style/rules/default/padded-blocks
		 */
		'@stylistic/padded-blocks': ['off'],

		/**
		 * Требовать или запрещать заполнение строк между операторами
		 * https://eslint.style/rules/default/padding-line-between-statements
		 */
		'@stylistic/padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: ['*'] },
			{ blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
			{ blankLine: 'any', prev: ['block'], next: ['block'] },
			{ blankLine: 'any', prev: ['block-like'], next: ['block-like'] },
			{ blankLine: 'any', prev: ['cjs-export'], next: ['cjs-export'] },
			{ blankLine: 'any', prev: ['cjs-import'], next: ['cjs-import'] },
			{ blankLine: 'any', prev: ['class'], next: ['class'] },
			{ blankLine: 'any', prev: ['continue'], next: ['continue'] },
			{ blankLine: 'any', prev: ['debugger'], next: ['debugger'] },
			{ blankLine: 'any', prev: ['default'], next: ['default'] },
			{ blankLine: 'any', prev: ['directive'], next: ['directive'] },
			{ blankLine: 'any', prev: ['do'], next: ['do'] },
			{ blankLine: 'any', prev: ['empty'], next: ['empty'] },
			{ blankLine: 'any', prev: ['export'], next: ['export'] },
			{ blankLine: 'any', prev: ['expression'], next: ['expression'] },
			{ blankLine: 'any', prev: ['for'], next: ['for'] },
			{ blankLine: 'any', prev: ['function'], next: ['function'] },
			{ blankLine: 'any', prev: ['if'], next: ['if'] },
			{ blankLine: 'any', prev: ['iife'], next: ['iife'] },
			{ blankLine: 'any', prev: ['import'], next: ['import'] },
			{ blankLine: 'any', prev: ['multiline-block-like'], next: ['multiline-block-like'] },
			{
				blankLine: 'any',
				prev: ['multiline-const', 'multiline-let', 'multiline-var'],
				next: ['multiline-const', 'multiline-let', 'multiline-var'],
			},
			{ blankLine: 'any', prev: ['multiline-export'], next: ['multiline-export'] },
			{ blankLine: 'any', prev: ['multiline-expression'], next: ['multiline-expression'] },
			{ blankLine: 'any', prev: ['return'], next: ['return'] },
			{
				blankLine: 'any',
				prev: ['singleline-const', 'singleline-let', 'singleline-var'],
				next: ['singleline-const', 'singleline-let', 'singleline-var'],
			},
			{ blankLine: 'any', prev: ['singleline-export'], next: ['singleline-export'] },
			{ blankLine: 'any', prev: ['switch'], next: ['switch'] },
			{ blankLine: 'any', prev: ['throw'], next: ['throw'] },
			{ blankLine: 'any', prev: ['try'], next: ['try'] },
			{ blankLine: 'any', prev: ['while'], next: ['while'] },
			{ blankLine: 'any', prev: ['with'], next: ['with'] },
			{ blankLine: 'any', prev: ['type'], next: ['type'] },
			{ blankLine: 'any', prev: ['interface'], next: ['interface'] },
		],

		/**
		 * Обязательно заключайте в кавычки имена свойств объектов, типов, интерфейсов и перечислений.
		 * https://eslint.style/rules/default/quote-props
		 */
		'@stylistic/quote-props': ['warn', 'as-needed', { keywords: false, numbers: true }],

		/**
		 * Обеспечить последовательное использование обратных кавычек, двойных или одинарных кавычек
		 * https://eslint.style/rules/default/quotes
		 */
		'@stylistic/quotes': ['warn', 'single'],

		/**
		 * Обеспечить соблюдение интервалов между операторами rest и spread и их выражениями
		 * https://eslint.style/rules/default/rest-spread-spacing
		 */
		'@stylistic/rest-spread-spacing': ['warn', 'never'],

		/**
		 * Требовать или запрещать точки с запятой вместо ASI
		 * https://eslint.style/rules/default/semi
		 */
		'@stylistic/semi': ['warn', 'always'],

		/**
		 * Обеспечьте одинаковый интервал до и после точек с запятой
		 * https://eslint.style/rules/default/semi-spacing
		 */
		'@stylistic/semi-spacing': ['warn', { before: false, after: true }],

		/**
		 * Обеспечить правильное расположение точек с запятой
		 * https://eslint.style/rules/default/semi-style
		 */
		'@stylistic/semi-style': ['warn', 'last'],

		/**
		 * Обеспечьте одинаковый интервал перед блоками
		 * https://eslint.style/rules/default/space-before-blocks
		 */
		'@stylistic/space-before-blocks': ['warn', 'always'],

		/**
		 * Обеспечить одинаковый интервал перед скобками функций
		 * https://eslint.style/rules/default/space-before-function-paren
		 */
		'@stylistic/space-before-function-paren': ['warn', 'always'],

		/**
		 * Обеспечьте одинаковый интервал внутри скобок
		 * https://eslint.style/rules/default/space-in-parens
		 */
		'@stylistic/space-in-parens': ['warn', 'never'],

		/**
		 * Требуйте пробелов вокруг инфиксных операторов
		 * https://eslint.style/rules/default/space-infix-ops
		 */
		'@stylistic/space-infix-ops': ['warn'],

		/**
		 * Обеспечивать единообразие интервалов до и после унарных операторов
		 * https://eslint.style/rules/default/space-unary-ops
		 */
		'@stylistic/space-unary-ops': ['warn'],

		/**
		 * Обеспечьте единообразие интервалов после `//` или `/*` в комментариях
		 * https://eslint.style/rules/default/spaced-comment
		 */
		'@stylistic/spaced-comment': ['warn', 'always'],

		/**
		 * Обеспечить наличие пробелов вокруг двоеточий в операторах switch
		 * https://eslint.style/rules/default/switch-colon-spacing
		 */
		'@stylistic/switch-colon-spacing': ['warn', { after: true, before: false }],

		/**
		 * Требовать или запрещать пробелы вокруг встроенных выражений строк шаблонов
		 * https://eslint.style/rules/default/template-curly-spacing
		 */
		'@stylistic/template-curly-spacing': ['warn', 'never'],

		/**
		 * Требовать или запрещать пробелы между тегами шаблонов и их литералами
		 * https://eslint.style/rules/default/template-tag-spacing
		 */
		'@stylistic/template-tag-spacing': ['warn', 'never'],

		/**
		 * Требуйте одинакового интервала вокруг аннотаций типов.
		 * https://eslint.style/rules/default/type-annotation-spacing
		 */
		'@stylistic/type-annotation-spacing': ['warn'],

		/**
		 * Обеспечивает единообразие интервалов внутри обобщенных типов TypeScript
		 * https://eslint.style/rules/default/type-generic-spacing
		 */
		'@stylistic/type-generic-spacing': ['warn'],

		/**
		 * Ожидайте пробел перед объявлением типа в именованном кортеже
		 * https://eslint.style/rules/default/type-named-tuple-spacing
		 */
		'@stylistic/type-named-tuple-spacing': ['warn'],

		/**
		 * Требуйте заключения в скобки непосредственных вызовов `function`
		 * https://eslint.style/rules/default/wrap-iife
		 */
		'@stylistic/wrap-iife': ['warn', 'inside'],

		/**
		 * Требуйте заключения в скобки литералов регулярных выражений
		 * https://eslint.style/rules/default/wrap-regex
		 */
		'@stylistic/wrap-regex': ['warn'],
	},
};
