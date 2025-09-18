import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [
		'src/index',

		/** EsLint rules */
		'src/eslint/index',
		'src/eslint/config/all',
		'src/eslint/config/base',
		'src/eslint/config/imports',
		'src/eslint/config/json',
		'src/eslint/config/jsx',
		'src/eslint/config/vue',

		/** Prettier rules */
		'src/prettier/index',
		'src/prettier/config/all',
		'src/prettier/config/base',
		'src/prettier/config/pug',
		'src/prettier/config/vue',
		'src/prettier/config/yml',

		/** Stylelint rules */
		'src/stylelint/index',
	],
	declaration: true,
	rollup: {
		emitCJS: true,
	},
});
