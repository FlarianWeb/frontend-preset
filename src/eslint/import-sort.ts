
import type { Linter } from 'eslint';
import esLintImportSortRules from './rules/import-sort';

const config:Linter.Config[] = [
	esLintImportSortRules
];



export default config;
