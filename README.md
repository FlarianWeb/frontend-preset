# @flarian/frontend-preset

Preset for ESLint, Prettier and Stylelint with flat config support.

## Supported formats

`.js` `.jsx` `.ts` `.tsx` `.json` `.jsonc` `.css` `.less` `.scss` `.vue` `.pug` `.yml` `.yaml`

---

## ESLint

### JavaScript

```sh
pnpm add -D eslint @eslint/js globals @flarian/frontend-preset
```

```ts
// eslint.config.ts
import { javascript } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### TypeScript

Requires JavaScript config.

```sh
pnpm add -D typescript-eslint
```

```ts
// eslint.config.ts
import { javascript, typescript } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### Stylistic

Formatting rules via `@stylistic/eslint-plugin`. Use together with Prettier or standalone.

```sh
pnpm add -D @stylistic/eslint-plugin
```

```ts
// eslint.config.ts
import { javascript, typescript, stylistic } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	...stylistic,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### Imports

Sorts and validates imports via `eslint-plugin-simple-import-sort`.

```sh
pnpm add -D eslint-plugin-simple-import-sort
```

```ts
// eslint.config.ts
import { javascript, typescript, imports } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	...imports,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### JSON / package.json / tsconfig.json

```sh
pnpm add -D eslint-plugin-jsonc
```

```ts
// eslint.config.ts
import { json, packageJson, tsconfigJson } from '@flarian/frontend-preset/eslint';

export default [
	...json,
	...packageJson,
	...tsconfigJson,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### JSX

Stylistic rules for JSX. Requires `stylistic`.

No additional dependencies required.

```ts
// eslint.config.ts
import { javascript, stylistic, jsx } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...stylistic,
	...jsx,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### Vue

```sh
pnpm add -D eslint-plugin-vue vue-eslint-parser
```

```ts
// eslint.config.ts
import { javascript, typescript, stylistic, imports, vue } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	...stylistic,
	...imports,
	...vue,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### React

```sh
pnpm add -D eslint-plugin-react eslint-plugin-react-hooks
```

```ts
// eslint.config.ts
import { javascript, typescript, stylistic, imports, jsx, react } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	...stylistic,
	...imports,
	...jsx,
	...react,
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

### Prettier (ESLint integration)

Runs Prettier as an ESLint rule. Automatically applies Vue, Pug and YAML overrides for `.vue` files.

```sh
pnpm add -D prettier eslint-plugin-prettier
```

For Pug support in `.vue` files:

```sh
pnpm add -D @prettier/plugin-pug
```

```ts
// eslint.config.ts
import { javascript, typescript, stylistic, imports, vue, prettier } from '@flarian/frontend-preset/eslint';

export default [
	...javascript,
	...typescript,
	...stylistic,
	...imports,
	...vue,
	...prettier,  // must be last
	{ ignores: ['dist/**', 'node_modules/**'] },
];
```

---

## Prettier

```sh
pnpm add -D prettier
```

```ts
// prettier.config.ts
import { baseConfig } from '@flarian/frontend-preset/prettier';

export default baseConfig;
```

For Vue + Pug projects:

```sh
pnpm add -D @prettier/plugin-pug
```

```ts
// prettier.config.ts
import { baseConfig, pugConfig, vueConfig, ymlConfig } from '@flarian/frontend-preset/prettier';

export default {
	...baseConfig,
	...vueConfig,
	...ymlConfig,
	...pugConfig,
};
```

---

## Stylelint

### LESS

```sh
pnpm add -D stylelint stylelint-order stylelint-less stylelint-config-standard stylelint-config-standard-less stylelint-config-recommended-vue
```

```js
// stylelint.config.mjs
import { less } from '@flarian/frontend-preset/stylelint';

export default { extends: [less] };
```

### SCSS

```sh
pnpm add -D stylelint stylelint-order stylelint-scss stylelint-config-standard stylelint-config-standard-scss stylelint-config-recommended-vue
```

```js
// stylelint.config.mjs
import { scss } from '@flarian/frontend-preset/stylelint';

export default { extends: [scss] };
```

---

## VSCode extensions

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## VSCode settings

```json
{
	"[css]": {
		"editor.defaultFormatter": "stylelint.vscode-stylelint",
		"editor.formatOnSave": true
	},
	"[javascript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true
	},
	"[json]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true
	},
	"[jsonc]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true
	},
	"[less]": {
		"editor.defaultFormatter": "stylelint.vscode-stylelint",
		"editor.formatOnSave": true
	},
	"[typescript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true
	},
	"[vue]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true
	},
	"[yaml]": {
		"editor.defaultFormatter": "redhat.vscode-yaml",
		"editor.formatOnSave": true
	},
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.fixAll.stylelint": "always"
	},
	"eslint.format.enable": true,
	"eslint.validate": ["json", "jsonc", "javascript", "typescript", "vue", "yaml", "yml"],
	"stylelint.packageManager": "pnpm",
	"stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"]
}
```

## .editorconfig

```ini
root = true

[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = tab
insert_final_newline = true
trim_trailing_whitespace = true

[*.{md,markdown}]
trim_trailing_whitespace = false

[*.{js,ts,jsx,tsx,cjs,mjs,vue}]
indent_style = tab
indent_size = 4

[*.{css,less}]
indent_style = tab
indent_size = 4

[*.{json}]
indent_style = tab
indent_size = 4

[*.{yaml,yml}]
indent_style = space
indent_size = 2
```
