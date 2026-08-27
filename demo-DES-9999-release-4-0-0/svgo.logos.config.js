/* eslint-disable no-undef */
module.exports = {
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'removeDimensions',
    // Keep fill/stroke attributes — logos rely on them for colour
    // Note: group ordering and <g> structure must still be maintained manually
  ],
}
