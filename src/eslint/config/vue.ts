import type { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

import esLintVueRules from './rules/vue';

const vueConfig: Linter.Config[] = [...pluginVue.configs['flat/recommended'], esLintVueRules];

export default vueConfig;
