// import typescript from '@rollup/plugin-typescript';
// import terser from '@rollup/plugin-terser';

// export default {
//     input: 'src/index.ts',
//     output: {
//         dir: 'build',
//         format: 'esm',
//         entryFileNames: '[name].mjs'
//     },
//     plugins: [
//         typescript(),
//         terser({
//             format: {
//                 comments: 'some',
//                 beautify: true,
//                 ecma: 2020,
//             },
//             compress: true,
//             mangle: true,
//             module: true,
//         }),
//     ]
// };

import typescript from '@rollup/plugin-typescript';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'build',
    format: 'esm',
    entryFileNames: '[name].mjs',
    preserveModules: true,
    preserveModulesRoot: 'src',
  },
  plugins: [
    typescript({
      declaration: true,
    }),
    terser({
      format: {
        comments: 'some',
        beautify: true,
        ecma: 2020,
      },
      compress: true,
      mangle: true,
      module: true,
    }),
  ],
};
