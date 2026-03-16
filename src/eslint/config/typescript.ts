import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';
import tsPlugin from 'typescript-eslint';

import esLintTypeScriptRules from './rules/typescript';

export const createTypescriptConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	...(registerPlugins
		? tsPlugin.configs.recommended
		: tsPlugin.configs.recommended.map(stripPlugins)),
	registerPlugins ? esLintTypeScriptRules : stripPlugins(esLintTypeScriptRules),
];

export const typescript: Config = createTypescriptConfig();
