import StyleDictionary from 'style-dictionary'

const modes = ['compact']

function generateSharedConfig(mode) {
  const name = mode || 'index'

  return {
    css: {
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
      transformGroup: 'css',
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
    },
    cssTheme: {
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.theme.css`,
          format: 'css/variables',
          options: {
            selector: `.ams-theme${name === 'index' ? '' : `--${name}`}`,
            outputReferences: true,
          },
        },
      ],
    },
    js: {
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          format: 'javascript/es6',
          destination: `${name}.mjs`,
        },
      ],
    },
    json: {
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.json`,
          format: 'json/nested',
        },
      ],
    },
    scss: {
      transforms: ['attribute/cti', 'name/kebab', 'color/hsl-4'],
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
    },
    typescript: {
      transforms: ['attribute/cti', 'name/camel', 'color/hsl-4'],
      transformGroup: 'js',
      buildPath: 'dist/',
      files: [
        {
          format: 'typescript/module-declarations',
          destination: `${name}.d.ts`,
        },
      ],
    },
  }
}

const defaultMode = new StyleDictionary({
  log: {
    verbosity: 'verbose',
  },
  source: [
    // exclude non-default modes from source
    `./src/**/!(*.${modes.join(`|*.`)}).tokens.json`,
  ],
  platforms: generateSharedConfig(),
})

defaultMode.buildAllPlatforms()

modes.map((mode) => {
  const styleDictionary = new StyleDictionary({
    log: {
      verbosity: 'verbose',
    },
    source: [`./src/**/*.${mode}.tokens.json`],
    platforms: generateSharedConfig(mode),
  })
  return styleDictionary.buildAllPlatforms()
})
