module.exports = {
  dimensions: false,
  indexTemplate: require('./indexTemplate.js'),
  jsxRuntime: 'automatic',
  outDir: 'src',
  svgProps: {
    'aria-hidden': 'true',
    focusable: 'false',
  },
  replaceAttrValues: { '#000': 'currentColor' },
  typescript: true,
}
