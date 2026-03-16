import type { Linter } from 'eslint';

const stripPlugins = ({ plugins, ...rest }: Linter.Config): Linter.Config => rest;

export default stripPlugins;
