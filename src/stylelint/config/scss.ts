import baseRules from './rules/base';
import orderRules from './rules/order';
import orderGroupsRules from './rules/order-groups';

export const scssConfig = {
	plugins: ['stylelint-order', 'stylelint-scss'],
	extends: ['stylelint-config-standard', 'stylelint-config-standard-scss', 'stylelint-config-recommended-vue'],
	rules: {
		...baseRules,
		...orderRules,
		...orderGroupsRules,
	},
};
