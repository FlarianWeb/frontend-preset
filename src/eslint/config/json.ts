import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';
import pluginJsonc from 'eslint-plugin-jsonc';

import esLintJsonRules from './rules/json';
import esLintJsonPackageRules from './rules/json.package';
import esLintJsonTsconfigRules from './rules/json.tsconfig';

export const createJsonConfig: CreateConfig = ({ registerPlugins = true } = {}) => {
	const base = [
		...pluginJsonc.configs['flat/base'],
		...pluginJsonc.configs['flat/recommended-with-json'],
		...pluginJsonc.configs['flat/recommended-with-json5'],
		...pluginJsonc.configs['flat/recommended-with-jsonc'],
	];

	return [
		...(registerPlugins ? base : base.map(stripPlugins)),
		registerPlugins ? esLintJsonRules : stripPlugins(esLintJsonRules),
	];
};

/**
 * Comment
 */
export const createPackageJsonConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	registerPlugins ? esLintJsonPackageRules : stripPlugins(esLintJsonPackageRules),
];

export const createTsconfigJsonConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	registerPlugins ? esLintJsonTsconfigRules : stripPlugins(esLintJsonTsconfigRules),
];

export const json: Config = createJsonConfig();
export const packageJson: Config = createPackageJsonConfig();
export const tsconfigJson: Config = createTsconfigJsonConfig();
