// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          inlineStyles: false,
          convertStyleToAttrs: false,
          removeStyleElement: false,
          removeDoctype: false,
        },
      },
    },
  ],
}
