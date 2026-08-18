import { type Config } from 'stylelint';

import { createConfig } from './shared';

/**
 * PostCSS.
 *
 * Синтаксис разбирается парсером по умолчанию, отдельный `customSyntax`
 * не нужен. Правилам о неизвестных конструкциях перечисляются директивы
 * ходовых плагинов — иначе каждая из них считается опечаткой.
 */
export const pcssConfig: Config = createConfig({
	rules: {
		'at-rule-no-unknown': [
			true,
			{
				ignoreAtRules: [
					'custom-media',
					'custom-selector',
					'define-mixin',
					'each',
					'else',
					'for',
					'if',
					'mixin',
					'nest',
				],
			},
		],
		'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
		'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global', 'local'] }],
	},
});

export default pcssConfig;
