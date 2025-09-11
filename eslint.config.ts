import type { Linter } from 'eslint';

import {
	base,
	imports,
	json,
	jsx
} from './src/eslint';

export default <Linter.Config[]>[
	...base,
	...imports,
	...json,
	...jsx,

	{
		ignores: [
			'dist/**',
			'node_modules/**',
			'pnpm-lock.yaml',
		],
	},
];
