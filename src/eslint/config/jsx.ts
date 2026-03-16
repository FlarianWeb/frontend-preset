import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';

import esLintStylisticJsxRules from './rules/jsx';

export const createJsxConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	registerPlugins ? esLintStylisticJsxRules : stripPlugins(esLintStylisticJsxRules),
];

export const jsx: Config = createJsxConfig();
