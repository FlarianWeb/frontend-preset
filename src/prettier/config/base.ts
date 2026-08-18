import type { Options } from 'prettier';

export const baseConfig: Options = {
	printWidth: 100,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	embeddedLanguageFormatting: 'auto',
	trailingComma: 'es5',
	arrowParens: 'avoid',
	endOfLine: 'lf',
};
