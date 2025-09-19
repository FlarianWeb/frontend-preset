import { propertiesOrder } from '../../plugins/order-groups';

const orderGroupsRules = {
	'order/properties-order': [
		propertiesOrder,
		{
			severity: 'warning',
			unspecified: 'bottomAlphabetical',
		},
	],
};

export default orderGroupsRules;
