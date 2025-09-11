import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [
		'src/index',

		/** EsLint rules */
		'src/eslint/index',
		'src/eslint/config/base',
		'src/eslint/config/imports',
		'src/eslint/config/json',
		'src/eslint/config/jsx',

		/** Stylelint rules */
		'src/stylelint/index',
	],
	declaration: true,
	rollup: {
		emitCJS: true,
	},
});
