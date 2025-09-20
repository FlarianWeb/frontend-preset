import type { Options } from 'prettier';

export const ymlConfig: Options = {
	overrides: [
		{
			files: '**/*.{yaml,yml}',
			options: {
				useTabs: false,
				tabWidth: 2,
			},
		},
	],
};
