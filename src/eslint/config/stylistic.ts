import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';

import esLintStylisticRules from './rules/stylistic';

export const createStylisticConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	registerPlugins ? esLintStylisticRules : stripPlugins(esLintStylisticRules),
];

export const stylistic: Config = createStylisticConfig();
