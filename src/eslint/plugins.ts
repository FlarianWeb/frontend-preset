/**
 * Единственный источник инстансов плагинов.
 *
 * Плагины лежат в зависимостях пресета, поэтому все его конфиги видят один
 * и тот же объект — ESLint сравнивает плагины по идентичности, и дубликат
 * из другого места в дереве зависимостей стал бы ошибкой конфигурации.
 * Экспортируются наружу, чтобы соседний конфиг мог переиспользовать тот же
 * инстанс вместо своего.
 */
export { default as js } from '@eslint/js';
export { default as stylistic } from '@stylistic/eslint-plugin';
export { default as jsonc } from 'eslint-plugin-jsonc';
export { default as perfectionist } from 'eslint-plugin-perfectionist';
export { default as prettier } from 'eslint-plugin-prettier';
export { default as vue } from 'eslint-plugin-vue';
export { default as typescript } from 'typescript-eslint';
