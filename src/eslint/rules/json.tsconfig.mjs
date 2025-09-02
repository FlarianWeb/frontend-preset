import pluginJsonc from 'eslint-plugin-jsonc';

/** @type {import('eslint').Linter.Config} */
export default {
	files: ['**/tsconfig*.json'],
	plugins: { pluginJsonc },
	rules: {
		'jsonc/sort-keys': [
			'warn',
			{
				pathPattern: '^$',
				order: [
					'compilerOptions',
					'extends',
					'include',
					'exclude',
					'files',
					'references',
				],
			},
			{
				pathPattern: '^compilerOptions$',
				order: [
					'target',
					'lib',
					'module',
					'moduleResolution',
					'esModuleInterop',
					'skipLibCheck',
					'forceConsistentCasingInFileNames',
					'strict',
					'noUnusedLocals',
					'noUnusedParameters',
					'noFallthroughCasesInSwitch',
					'noUncheckedSideEffectImports',
					'allowJs',
					'checkJs',
					'jsx',
					'resolveJsonModule',
					'isolatedModules',
					'noEmit',
					'outDir',
					'baseUrl',
					'paths',
					'typeRoots',
					'types',
					'plugins',
				],
			},
			{
				pathPattern: '^references$',
				order: ['path'],
			},
		],
	},
};
