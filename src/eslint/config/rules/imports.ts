import type { Linter } from 'eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default <Linter.Config>{
	files: ['**/*.{js,ts,jsx,tsx,cjs,mjs,vue}'],
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
