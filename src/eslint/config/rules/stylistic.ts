import type { Linter } from 'eslint';

import { stylistic } from '../../plugins';

/**
 * Пары «предыдущий — следующий», между которыми пустая строка не нужна.
 *
 * Базовое правило требует пустую строку между любыми соседними
 * конструкциями; однотипные идут подряд без неё — иначе список импортов
 * или объявлений переменных разрывается на каждой строке.
 */
const ADJACENT_SAME_TYPE: string[][] = [
	['const', 'let', 'var'],
	['multiline-const', 'multiline-let', 'multiline-var'],
	['singleline-const', 'singleline-let', 'singleline-var'],
	['block'],
	['block-like'],
	['multiline-block-like'],
	['cjs-export'],
	['cjs-import'],
	['class'],
	['continue'],
	['debugger'],
	['default'],
	['directive'],
	['do'],
	['empty'],
	['export'],
	['multiline-export'],
	['singleline-export'],
	['expression'],
	['multiline-expression'],
	['for'],
	['function'],
	['if'],
	['iife'],
	['import'],
	['interface'],
	['return'],
	['switch'],
	['throw'],
	['try'],
	['type'],
	['while'],
	['with'],
];

/**
 * Правила форматирования, которых нет в Prettier.
 *
 * Всё остальное из @stylistic Prettier делает сам, а совпадающие правила
 * дерутся с ним за один и тот же код: `eslint-config-prettier` выключает
 * 180 правил плагина, и 62 из них раньше стояли здесь включёнными. Тут
 * остаётся только то, что переживает `eslint-config-prettier`.
 */
export default <Linter.Config>{
	plugins: {
		'@stylistic': stylistic,
	},
	rules: {
		/**
		 * Переносы строк после открывающей и перед закрывающей фигурной скобкой
		 * https://eslint.style/rules/curly-newline
		 */
		'@stylistic/curly-newline': ['warn', 'always'],

		/**
		 * Пустая строка между членами класса
		 * https://eslint.style/rules/lines-between-class-members
		 */
		'@stylistic/lines-between-class-members': [
			'warn',
			'always',
			{ exceptAfterSingleLine: true },
		],

		/**
		 * Единый стиль многострочных комментариев
		 * https://eslint.style/rules/multiline-comment-style
		 */
		'@stylistic/multiline-comment-style': ['warn', 'separate-lines'],

		/**
		 * Пустые строки между конструкциями
		 * https://eslint.style/rules/padding-line-between-statements
		 */
		'@stylistic/padding-line-between-statements': [
			'warn',
			{ blankLine: 'always', prev: '*', next: '*' },
			...ADJACENT_SAME_TYPE.map(types => ({
				blankLine: 'any' as const,
				prev: types,
				next: types,
			})),
		],

		/**
		 * Пробел после `//` и `/*` в комментариях
		 * https://eslint.style/rules/spaced-comment
		 */
		'@stylistic/spaced-comment': ['warn', 'always'],
	},
};
