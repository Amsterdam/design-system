import { logoIndexTemplate } from './logoIndexTemplate.mjs'
import { logoTemplate } from './logoTemplate.mjs'

export default {
  indexTemplate: logoIndexTemplate,
  jsxRuntime: 'automatic',
  ref: true,
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
      },
      {
        // Remove fill="none" from the root svg element; the paths have their own explicit fills
        name: 'removeAttrs',
        params: { attrs: 'svg:fill' },
      },
    ],
  },
  svgProps: {
    className: 'ams-logo',
    focusable: 'false',
    height: '2.5rem',
    role: 'img',
  },
  template: logoTemplate,
  typescript: true,
}
