import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

export default <Linter.Config> {
	files: ['**/*.vue'],
	plugins: {
		vue: pluginVue,
	},
	rules: {
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

		indent: 'off',
	},
};
