import type { Linter } from 'eslint';
import tsPlugin from 'typescript-eslint';

export default <Linter.Config>{
	files: ['**/*.{ts,tsx,vue}'],
	languageOptions: {
		parserOptions: {
			parser: tsPlugin.parser,
		},
	},
	plugins: {
		'@typescript-eslint': tsPlugin.plugin,
	},
	rules: {
		'@typescript-eslint/consistent-type-definitions': 'off',
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': 'off',
		'@typescript-eslint/no-namespace': 'off',
	},
};
