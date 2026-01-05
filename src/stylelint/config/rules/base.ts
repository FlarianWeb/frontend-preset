const MAX_DECLARATION_PER_LINE = 5;

const baseRules = {
	'no-empty-source': [true, { message: 'Запрещены пустые файлы' }],
	'string-no-newline': [true, { message: 'Нельзя переносить строки в строковых литералах' }],
	'selector-class-pattern': ['^[a-zA-Z][a-zA-Z0-9_-]*$', { resolveNestedSelectors: true }],
	'declaration-block-single-line-max-declarations': [
		MAX_DECLARATION_PER_LINE,
		{
			message: 'Максимальное количество свойств в одной строке не более 5шт.',
		},
	],
	'function-name-case': [
		'lower',
		{
			message: 'Запрещаем использование верхнего регистра в названиях функций',
		},
	],
	'color-hex-length': ['long', { message: 'Запрещаем использование кородких hex цветов' }],
	'color-named': ['never', { message: 'Запрещаем использование именованных цветов' }],
	'custom-property-pattern': '^[-_A-z0-9]*$',
	'declaration-empty-line-before': null,
	'declaration-property-value-no-unknown': null,
};

export default baseRules;
