import type { Linter } from 'eslint';

import type { CreateConfigOptions } from '../types/config';

import stripPlugins from './stripPlugins';

/**
 * Приводит конфиг в соответствие с тем, что уже зарегистрировано снаружи.
 */
const applyPluginPolicy = (
	config: Linter.Config,
	{ externalPlugins, registerPlugins = true }: CreateConfigOptions = {}
): Linter.Config => {
	if (!registerPlugins) {
		return stripPlugins(config);
	}

	return externalPlugins?.length ? stripPlugins(config, externalPlugins) : config;
};

export default applyPluginPolicy;
