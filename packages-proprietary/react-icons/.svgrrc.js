import { indexTemplate } from './indexTemplate.js'

export default {
  indexTemplate,
  jsxRuntime: 'automatic',
  outDir: 'src',
  svgoConfig: './svgo.config.mjs',
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  typescript: true,
}
