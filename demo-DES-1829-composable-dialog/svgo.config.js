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
  ],
}
