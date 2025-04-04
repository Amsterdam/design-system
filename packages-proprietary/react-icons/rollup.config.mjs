import resolve from '@rollup/plugin-node-resolve'
import { readFileSync } from 'fs'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'

const packageJson = JSON.parse(readFileSync('./package.json', 'utf8'))

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  input: './src/index.ts',
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
  plugins: [peerDepsExternal(), resolve(), typescript({ includeDependencies: false })],
}
