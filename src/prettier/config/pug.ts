// @ts-check
/// <reference types="@prettier/plugin-pug" />

import type { Options } from 'prettier';

import resolveFrom from '../../utils/resolve';

export const pugConfig: Options = {
	plugins: [resolveFrom('@prettier/plugin-pug')],

	pugFramework: 'vue',
	pugSortAttributes: 'asc',
	pugClassNotation: 'attribute',
	pugClassLocation: 'before-attributes',
	pugIdNotation: 'as-is',
	pugExplicitDiv: false,
	pugSingleFileComponentIndentation: false,
	pugAttributeSeparator: 'always',
	pugCommentPreserveSpaces: 'trim-all',
	pugWrapAttributesThreshold: 3,
	pugEmptyAttributes: 'none',
	pugSortAttributesBeginning: [
		'^ref$',
		'^:?ref$',
		'^v-if$',
		'^v-else$',
		'^v-else-if$',
		'^v-show$',
		'^v-for$',
		'^:key$',
		'^v-on$',
		'^v-once$',
		'^v-bind$',
		'^v-model',
		'^v-slot$',
		'^v-pre$',
		'^v-memo$',
		'^v-cloak$',
		'^v-text$',
		'^v-html$',
		'^:?id$',
		'^:?class$',
		'^:?style$',
		'^:?data-',
	],
	pugSortAttributesEnd: ['^:', '^@'],
};
