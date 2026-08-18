import { type Config } from 'stylelint';

import { createConfig } from './shared';

/** Less. */
export const lessConfig: Config = createConfig({
	plugins: ['stylelint-less'],
	extend: ['stylelint-config-standard-less'],
});

export default lessConfig;
