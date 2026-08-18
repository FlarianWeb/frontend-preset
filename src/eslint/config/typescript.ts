import type { Linter } from 'eslint';

import { typescript as tsPlugin } from '../plugins';
import type { Config, CreateConfig } from '../types/config';
import applyPluginPolicy from '../utils/applyPluginPolicy';

import esLintTypeScriptRules from './rules/typescript';

/** Файлы, которые разбирает сам парсер TypeScript. */
const TS_FILES = ['**/*.{ts,tsx,mts,cts,js,jsx,mjs,cjs}'];

/**
 * Разделяет регистрацию плагина и объявление парсера.
 *
 * `typescript-eslint` объявляет и то и другое одним конфигом без списка
 * файлов. Парсер без ограничения захватывает и `.vue`: оказавшись в цепочке
 * после конфига Vue, он перебивает `vue-eslint-parser`, и однофайловый
 * компонент начинает разбираться как обычный TypeScript. Внутри `.vue`
 * парсер TypeScript всё равно вызывается, но через `parserOptions.parser`
 * конфига Vue, а не напрямую.
 *
 * Ограничить конфиг целиком нельзя — вместе с парсером область потеряла бы
 * и регистрация плагина, и правила остались бы без реализаций. Поэтому
 * конфиг расходится на два: плагин остаётся общим, парсер получает список
 * файлов.
 */
const splitParserScope = (config: Linter.Config): Linter.Config[] => {
	const { languageOptions, ...rest } = config;

	if (!languageOptions?.parser || config.files) {
		return [config];
	}

	return [rest, { files: TS_FILES, languageOptions }];
};

export const createTypescriptConfig: CreateConfig = (options = {}) => [
	...tsPlugin.configs.recommended
		.flatMap(splitParserScope)
		.map(config => applyPluginPolicy(config, options)),
	applyPluginPolicy(esLintTypeScriptRules, options),
];

export const typescript: Config = createTypescriptConfig();
