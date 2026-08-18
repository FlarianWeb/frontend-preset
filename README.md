# @flarian/frontend-preset

ESLint 10, Prettier and Stylelint in a single package. Plugins ship with the
preset — you install four packages, not twenty.

## Supported formats

`.js` `.jsx` `.ts` `.tsx` `.json` `.jsonc` `.css` `.pcss` `.less` `.scss`
`.vue` `.pug` `.yml` `.yaml`

---

## Install

```sh
pnpm add -D @flarian/frontend-preset eslint prettier stylelint
```

Every plugin — `typescript-eslint`, `eslint-plugin-vue`,
`eslint-plugin-perfectionist`, the Stylelint configs and the rest — is a
dependency of the preset. ESLint, Prettier and Stylelint stay peers: the
project must run a single copy of each.

---

## ESLint

One import, one call:

```ts
// eslint.config.ts
import preset from '@flarian/frontend-preset/eslint';

export default preset();
```

Vue and React switch on by themselves when the matching package is in your
`package.json`. Everything else is on by default.

### Options

| Option | Default | Meaning |
|---|---|---|
| `javascript` | `true` | Core JavaScript rules |
| `typescript` | `true` | TypeScript rules |
| `stylistic` | `true` | Formatting Prettier does not cover |
| `perfectionist` | `true` | Import and member ordering |
| `json` | `true` | JSON, `package.json`, `tsconfig.json` |
| `vue` | `'auto'` | Detected from dependencies |
| `react` | `'auto'` | Detected from dependencies |
| `jsx` | `'auto'` | Follows React |
| `prettier` | `true` | Prettier as the formatter |
| `externalPlugins` | — | Plugin keys another preset already registered |
| `registerPlugins` | `true` | Register nothing at all |
| `ignores` | `[]` | Added to the built-in ignore list |

```ts
export default preset({
	react: false,
	vue: true,
	ignores: ['legacy/**'],
});
```

The call returns a promise. ESLint accepts that directly, and so does
`FlatConfigComposer`, so composing with another preset works as usual:

```ts
// Nuxt brings its own copies of @typescript-eslint and vue. ESLint compares
// plugins by object identity and rejects a second registration under the
// same key, so those two are handed over — the rest the preset still
// registers itself.
import preset from '@flarian/frontend-preset/eslint';

import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
	await preset({ externalPlugins: ['@typescript-eslint', 'vue'] })
);
```

### Individual configs

The pieces stay importable when you want to assemble the chain yourself:

```ts
import { createTypescriptConfig, createVueConfig } from '@flarian/frontend-preset/eslint';
```

Plugin instances are exported too, so a neighbouring config can reuse the
same objects instead of registering its own:

```ts
import { plugins } from '@flarian/frontend-preset/eslint';
```

---

## Prettier

```js
// prettier.config.mjs
import { all } from '@flarian/frontend-preset/prettier';

export default all;
```

`all` bundles the base options with the Vue, pug and YAML overrides.
Individual pieces: `baseConfig`, `vueConfig`, `pugConfig`, `ymlConfig`.

---

## Stylelint

Extend by name, not by imported object — Stylelint resolves a config's own
dependencies relative to the file that lists them:

```js
// stylelint.config.mjs
export default {
	extends: ['@flarian/frontend-preset/stylelint/less'],
};
```

Available: `css`, `pcss`, `less`, `scss`. Each one includes
`stylelint-config-standard`, the Vue overrides and the property-order rules.

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
	"[postcss]": {
		"editor.defaultFormatter": "stylelint.vscode-stylelint",
		"editor.formatOnSave": true
	},
	"[scss]": {
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
	"stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"],
	"stylelint.snippet": ["css", "less", "postcss", "scss", "vue", "sass"]
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

[*.{css,pcss,less,scss}]
indent_style = tab
indent_size = 4

[*.{json}]
indent_style = tab
indent_size = 4

[*.{yaml,yml}]
indent_style = space
indent_size = 2
```
