import type { Linter } from 'eslint';
import pluginReact from 'eslint-plugin-react';

import esLintReactRules from './rules/react';
import esLintReactHooksRules from './rules/react-hooks';

export const reactConfig: Linter.Config[] = [
	pluginReact.configs.flat.recommended,
	pluginReact.configs.flat['jsx-runtime'],
	esLintReactRules,
	esLintReactHooksRules,
];
