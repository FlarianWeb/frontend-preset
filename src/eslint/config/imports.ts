import type { Linter } from 'eslint';

import esLintImportSortRules from './rules/import-sort';

const importsConfig: Linter.Config[] = [esLintImportSortRules];

export default importsConfig;
