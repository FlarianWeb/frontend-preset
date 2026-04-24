import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import parserVue from 'vue-eslint-parser';
import stylisticJs from '@stylistic/eslint-plugin';

export default <Linter.Config>{
	files: ['**/*.vue'],
	languageOptions: {
		parser: parserVue,
	},
	plugins: {
		vue: pluginVue,
		'@stylistic': stylisticJs,
	},
	rules: {
		'vue/no-required-prop-with-default': 'off',
		'vue/multi-word-component-names': 'off',
		'vue/singleline-html-element-content-newline': 'off',
		'vue/html-indent': [
			'warn',
			'tab',
			{
				baseIndent: 1,
				attribute: 1,
				closeBracket: 0,
				alignAttributesVertically: true,
				ignores: [],
			},
		],
		'vue/script-indent': [
			'warn',
			'tab',
			{
				baseIndent: 1,
				switchCase: 1,
			},
		],
		'vue/max-attributes-per-line': [
			'warn',
			{
				singleline: {
					max: 3,
				},
				multiline: {
					max: 1,
				},
			},
		],

		'vue/attributes-order': [
			'error',
			{
				order: [
					'DEFINITION',
					'LIST_RENDERING',
					'CONDITIONALS',
					'RENDER_MODIFIERS',
					'GLOBAL',
					'UNIQUE',
					'SLOT',
					'TWO_WAY_BINDING',
					'OTHER_DIRECTIVES',
					'ATTR_DYNAMIC',
					'ATTR_STATIC',
					'EVENTS',
					'CONTENT',
				],
				alphabetical: true,
			},
		],

		indent: 'off',

		/**
		 * Stylistic override
		 */
		'@stylistic/indent': 'off',
	},
};
