import { baseConfig } from './base';
import { pugConfig } from './pug';
import { vueConfig } from './vue';
import { ymlConfig } from './yml';

export const all = {
	...baseConfig,
	...pugConfig,
	...vueConfig,
	...ymlConfig,
};
