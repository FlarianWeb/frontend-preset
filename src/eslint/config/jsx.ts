import type { Linter } from 'eslint';

import esLintStylisticJsxRules from './rules/jsx';

export const jsxConfig: Linter.Config[] = [esLintStylisticJsxRules];
