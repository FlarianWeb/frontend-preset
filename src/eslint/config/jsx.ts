import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintStylisticJsxRules from './rules/jsx';

export const createJsxConfig: CreateConfig = (options = {}) => [
	applyPluginPolicy(esLintStylisticJsxRules, options),
];

export const jsx: Config = createJsxConfig();
