module.exports = {
  indexTemplate: require('./indexTemplate.js'),
  jsxRuntime: 'automatic',
  outDir: 'src',
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  typescript: true,
  svgoConfig: './svgo.config.mjs',
}
