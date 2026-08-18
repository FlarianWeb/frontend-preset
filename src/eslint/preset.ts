import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import type { Config } from './types/config';

/** Часть пресета: включить, выключить или решить по зависимостям проекта. */
export type Toggle = 'auto' | boolean;

export type PresetOptions = {
	/** Базовые правила JavaScript. */
	javascript?: boolean;

	/** Правила TypeScript. */
	typescript?: boolean;

	/** Форматирование, которого нет в Prettier. */
	stylistic?: boolean;

	/** Порядок импортов и прочих перечислений. */
	perfectionist?: boolean;

	/** Правила для JSON, package.json и tsconfig.json. */
	json?: boolean;

	/** Vue. По умолчанию включается, если vue есть в зависимостях проекта. */
	vue?: Toggle;

	/** React. По умолчанию включается, если react есть в зависимостях проекта. */
	react?: Toggle;

	/** Форматирование JSX. По умолчанию следует за react. */
	jsx?: Toggle;

	/** Prettier как форматтер плюс гашение спорящих с ним правил. */
	prettier?: boolean;

	/**
	 * Плагины, которые уже зарегистрировал соседний пресет.
	 *
	 * ESLint отклоняет вторую регистрацию плагина под тем же ключом.
	 * `@nuxt/eslint`, например, приносит свои `@typescript-eslint` и `vue`
	 * — по ним пресет отдаст только правила, а остальные плагины
	 * зарегистрирует сам.
	 */
	externalPlugins?: string[];

	/** Не регистрировать ни одного плагина. Обычно нужен `externalPlugins`. */
	registerPlugins?: boolean;

	/** Пути, которые линтер не смотрит. */
	ignores?: string[];
};

const DEFAULT_IGNORES = [
	'**/node_modules/**',
	'**/dist/**',
	'**/coverage/**',
	'**/.output/**',
	'**/.nuxt/**',
	'**/*.min.*',
];

/**
 * Есть ли пакет среди зависимостей проекта.
 *
 * Читается package.json рабочего каталога: включать правила Vue в проекте
 * на React бессмысленно, а требовать от человека перечислять это руками —
 * ровно та ручная работа, от которой пресет избавляет.
 */
const isInstalled = (name: string): boolean => {
	try {
		const pkg = JSON.parse(readFileSync(join(process.cwd(), 'package.json'), 'utf-8')) as {
			dependencies?: Record<string, string>;
			devDependencies?: Record<string, string>;
		};

		return Boolean(pkg.dependencies?.[name] ?? pkg.devDependencies?.[name]);
	} catch {
		return false;
	}
};

/**
 * Пакеты, по которым видно фреймворк.
 *
 * Прямой зависимости может не быть: Nuxt приносит Vue транзитивно, и в
 * package.json проекта самого `vue` не видно.
 */
const FRAMEWORK_PACKAGES = {
	react: ['react', 'next', 'gatsby', 'expo'],
	vue: ['vue', 'nuxt', '@vue/cli-service'],
};

const resolveToggle = (
	value: Toggle | undefined,
	framework: keyof typeof FRAMEWORK_PACKAGES
): boolean =>
	value === undefined || value === 'auto'
		? FRAMEWORK_PACKAGES[framework].some(isInstalled)
		: value;

/**
 * Готовая конфигурация ESLint.
 *
 * Части подгружаются только если включены: проекту на Vue незачем платить
 * загрузкой плагинов React. Возвращается промис — ESLint принимает его как
 * конфигурацию, и `FlatConfigComposer` из `@nuxt/eslint` тоже.
 */
export const preset = async (options: PresetOptions = {}): Promise<Config> => {
	const {
		javascript = true,
		typescript = true,
		stylistic = true,
		perfectionist = true,
		json = true,
		prettier = true,
		registerPlugins = true,
		externalPlugins,
		ignores = [],
	} = options;

	const withVue = resolveToggle(options.vue, 'vue');
	const withReact = resolveToggle(options.react, 'react');
	const withJsx = resolveToggle(options.jsx, 'react');

	const pluginOptions = { externalPlugins, registerPlugins };
	const configs: Config = [];

	if (javascript) {
		const { createJavascriptConfig } = await import('./config/javascript');

		configs.push(...createJavascriptConfig(pluginOptions));
	}

	if (typescript) {
		const { createTypescriptConfig } = await import('./config/typescript');

		configs.push(...createTypescriptConfig(pluginOptions));
	}

	if (withVue) {
		const { createVueConfig } = await import('./config/vue');

		configs.push(...createVueConfig(pluginOptions));
	}

	if (withReact) {
		const { createReactConfig } = await import('./config/react');

		configs.push(...createReactConfig(pluginOptions));
	}

	if (withJsx) {
		const { createJsxConfig } = await import('./config/jsx');

		configs.push(...createJsxConfig(pluginOptions));
	}

	if (json) {
		const { createJsonConfig, createPackageJsonConfig, createTsconfigJsonConfig } =
			await import('./config/json');

		configs.push(
			...createJsonConfig(pluginOptions),
			...createPackageJsonConfig(pluginOptions),
			...createTsconfigJsonConfig(pluginOptions)
		);
	}

	if (perfectionist) {
		const { createPerfectionistConfig } = await import('./config/perfectionist');

		configs.push(...createPerfectionistConfig(pluginOptions));
	}

	if (stylistic) {
		const { createStylisticConfig } = await import('./config/stylistic');

		configs.push(...createStylisticConfig(pluginOptions));
	}

	// Последним: гасит правила, спорящие с форматтером, — в том числе
	// включённые configs выше.
	if (prettier) {
		const { createPrettierConfig } = await import('./config/prettier');

		configs.push(...createPrettierConfig(pluginOptions));
	}

	configs.push({ ignores: [...DEFAULT_IGNORES, ...ignores] });

	return configs;
};

export default preset;
