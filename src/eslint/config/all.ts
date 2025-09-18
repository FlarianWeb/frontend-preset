import type { Linter } from 'eslint';

import base from './base';
import imports from './imports';
import json from './json';
import jsx from './jsx';
import vue from './vue';

export default <Linter.Config[]>[...base, ...imports, ...json, ...jsx, ...vue];
