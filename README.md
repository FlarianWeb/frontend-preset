# frontend-preset

## Поддерживаемые форматы:
- .js
- .jsx
- .ts
- .tsx
- .json
- .css
- .less
- .scss
- .vue
- .pug
- .yml
- .yaml

## Установка
```sh
pnpm add @flarian/frontend-preset
```

## Расширения vsCode:
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Stylelint](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)
- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

## Примеры конфигураций:
### eslint.config.ts
```ts
import { all } from '@flarian/frontend-preset/eslint';

export default [
	...all.withApp,

	{
		ignores: ['dist/**', 'node_modules/**', 'pnpm-lock.yaml'],
	},
];

```

### prettier.config.mjs
```js
import { all } from '@flarian/frontend-preset/prettier';

export default all;
```

### stylelint.config.mjs
```js
import { all } from '@flarian/frontend-preset/stylelint';

export default {
	extends: [all.less, all.scss],
};
```

## .editorconfig
```ini
root = true

# Блок настроек для всех типов файлов
[*]
charset = utf-8
end_of_line = lf
indent_size = 4
indent_style = tab
insert_final_newline = true
trim_trailing_whitespace = true

# Блок настроек для Markdown
[*.{md,markdown}]
trim_trailing_whitespace = false

# Блок настроек для файлов JavaScript и TypeScript
[*.{js,ts,jsx,tsx,cjs,mjs,vue}]
indent_style = tab
indent_size = 4

# Блок настроек для файлов css
[*.{css,less}]
indent_style = tab
indent_size = 4

# Блок настроек для файлов JSON
[*.{json}]
indent_style = tab
indent_size = 4

# Блок настроек для YAML
[*.{yaml,yml}]
indent_style = space
indent_size = 2
```

## Пример конфигурации для VSCode:
```json
{
	/* Language settings */
	"[css]": {
		"editor.defaultFormatter": "stylelint.vscode-stylelint",
		"editor.formatOnSave": true
	},
	"[javascript]": {
		"editor.defaultFormatter": "dbaeumer.vscode-eslint",
		"editor.formatOnSave": true,
		"editor.suggest.insertMode": "replace"
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

	/* Editor */
	"editor.accessibilitySupport": "off",
	"editor.codeActionsOnSave": {
		"source.fixAll.eslint": "explicit",
		"source.fixAll.stylelint": "always"
	},

	/* ESLint */
	"eslint.format.enable": true,
	"eslint.validate": ["json", "jsonc", "javascript", "typescript", "vue", "yaml", "yml"],

	/* JSON */
	"json.format.enable": true,
	"json.format.keepLines": false,
	"json.validate.enable": false,

	/* Stylelint */
	"stylelint.packageManager": "pnpm",
	"stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"],
}
```
