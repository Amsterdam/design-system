import { indexTemplate } from './indexTemplate.mjs'
import svgoConfig from './svgo.config.mjs'

export default {
  indexTemplate,
  jsxRuntime: 'automatic',
  outDir: 'src',
  svgoConfig,
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  typescript: true,
}
