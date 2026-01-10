const orderRules = {
	'order/order': [
		[
			{ type: 'at-rule', name: 'import' },
			{ type: 'at-rule', name: 'forward' },
			{ type: 'at-rule', name: 'use' },
			'dollar-variables',
			'at-variables',
			'custom-properties',
			{ type: 'at-rule', name: 'custom-media' },
			{ type: 'at-rule', name: 'function' },
			{ type: 'at-rule', name: 'extend' },
			'declarations',
			'less-mixins',
			{ type: 'at-rule', name: 'mixin' },
			{ type: 'at-rule', mixin: true },
			'rules',
			{ type: 'at-rule', name: 'media' },
			'at-rules',
		],
	],
};

export default orderRules;
