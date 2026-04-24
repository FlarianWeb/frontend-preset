import type { Linter } from 'eslint';
import simpleImportSort from 'eslint-plugin-simple-import-sort';

export default <Linter.Config>{
	files: ['**/*.{js,ts,jsx,tsx,cjs,mjs,vue}'],
	plugins: {
		'@simple-import-sort': simpleImportSort,
	},
	rules: {
		'@simple-import-sort/imports': [
			'warn',
			{
				groups: [
					// 1. Node.js built-ins
					['^node:'],

					// 2. Внешние npm-пакеты (unscoped + @-scoped)
					['^[^.~@]', '^@(?!/)'],

					// 3. @/  global path aliases
					['^@/'],

					// 4. ~/  src path aliases
					['^~/'],

					// 5. Parent-relative (../xxx)
					['^\\.\\./'],

					// 6. Same-dir relative (./xxx)
					['^\\.(?!\\.)'],

					// 7. Vue SFC / JSX / TSX компоненты
					['^.+\\.(vue|jsx|tsx)$'],

					// 8. CSS modules
					['^.+\\.module\\.(less|sass|scss|css|pcss)$'],

					// 9. Стили без module (plain import)
					['^.+\\.(less|sass|scss|css)$'],

					// 10. Картинки и SVG
					['^.+\\.(gif|png|svg|jpg|jpeg|webp)$'],

					// 11. Виртуальные модули и side-effects
					['^\\u0000'],
				],
			},
		],
	},
};
