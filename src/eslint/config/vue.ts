import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

import esLintVueRules from './rules/vue';

export const vueConfig: Linter.Config[] = [...pluginVue.configs['flat/recommended'], esLintVueRules];
