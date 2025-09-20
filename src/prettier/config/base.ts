import type { Options } from 'prettier';

export const baseConfig: Options = {
	printWidth: 140,
	tabWidth: 4,
	useTabs: true,
	semi: true,
	singleQuote: true,
	bracketSpacing: true,
	jsxBracketSameLine: false,
	embeddedLanguageFormatting: 'auto',
	trailingComma: 'es5',
	arrowParens: 'avoid',
	endOfLine: 'lf',
};
