import type { Linter } from 'eslint';
import pluginReactHooks from 'eslint-plugin-react-hooks';

export default <Linter.Config>{
	files: ['**/*.js', '**/*.ts', '**/*.jsx', '**/*.tsx'],
	plugins: {
		'react-hooks': pluginReactHooks,
	},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
	},
};
