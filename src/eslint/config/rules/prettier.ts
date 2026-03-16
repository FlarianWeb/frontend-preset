import type { Linter } from 'eslint';
import stylisticJs from '@stylistic/eslint-plugin';

export default <Linter.Config>{
	plugins: {
		'@stylistic': stylisticJs,
	},
	rules: {
		/**
		 * Stylistic override
		 */
		'@stylistic/indent': 'off',
		'@stylistic/max-len': 'off',
		'@stylistic/lines-around-comment': 'off',
		'@stylistic/function-paren-newline': 'off',
	},
};
