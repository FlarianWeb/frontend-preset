import type { Linter } from 'eslint';

import { perfectionist } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import perfectionistImportRules from './rules/perfectionist';

/**
 * Правила, переставляющие смысловой порядок, а не перечисление.
 *
 * Порядок функций в модуле и методов в классе — это порядок изложения:
 * сверху точка входа, ниже подробности. У ключей объекта порядок тоже
 * обычно смысловой: в конфигурации сначала подключение, потом настройки.
 * Алфавит всё это разрушает — на самом пресете `sort-objects` давал 88
 * замечаний из 123. Включается одной строкой, если в проекте иначе.
 *
 * Всё остальное сортирует перечисления, где своего порядка нет.
 */
const NARRATIVE_RULES = [
	'perfectionist/sort-classes',
	'perfectionist/sort-modules',
	'perfectionist/sort-objects',
];

/**
 * Порядок элементов — замечание к оформлению, а не ошибка: пресет держит
 * такие правила на `warn`, а `recommended-*` приходит с `error`.
 */
const toWarning = (entry: Linter.RuleEntry | undefined): Linter.RuleEntry =>
	Array.isArray(entry) ? (['warn', ...entry.slice(1)] as Linter.RuleEntry) : 'warn';

export const createPerfectionistConfig: CreateConfig = (options = {}) => {
	const recommended = perfectionist.configs['recommended-natural'];
	const base = (Array.isArray(recommended) ? recommended[0] : recommended) as Config[number];
	const baseRules = Object.entries(base.rules ?? {});

	const config = {
		plugins: { perfectionist },
		rules: {
			...Object.fromEntries(baseRules.map(([rule, entry]) => [rule, toWarning(entry)])),
			...Object.fromEntries(NARRATIVE_RULES.map(rule => [rule, 'off'])),

			// Блоки, разделённые пустой строкой, сортируются независимо друг
			// от друга: смысловая группировка полей переживает сортировку.
			'perfectionist/sort-object-types': [
				'warn',
				{ type: 'natural', partitionByNewLine: true },
			],
		},
	} as Config[number];

	return [
		applyPluginPolicy(config, options),
		applyPluginPolicy(perfectionistImportRules, options),
	];
};

export const perfectionistConfig: Config = createPerfectionistConfig();
