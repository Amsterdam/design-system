module.exports = {
  plugins: [
    'removeDimensions',
    'removeUselessStrokeAndFill',
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)',
      },
    },
    {
      name: 'sortAttrs',
      params: {
        order: [],
        xmlnsOrder: 'alphabetical',
      },
    },
  ],
}
