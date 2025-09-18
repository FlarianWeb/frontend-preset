import type { Linter } from 'eslint';

import esLintImportSortRules from './rules/import-sort';

export default <Linter.Config[]>[esLintImportSortRules];
