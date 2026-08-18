import type { Linter } from 'eslint';

/**
 * Убирает регистрацию плагинов из конфига.
 *
 * Без списка убирает все — конфиг остаётся набором правил. Со списком
 * трогает только названные ключи: остальные плагины никто снаружи
 * не регистрирует, и без них правила не найдут свои реализации.
 */
const stripPlugins = ({ plugins, ...rest }: Linter.Config, only?: string[]): Linter.Config => {
	if (!only) {
		return rest;
	}

	if (!plugins) {
		return { ...rest };
	}

	const kept = Object.fromEntries(
		Object.entries(plugins).filter(([name]) => !only.includes(name))
	);

	return { ...rest, plugins: kept };
};

export default stripPlugins;
