const StyleDictionary = require('style-dictionary')

const modes = ['compact']

function generateSharedConfig(mode) {
  const prefix = mode ? `${mode}.` : ''

  return {
    css: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: `${prefix}root.css`,
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    cssTheme: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: `${prefix}index.css`,
          format: 'css/variables',
          options: {
            selector: '.amsterdam-theme',
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/module',
          destination: `${prefix}tokens.js`,
        },
      ],
    },
    json: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: `${prefix}index.tokens.json`,
          format: 'json/nested',
        },
      ],
    },
    scss: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: `${prefix}variables.scss`,
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
    },
    typescript: {
      transforms: ['attribute/cti', 'name/cti/kebab', 'color/hsl-4'],
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'typescript/module-declarations',
          destination: `${prefix}tokens.d.ts`,
        },
      ],
    },
  }
}

console.log('Building default mode...')
StyleDictionary.extend({
  source: [
    // exclude non-default modes from source
    `./src/**/!(*.${modes.join(`|*.`)}).tokens.json`,
  ],
  platforms: generateSharedConfig(),
}).buildAllPlatforms()

modes.forEach((mode) => {
  console.log(`\n\nBuilding ${mode} mode...`)
  StyleDictionary.extend({
    source: [`./src/**/*.${mode}.tokens.json`],
    platforms: generateSharedConfig(mode),
  }).buildAllPlatforms()
})
