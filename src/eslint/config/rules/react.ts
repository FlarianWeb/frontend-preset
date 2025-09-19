import type { Linter } from 'eslint';
import pluginReact from 'eslint-plugin-react';

export default <Linter.Config>{
	files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
	plugins: {
		react: pluginReact,
	},
	rules: {
		'react/default-props-match-prop-types': 'off',
		'react/jsx-fragments': ['error', 'syntax'],
		'react/jsx-filename-extension': [
			'error',
			{
				extensions: ['.tsx'],
			},
		],
		'react/jsx-props-no-spreading': 'off',
		'react/jsx-indent-props': ['error', 'tab'],
		'react/indent': ['error', 'tab'],
		'react/no-array-index-key': 'error',
		'react/no-multi-comp': 'error',
		'react/no-unsafe': 'error',
		'react/prefer-stateless-function': 'error',
		'react/prop-types': 'off',
	},
};
