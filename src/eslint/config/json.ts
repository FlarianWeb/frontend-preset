import { jsonc as pluginJsonc } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintJsonRules from './rules/json';
import esLintJsonPackageRules from './rules/json.package';
import esLintJsonTsconfigRules from './rules/json.tsconfig';

export const createJsonConfig: CreateConfig = (options = {}) => [
	...[
		...pluginJsonc.configs['flat/base'],
		...pluginJsonc.configs['flat/recommended-with-json'],
		...pluginJsonc.configs['flat/recommended-with-json5'],
		...pluginJsonc.configs['flat/recommended-with-jsonc'],
	].map(config => applyPluginPolicy(config, options)),
	applyPluginPolicy(esLintJsonRules, options),
];

export const createPackageJsonConfig: CreateConfig = (options = {}) => [
	applyPluginPolicy(esLintJsonPackageRules, options),
];

export const createTsconfigJsonConfig: CreateConfig = (options = {}) => [
	applyPluginPolicy(esLintJsonTsconfigRules, options),
];

export const json: Config = createJsonConfig();
export const packageJson: Config = createPackageJsonConfig();
export const tsconfigJson: Config = createTsconfigJsonConfig();
