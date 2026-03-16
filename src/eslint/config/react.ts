import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';
import pluginReact from 'eslint-plugin-react';

import esLintReactRules from './rules/react';
import esLintReactHooksRules from './rules/react-hooks';

export const createReactConfig: CreateConfig = ({ registerPlugins = true } = {}) => {
	const base = [pluginReact.configs.flat.recommended, pluginReact.configs.flat['jsx-runtime']];

	return [
		...(registerPlugins ? base : base.map(stripPlugins)),
		registerPlugins ? esLintReactRules : stripPlugins(esLintReactRules),
		registerPlugins ? esLintReactHooksRules : stripPlugins(esLintReactHooksRules),
	];
};

export const react: Config = createReactConfig();
