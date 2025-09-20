import type { Linter } from 'eslint';
import tsPlugin from 'typescript-eslint';

export default <Linter.Config>{
	files: ['**/*.{ts,tsx,vue}'],
	languageOptions: {
		parser: tsPlugin.parser,
	},
	plugins: {
		'@typescript-eslint': tsPlugin.plugin,
	},
	rules: {
		'no-unused-vars': 'off',
		'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		'@typescript-eslint/no-shadow': 'error',
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				argsIgnorePattern: '^_',
				varsIgnorePattern: '^_',
			},
		],
	},
};
