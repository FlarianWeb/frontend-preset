import type { Options } from 'prettier';

import base from './base';
import pug from './pug';
import vue from './vue';
import yml from './yml';

const allConfig: Options = {
	...base,
	...pug,
	...vue,
	...yml,
};

export default allConfig;
