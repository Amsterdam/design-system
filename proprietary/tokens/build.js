import StyleDictionary from 'style-dictionary'

const modes = ['compact']

function generateSharedConfig(mode) {
  const name = mode || 'index'

  return {
    css: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.css`,
          format: 'css/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
      transformGroup: 'css',
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
    },
    cssTheme: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.theme.css`,
          format: 'css/variables',
          options: {
            outputReferences: true,
            selector: `.ams-theme${name === 'index' ? '' : `--${name}`}`,
          },
        },
      ],
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
    },
    js: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.mjs`,
          format: 'javascript/es6',
        },
      ],
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
    },
    json: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.json`,
          format: 'json/nested',
        },
      ],
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
    },
    scss: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.scss`,
          format: 'scss/variables',
          options: {
            outputReferences: true,
          },
        },
      ],
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
    },
    typescript: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.d.ts`,
          format: 'typescript/module-declarations',
        },
      ],
      transformGroup: 'js',
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
    },
  }
}

const defaultMode = new StyleDictionary({
  log: {
    verbosity: 'verbose',
  },
  platforms: generateSharedConfig(),
  source: [
    // exclude non-default modes from source
    `./src/**/!(*.${modes.join(`|*.`)}).tokens.json`,
  ],
})

defaultMode.buildAllPlatforms()

modes.map((mode) => {
  const styleDictionary = new StyleDictionary({
    log: {
      verbosity: 'verbose',
    },
    platforms: generateSharedConfig(mode),
    source: [`./src/**/*.${mode}.tokens.json`],
  })
  return styleDictionary.buildAllPlatforms()
})
