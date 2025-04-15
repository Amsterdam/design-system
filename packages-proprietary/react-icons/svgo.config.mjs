export default {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          prefixIds: {
            // Do not change class names defined in the SVGs
            prefixClassNames: false,
          },
        },
      },
    },
  ],
}
