/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import process from 'node:process'
import StyleDictionary from 'style-dictionary'

import { findMultiValueDimensions } from './style-dictionary/multiValueDimensions.js'
import { dtcgDimension } from './style-dictionary/transforms/dtcg-dimension.js'
import { dtcgFontFamily } from './style-dictionary/transforms/dtcg-font-family.js'
import { nameCustomCamel } from './style-dictionary/transforms/name-custom-camel.js'
import { nameCustomKebab } from './style-dictionary/transforms/name-custom-kebab.js'
import { shadowDTCGDimensionNormalize } from './style-dictionary/transforms/shadow-dtcg-dimension-normalize.js'

StyleDictionary.registerTransform(dtcgDimension)
StyleDictionary.registerTransform(dtcgFontFamily)
StyleDictionary.registerTransform(nameCustomCamel)
StyleDictionary.registerTransform(nameCustomKebab)
StyleDictionary.registerTransform(shadowDTCGDimensionNormalize)

const commonCssTransforms = [
  'shadow/dtcg-dimension-normalize',
  'shadow/css/shorthand',
  'dtcg/dimension',
  'dtcg/fontFamily',
]
const modes = ['compact', 'lo-fi']

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
      transforms: [...commonCssTransforms, 'name/customKebab'],
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
      transforms: [...commonCssTransforms, 'name/customKebab'],
    },
    js: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.mjs`,
          format: 'javascript/es6',
        },
      ],
      transforms: [...commonCssTransforms, 'name/customCamel'],
    },
    json: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.json`,
          format: 'json/nested',
        },
      ],
      transforms: [...commonCssTransforms, 'name/camel'],
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
      transforms: [...commonCssTransforms, 'name/customKebab'],
    },
    typescript: {
      buildPath: 'dist/',
      files: [
        {
          destination: `${name}.d.ts`,
          format: 'typescript/module-declarations',
        },
      ],
      // Type declarations only — no CSS-specific transforms needed
      transforms: ['name/customCamel'],
    },
  }
}

const dictionaries = [
  new StyleDictionary({
    log: {
      verbosity: 'verbose',
    },
    platforms: generateSharedConfig(),
    source: [
      // exclude non-default modes from source
      `./src/**/!(*.${modes.join(`|*.`)}).tokens.json`,
    ],
  }),
  ...modes.map(
    (mode) =>
      new StyleDictionary({
        log: {
          verbosity: 'verbose',
        },
        platforms: generateSharedConfig(mode),
        source: [`./src/**/*.${mode}.tokens.json`],
      }),
  ),
]

/**
 * Checks every dictionary before writing any of them, so a token that cannot work where a dimension
 * is used never reaches dist/. The CSS platform is read because it carries both the custom property
 * name and the resolved value the report needs.
 *
 * @returns {Promise<void>}
 */
async function build() {
  const multiValueDimensions = []

  for (const dictionary of dictionaries) {
    const { allTokens } = await dictionary.getPlatformTokens('css')

    multiValueDimensions.push(...findMultiValueDimensions(allTokens))
  }

  if (multiValueDimensions.length > 0) {
    console.error(
      `\n${multiValueDimensions.length} token(s) typed as a dimension hold more than one value. ` +
        'A dimension is read through calc(), max(), min() or clamp(), or set on a longhand property, ' +
        'none of which take two values, so the declaration is dropped and the property falls back to ' +
        'its initial value. Split each one into a token per value:\n',
    )

    for (const { name, path, value } of multiValueDimensions) {
      console.error(`  ${path} (--${name}) = ${value}`)
    }

    process.exit(1)
  }

  for (const dictionary of dictionaries) {
    await dictionary.buildAllPlatforms()
  }
}

build()
