// TODO: build all currently built files using this setup

const StyleDictionary = require('style-dictionary')

const modes = ['compact']

console.log(`Building default mode...`)
StyleDictionary.extend({
  source: [
    // exclude non-default modes from source
    `./src/**/!(*.${modes.join(`|*.`)}).tokens.json`,
  ],

  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/',
      files: [
        {
          destination: `root.css`,
          format: `css/variables`,
          options: {
            outputReferences: true,
          },
        },
      ],
    },

    json: {
      buildPath: 'dist/',
      files: [
        {
          destination: 'index.tokens.json',
          format: 'json/nested',
        },
      ],
    },
  },
}).buildAllPlatforms()

console.log(`\n\n Building compact mode...`)
StyleDictionary.extend({
  source: [`./src/**/*.compact.tokens.json`],
  platforms: {
    css: {
      transformGroup: `css`,
      buildPath: 'dist/',
      files: [
        {
          destination: `compact.css`,
          format: `css/variables`,
          options: {
            outputReferences: true,
          },
        },
      ],
    },
  },
}).buildAllPlatforms()
