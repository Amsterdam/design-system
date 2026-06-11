export default {
  plugins: [
    {
      name: 'preset-default',
    },
    {
      name: 'prefixIds',
      params: {
        // Do not change class names defined in the SVGs
        prefixClassNames: false,
      },
    },
    {
      name: 'removeAttrs',
      params: {
        attrs: 'svg:fill',
      },
    },
    'removeDimensions',
  ],
}
