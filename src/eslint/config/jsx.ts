import type { Linter } from 'eslint';

import esLintStylisticJsxRules from './rules/jsx';

export default <Linter.Config[]>[esLintStylisticJsxRules];
