import { baseConfig } from './base';
import { pugConfig } from './pug';
import { vueConfig } from './vue';
import { ymlConfig } from './yml';

export const allConfig = {
	...baseConfig,
	...pugConfig,
	...vueConfig,
	...ymlConfig,
};
