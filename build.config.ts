import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
	entries: [
		'src/index',

		/** EsLint rules */
		'src/eslint/index',
		'src/eslint/preset',
		'src/eslint/plugins',
		'src/eslint/config/javascript',
		'src/eslint/config/typescript',
		'src/eslint/config/stylistic',
		'src/eslint/config/jsx',
		'src/eslint/config/perfectionist',
		'src/eslint/config/json',
		'src/eslint/config/vue',
		'src/eslint/config/react',
		'src/eslint/config/prettier',

		/** Prettier rules */
		'src/prettier/index',
		'src/prettier/config/all',
		'src/prettier/config/base',
		'src/prettier/config/pug',
		'src/prettier/config/vue',
		'src/prettier/config/yml',

		/** Stylelint rules */
		'src/stylelint/index',
		'src/stylelint/config/all',
		'src/stylelint/config/shared',
		'src/stylelint/config/css',
		'src/stylelint/config/pcss',
		'src/stylelint/config/less',
		'src/stylelint/config/scss',
	],
	declaration: true,
	rollup: {
		emitCJS: true,
	},
});
