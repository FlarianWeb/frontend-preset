import type { Linter } from 'eslint';

import { createBaseConfig } from './base';
import { importsConfig } from './imports';
import { jsonConfig } from './json';
import { jsxConfig } from './jsx';
import { prettierConfig } from './prettier';
import { reactConfig } from './react';
import { createVueConfig } from './vue';

type AllConfigs = {
	withNode: Linter.Config[];
	withApp: Linter.Config[];
	withReact: Linter.Config[];
	withVue: Linter.Config[];
};

export function createAll({ registerPlugins = true }: { registerPlugins?: boolean } = {}): AllConfigs {
	const base = createBaseConfig({ registerPlugins });
	const vue = createVueConfig({ registerPlugins });

	const withNode = [...base, ...importsConfig, ...jsonConfig, ...prettierConfig];
	const withApp = [...withNode, ...jsxConfig];
	const withReact = [...withApp, ...reactConfig];
	const withVue = [...withApp, ...vue];

	return { withNode, withApp, withReact, withVue };
}

export const all: AllConfigs = createAll();
