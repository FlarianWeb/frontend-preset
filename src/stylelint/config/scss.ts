import { createRequire } from 'module';
import { Config } from 'stylelint';

import baseRules from './rules/base';
import orderRules from './rules/order';
import orderGroupsRules from './rules/order-groups';

const require = createRequire(import.meta.url);
const stylelintPlugins = {
	order: require.resolve('stylelint-order'),
	scss: require.resolve('stylelint-scss'),
};
const stylelintConfig = {
	standard: require.resolve('stylelint-config-standard'),
	standardScss: require.resolve('stylelint-config-standard-scss'),
	recommendedVue: require.resolve('stylelint-config-recommended-vue'),
};

export const scssConfig: Config = {
	plugins: [stylelintPlugins.order, stylelintPlugins.scss],
	extends: [stylelintConfig.standard, stylelintConfig.standardScss, stylelintConfig.recommendedVue],
	rules: {
		...baseRules,
		...orderRules,
		...orderGroupsRules,
	},
};
