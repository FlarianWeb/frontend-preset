import { baseConfig } from './base';
import { importsConfig } from './imports';
import { jsonConfig } from './json';
import { jsxConfig } from './jsx';
import { prettierConfig } from './prettier';
import { reactConfig } from './react';
import { vueConfig } from './vue';

const withNode = [...baseConfig, ...importsConfig, ...jsonConfig, ...prettierConfig];
const withApp = [...withNode, ...jsxConfig];
const withReact = [...withApp, ...reactConfig];
const withVue = [...withApp, ...vueConfig];

export const all = { withNode, withApp, withReact, withVue };
