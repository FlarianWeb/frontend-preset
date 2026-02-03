import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

import esLintVueRules from './rules/vue';

function stripPlugins({ plugins, ...rest }: Linter.Config): Linter.Config {
	return rest;
}

export function createVueConfig({ registerPlugins = true }: { registerPlugins?: boolean } = {}): Linter.Config[] {
	return [
		...(registerPlugins ? pluginVue.configs['flat/recommended'] : pluginVue.configs['flat/recommended'].map(stripPlugins)),
		registerPlugins ? esLintVueRules : stripPlugins(esLintVueRules),
	];
}

export const vueConfig: Linter.Config[] = createVueConfig();
