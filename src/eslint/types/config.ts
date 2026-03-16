import type { Linter } from 'eslint';

export type Config = Linter.Config[];
export type CreateConfig = (options?: { registerPlugins?: boolean }) => Config;
