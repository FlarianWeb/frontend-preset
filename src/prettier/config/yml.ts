import type { Options } from 'prettier';

const ymlConfig: Options = {
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

export default ymlConfig;
