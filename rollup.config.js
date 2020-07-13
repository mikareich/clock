// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'

export default [
  {
    input: 'src/app.js',
    output: {
      file: 'dist/app.min.js',
      format: 'iife',
      plugins: [terser()],
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  },
  {
    input: 'src/sw.js',
    output: {
      file: 'dist/sw.min.js',
      format: 'iife',
      plugins: [terser()],
    },
    plugins: [resolve(), babel({ babelHelpers: 'bundled' })],
  },
]
