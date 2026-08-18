import type { Linter } from 'eslint';

import { perfectionist } from '../../plugins';

/**
 * Порядок импортов.
 *
 * Группы повторяют прежнюю раскладку simple-import-sort: сначала рантайм
 * и пакеты, затем алиасы проекта, затем относительные пути, и в самом
 * конце — ресурсы, которые импортируются ради побочного эффекта.
 */
const IMPORT_GROUPS = [
	'builtin',
	'external',
	'internal',
	'parent',
	['sibling', 'index'],
	'components',
	'css-modules',
	'style',
	'images',
	'side-effect-style',
	'side-effect',
	'unknown',
];

export default <Linter.Config>{
	files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mts,cts,vue}'],
	plugins: {
		perfectionist,
	},
	rules: {
		'perfectionist/sort-imports': [
			'warn',
			{
				type: 'natural',
				order: 'asc',
				ignoreCase: true,
				newlinesBetween: 1,
				// `@/` и `~/` — алиасы исходников, а не внешние пакеты.
				internalPattern: ['^@/.*', '^~/.*', '^#.*'],
				groups: IMPORT_GROUPS,
				customGroups: [
					{
						groupName: 'components',
						elementNamePattern: '\\.(vue|jsx|tsx)$',
					},
					{
						groupName: 'css-modules',
						elementNamePattern: '\\.module\\.(css|pcss|less|sass|scss)$',
					},
					{
						groupName: 'images',
						elementNamePattern: '\\.(avif|gif|jpe?g|png|svg|webp)$',
					},
				],
			},
		],
	},
};
