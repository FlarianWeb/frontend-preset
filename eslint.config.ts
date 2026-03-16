import type { Linter } from 'eslint';

import {
	imports,
	javascript,
	json,
	jsx,
	packageJson,
	prettier,
	stylistic,
	typescript,
} from './src/eslint';

export default <Linter.Config[]>[
	...javascript,
	...typescript,
	...stylistic,
	...jsx,
	...imports,
	...json,
	...packageJson,
	...prettier,

	{
		ignores: ['dist/**', 'node_modules/**', 'pnpm-lock.yaml'],
	},
];
