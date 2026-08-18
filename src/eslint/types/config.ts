import type { Linter } from 'eslint';

export type Config = Linter.Config[];

export type CreateConfigOptions = {
	/**
	 * Плагины, зарегистрированные снаружи.
	 *
	 * ESLint сверяет плагины по идентичности объекта и отклоняет вторую
	 * регистрацию под тем же ключом, а pnpm легко создаёт два инстанса
	 * одного плагина с разным peer-контекстом. Соседний пресет —
	 * `@nuxt/eslint`, например, — регистрирует `@typescript-eslint` и
	 * `vue`; их и нужно перечислить, чтобы пресет отдал по ним только
	 * правила. Остальные он регистрирует сам.
	 */
	externalPlugins?: string[];

	/**
	 * Не регистрировать вообще ничего.
	 *
	 * Крайний случай, когда весь набор плагинов приходит снаружи.
	 * Обычно достаточно `externalPlugins`.
	 */
	registerPlugins?: boolean;
};

export type CreateConfig = (options?: CreateConfigOptions) => Config;
