import type { Config, CreateConfig } from '../types/config';
import stripPlugins from '../utils/stripPlugins';

import esLintImportsRules from './rules/imports';

export const createImportsConfig: CreateConfig = ({ registerPlugins = true } = {}) => [
	registerPlugins ? esLintImportsRules : stripPlugins(esLintImportsRules),
];

export const imports: Config = createImportsConfig();
