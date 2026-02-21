/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import StyleDictionary from 'style-dictionary'

import { dtcgDimension } from './style-dictionary/transforms/dtcg-dimension.js'
import { nameCustomCamel } from './style-dictionary/transforms/name-custom-camel.js'
import { nameCustomKebab } from './style-dictionary/transforms/name-custom-kebab.js'
import { shadowDTCGDimensionNormalize } from './style-dictionary/transforms/shadow-dtcg-dimension-normalize.js'

StyleDictionary.registerTransform(dtcgDimension)
StyleDictionary.registerTransform(nameCustomCamel)
StyleDictionary.registerTransform(nameCustomKebab)
StyleDictionary.registerTransform(shadowDTCGDimensionNormalize)

const modes = ['compact']
const commonTransforms = ['shadow/dtcg-dimension-normalize', 'shadow/css/shorthand', 'dtcg/dimension']

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
      transforms: [...commonTransforms, 'name/customKebab'],
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
      transforms: [...commonTransforms, 'name/customKebab'],
    },
    js: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.mjs`,
          format: 'javascript/es6',
        },
      ],
      transforms: [...commonTransforms, 'name/customCamel'],
    },
    json: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.json`,
          format: 'json/nested',
        },
      ],
      transforms: [...commonTransforms, 'name/camel'],
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
      transforms: [...commonTransforms, 'name/customKebab'],
    },
    typescript: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.d.ts`,
          format: 'typescript/module-declarations',
        },
      ],
      transforms: ['dtcg/dimension', 'name/customCamel'],
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
    platforms: generateSharedConfig(mode),
    source: [`./src/**/*.${mode}.tokens.json`],
  })
  return styleDictionary.buildAllPlatforms()
})
