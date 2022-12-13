// rollup.config.js
import resolve from '@rollup/plugin-node-resolve'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import typescript from 'rollup-plugin-typescript2'
import packageJson from './package.json'

export default {
  // entry points
  input: './src/index.ts',
  // output files
  output: [
    {
      file: packageJson.module,
      format: 'esm', // ES Modules
      sourcemap: true,
    },
  ],
  // Plugins array
  plugins: [
    peerDepsExternal(), // prevents bundling peerDependencies
    resolve(), // resolves package entrypoints
    typescript({ useTsconfigDeclarationDir: true }), // typescript
  ],
}
