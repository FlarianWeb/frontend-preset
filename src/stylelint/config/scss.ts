import { type Config } from 'stylelint';

import { createConfig } from './shared';

/** SCSS. */
export const scssConfig: Config = createConfig({
	plugins: ['stylelint-scss'],
	extend: ['stylelint-config-standard-scss'],
});

export default scssConfig;
