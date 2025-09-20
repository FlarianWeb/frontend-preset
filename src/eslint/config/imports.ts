import type { Linter } from 'eslint';

import esLintImportSortRules from './rules/import-sort';

export const importsConfig: Linter.Config[] = [esLintImportSortRules];
