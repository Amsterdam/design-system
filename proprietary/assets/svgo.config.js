/* eslint-disable no-undef */
module.exports = {
  plugins: [
    'removeDimensions',
    'removeUselessStrokeAndFill',
    {
      name: 'removeAttrs',
      params: {
        attrs:
          '(fill|fill-rule|stroke|stroke-width|stroke-linecap|stroke-linejoin|stroke-miterlimit|clip-rule|mask|opacity|color|style)',
      },
    },
  ],
}
