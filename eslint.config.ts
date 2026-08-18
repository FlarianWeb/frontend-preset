import preset from './src/eslint';

export default preset({
	// В самом пресете нет ни фреймворка, ни JSX — автоопределение по
	// зависимостям выключено намеренно, чтобы конфиг не менялся от того,
	// что появилось в devDependencies.
	jsx: false,
	react: false,
	vue: false,

	ignores: ['pnpm-lock.yaml'],
});
