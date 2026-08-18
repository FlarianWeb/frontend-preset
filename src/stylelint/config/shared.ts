import { type Config } from 'stylelint';

import resolveFrom from '../../utils/resolve';

import baseRules from './rules/base';
import orderRules from './rules/order';
import orderGroupsRules from './rules/order-groups';

/**
 * Общая часть всех диалектов.
 *
 * Имена пакетов остаются строками намеренно: Stylelint резолвит их
 * относительно файла, в котором они записаны, — то есть относительно
 * этого конфига внутри пресета. Поэтому подключать конфиг нужно строкой
 * (`extends: ['@flarian/frontend-preset/stylelint/less']`), а не
 * импортированным объектом: у объекта нет пути, и точкой отсчёта
 * становится каталог проекта, где зависимостей пресета нет.
 */
export const createConfig = ({
	extend = [],
	plugins = [],
	rules = {},
}: {
	extend?: string[];
	plugins?: string[];
	rules?: Config['rules'];
} = {}): Config => ({
	extends: ['stylelint-config-standard', ...extend, 'stylelint-config-recommended-vue'],
	plugins: ['stylelint-order', ...plugins],
	// Синтаксис однофайловых компонентов Stylelint ищет относительно себя,
	// а не относительно конфига, — голое имя из зависимостей пресета он
	// там не найдёт. Поэтому путь абсолютный.
	overrides: [
		{
			customSyntax: resolveFrom('postcss-html'),
			files: ['**/*.vue', '**/*.html'],
		},
	],
	rules: {
		...baseRules,
		...orderRules,
		...orderGroupsRules,
		...rules,
	},
});
