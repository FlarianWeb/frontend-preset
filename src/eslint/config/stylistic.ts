import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintStylisticRules from './rules/stylistic';

export const createStylisticConfig: CreateConfig = (options = {}) => [
	applyPluginPolicy(esLintStylisticRules, options),
];

export const stylistic: Config = createStylisticConfig();
