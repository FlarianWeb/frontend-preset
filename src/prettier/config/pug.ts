// @ts-check
/// <reference types="@prettier/plugin-pug" />

import type { Options } from 'prettier';

const pugConfig: Options = {
	plugins: ['@prettier/plugin-pug'],

	pugFramework: 'vue',
	pugSortAttributes: 'asc',
	pugClassNotation: 'attribute',
	pugClassLocation: 'before-attributes',
	pugIdNotation: 'literal',
	pugExplicitDiv: false,
	pugSingleFileComponentIndentation: false,
	pugAttributeSeparator: 'always',
	pugCommentPreserveSpaces: 'trim-all',
	pugWrapAttributesThreshold: 3,
	pugEmptyAttributes: 'none',
	pugAttributeCasing: 'camelCase',
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

export default pugConfig;
