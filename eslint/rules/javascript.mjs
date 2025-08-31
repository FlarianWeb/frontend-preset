/** @type {import('eslint').Linter.Config} */
export default {
	rules: {
		'arrow-body-style': ['error', 'as-needed'],
		curly: 'error',
		'func-names': ['error', 'always'],
		'no-alert': 'error',
		'no-console': 'error',
		'no-var': 'error',
		'no-duplicate-imports': [
			'error',
			{
				includeExports: true,
			},
		],
		'no-magic-numbers': [
			'error',
			{
				ignore: [-1, 0, 1],
				ignoreArrayIndexes: true,
				ignoreDefaultValues: true,
				enforceConst: true,
			},
		],
		'no-plusplus': [
			'error',
			{
				allowForLoopAfterthoughts: true,
			},
		],
		'no-restricted-syntax': [
			'error',
			{
				selector: 'ForInStatement',
				message: 'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
			},
			{
				selector: 'LabeledStatement',
				message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
			},
			{
				selector: 'WithStatement',
				message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
			},
		],
		'no-unused-expressions': [
			'error',
			{
				allowShortCircuit: true,
			},
		],
	},
};
