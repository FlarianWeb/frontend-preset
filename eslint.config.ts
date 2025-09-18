import type { Linter } from 'eslint';

import { all } from './src/eslint';

export default <Linter.Config[]>[
	...all,

	{
		ignores: ['dist/**', 'node_modules/**', 'pnpm-lock.yaml'],
	},
];
