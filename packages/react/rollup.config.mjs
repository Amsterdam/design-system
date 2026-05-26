import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import dts from 'rollup-plugin-dts'
import filesize from 'rollup-plugin-filesize'
import nodeExternal from 'rollup-plugin-node-externals'
import nodePolyfills from 'rollup-plugin-node-polyfills'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

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
    external: [/@babel\/runtime/, 'react-dom', 'react'],
    input: 'src/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        globals: outputGlobals,
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: 'esm',
        globals: outputGlobals,
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal({ includeDependencies: true }),
      nodeExternal(),
      resolve({ browser: true }),
      commonjs({
        include: /node_modules/,
      }),
      nodePolyfills(),
      typescript({ includeDependencies: false, tsconfig: './tsconfig.build.json', useTsconfigDeclarationDir: true }),
      babel({
        babelHelpers: 'runtime',
        exclude: ['node_modules/**', 'dist/**'],
        extensions: ['.ts', '.tsx'],
        inputSourceMap: true,
        plugins: ['@babel/plugin-transform-runtime'],
        presets: ['@babel/preset-react'],
      }),
      filesize(),
    ],
  },
  {
    input: './dist/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'es' }],
    plugins: [dts()],
  },
]
