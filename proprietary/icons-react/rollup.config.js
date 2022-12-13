// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

export const outputGlobals = {
  react: 'React',
  'react-dom': 'ReactDOM',
}

export default {
  // entry points
  input: './src/index.ts',
  // output files
  output: [
    {
      file: packageJson.main,
      format: 'cjs',
      sourcemap: true,
      globals: outputGlobals,
    },
    {
      file: packageJson.module,
      format: 'esm', // ES Modules
      sourcemap: true,
      globals: outputGlobals,
    },
  ],
  // Plugins array
  plugins: [
    peerDepsExternal(), // prevents bundling peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ includeDependencies: false }),
  ],
}
