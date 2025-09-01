import simpleImportSort from 'eslint-plugin-simple-import-sort';

/** @type {import('eslint').Linter.Config} */
export default {
	files: [
		'**/*.js',
		'**/*.jsx',
		'**/*.ts',
		'**/*.tsx',
		'**/*.vue',
	],
	plugins: {
		'@simple-import-sort': simpleImportSort,
	},
	rules: {
		'@simple-import-sort/imports': [
			'warn',
			{
				groups: [
					['^', '^@'],

					['^\\./'],

					['^.+\\.(.(js|ts))$'],

					['^~'],

					['^.+\\.(.(vue|jsx|tsx))$'],

					['^~/types'],

					['^.+\\.(module.(less|sass|scss|css))$'],

					['^.+\\.(gif|png|svg|jpg)$'],

					['^\\u0000'],
				],
			},
		],
	},
};
