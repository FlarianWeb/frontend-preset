import { createRequire } from 'module';
import { Config } from 'stylelint';

import baseRules from './rules/base';
import orderRules from './rules/order';
import orderGroupsRules from './rules/order-groups';

const require = createRequire(import.meta.url);
const stylelintPlugins = {
	order: require.resolve('stylelint-order'),
	less: require.resolve('stylelint-less'),
};
const stylelintConfig = {
	standard: require.resolve('stylelint-config-standard'),
	standardLess: require.resolve('stylelint-config-standard-less'),
	recommendedVue: require.resolve('stylelint-config-recommended-vue'),
};

export const lessConfig: Config = {
	plugins: [stylelintPlugins.order, stylelintPlugins.less],
	extends: [stylelintConfig.standard, stylelintConfig.standardLess, stylelintConfig.recommendedVue],
	rules: {
		...baseRules,
		...orderRules,
		...orderGroupsRules,
	},
};
