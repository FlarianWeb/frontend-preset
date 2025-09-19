import type { Linter } from 'eslint';

import esLintStylisticJsxRules from './rules/jsx';

const jsxConfig: Linter.Config[] = [esLintStylisticJsxRules];

export default jsxConfig;
