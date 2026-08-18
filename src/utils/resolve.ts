import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);

/**
 * Абсолютный путь к пакету из зависимостей пресета.
 *
 * Stylelint и Prettier резолвят строковые имена плагинов относительно
 * конфига проекта, а не пресета. Зависимости пресета лежат в его
 * собственном каталоге — при pnpm они не видны из корня проекта, поэтому
 * голое имя там не находится. Абсолютный путь снимает вопрос.
 */
const resolveFrom = (name: string): string => require.resolve(name);

export default resolveFrom;
