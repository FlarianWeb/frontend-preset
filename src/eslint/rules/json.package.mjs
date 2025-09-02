import pluginJsonc from 'eslint-plugin-jsonc';

/** @type {import('eslint').Linter.Config} */
export default {
	files: ['**/package.json'],
	plugins: { pluginJsonc },
	rules: {
		'jsonc/sort-keys': [
			'warn',
			{
				pathPattern: '^$',
				order: [
					'name',
					'version',
					'license',
					'author',
					'keywords',
					'homepage',
					'repository',
					'contributors',
					'funding',
					'private',
					'publishConfig',
					'type',
					'files',
					'scripts',
					'dependencies',
					'devDependencies',
					'peerDependencies',
					'optionalDependencies',
					'bundledDependencies',
				],
			},
			{
				pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
				order: ['type', 'name'],
			},
			{
				pathPattern: '^scripts$',
				order: [
					'build',
					'test',
					'lint',
					'start',
					'prebuild',
					'pretest',
				],
			},
		],
	},
};
