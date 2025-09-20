import baseRules from './rules/base';
import orderRules from './rules/order';
import orderGroupsRules from './rules/order-groups';

export const lessConfig = {
	plugins: ['stylelint-order', 'stylelint-less'],
	extends: ['stylelint-config-standard', 'stylelint-config-standard-less', 'stylelint-config-recommended-vue'],
	rules: {
		...baseRules,
		...orderRules,
		...orderGroupsRules,
	},
};
