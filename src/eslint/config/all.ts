import type { Linter } from 'eslint';

import base from './base';
import imports from './imports';
import json from './json';
import jsx from './jsx';
import prettier from './prettier';
import react from './react';
import vue from './vue';

const withNode: Linter.Config[] = [...base, ...imports, ...json, ...prettier];
const withApp: Linter.Config[] = [...withNode, ...jsx];
const withReact: Linter.Config[] = [...withApp, ...react];
const withVue: Linter.Config[] = [...withApp, ...vue];

export default { withNode, withApp, withReact, withVue };
