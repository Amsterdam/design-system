import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import filesize from 'rollup-plugin-filesize'
import nodeExternal from 'rollup-plugin-node-externals'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import dts from 'rollup-plugin-dts'
import del from 'rollup-plugin-delete'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'))

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        globals: outputGlobals,
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        globals: outputGlobals,
      },
    ],
    external: [/@babel\/runtime/, 'react-dom', 'react'],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      resolve({ browser: true }),
      commonjs({
        include: /node_modules/,
      }),
      nodePolyfills(),
      typescript({ includeDependencies: false, useTsconfigDeclarationDir: true }),
      babel({
        presets: ['@babel/preset-react'],
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
      }),
      filesize(),
    ],
  },
  {
    input: './dist/dts/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [
      dts(),
      del({
        targets: 'dist/dts',
        hook: 'buildEnd',
      }),
    ],
  },
]
