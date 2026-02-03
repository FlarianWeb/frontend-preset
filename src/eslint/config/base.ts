import type { Linter } from 'eslint';
import globals from 'globals';
import tsPlugin from 'typescript-eslint';
import jsPlugin from '@eslint/js';

import esLintJavaScriptRules from './rules/javascript';
import esLintStylisticRules from './rules/stylistic';
import esLintTypeScriptRules from './rules/typescript';

function stripPlugins({ plugins, ...rest }: Linter.Config): Linter.Config {
	return rest;
}

export function createBaseConfig({ registerPlugins = true }: { registerPlugins?: boolean } = {}): Linter.Config[] {
	return [
		{
			languageOptions: {
				globals: { ...globals.browser, ...globals.node },
			},
		},

		jsPlugin.configs.recommended,
		...(registerPlugins ? tsPlugin.configs.recommended : tsPlugin.configs.recommended.map(stripPlugins)),
		esLintJavaScriptRules,
		registerPlugins ? esLintTypeScriptRules : stripPlugins(esLintTypeScriptRules),
		esLintStylisticRules,
	];
}

export const baseConfig: Linter.Config[] = createBaseConfig();
