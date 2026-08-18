export { createJavascriptConfig, javascript } from './config/javascript';

export {
	createJsonConfig,
	createPackageJsonConfig,
	createTsconfigJsonConfig,
	json,
	packageJson,
	tsconfigJson,
} from './config/json';
export { createJsxConfig, jsx } from './config/jsx';
export { createPerfectionistConfig, perfectionistConfig } from './config/perfectionist';
export { createPrettierConfig, prettier } from './config/prettier';
export { createReactConfig, react } from './config/react';
export { createStylisticConfig, stylistic } from './config/stylistic';
export { createTypescriptConfig, typescript } from './config/typescript';
export { createVueConfig, vue } from './config/vue';
// Инстансы плагинов — чтобы соседний конфиг мог переиспользовать те же
// объекты и не поймать «Cannot redefine plugin».
export * as plugins from './plugins';

import { preset, type PresetOptions, type Toggle } from './preset';

export { preset };
export type { PresetOptions, Toggle };

export default preset;

export type { Config, CreateConfig, CreateConfigOptions } from './types/config';
