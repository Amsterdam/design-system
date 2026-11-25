/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { mkdir, readFile, writeFile } from 'node:fs/promises'
import StyleDictionary from 'style-dictionary'

import { nameCustomKebab } from '../style-dictionary/transforms/name-custom-kebab.js'

const densities = ['Spacious', 'Compact']
const rootFontSize = 16

class UnsupportedToken extends Error {}

function reference(token) {
  const value = token.original.$value
  return typeof value === 'string' ? value.match(/^\{([^{}]+)\}$/)?.[1] : undefined
}

// Theme groups omit the code namespace; CSS syntax and Viewport helpers retain their source names.
function themePath(path) {
  return path.replace(/^ams\./, '')
}

function dimension(value, width) {
  if (value && typeof value === 'object') {
    if (Number.isFinite(value.value) && ['px', 'rem'].includes(value.unit)) {
      return value.value * (value.unit === 'rem' ? rootFontSize : 1)
    }
  }
  if (value === '0' || value === 0) return 0
  if (typeof value === 'string') {
    const fixed = value.match(/^(-?\d+(?:\.\d+)?)(px|rem)$/)
    if (fixed) return Number(fixed[1]) * (fixed[2] === 'rem' ? rootFontSize : 1)
    const fluid = value.match(
      /^clamp\((\d+(?:\.\d+)?)rem,\s*(\d+(?:\.\d+)?)rem\s*\+\s*(\d+(?:\.\d+)?)vw,\s*(\d+(?:\.\d+)?)rem\)$/,
    )
    if (fluid) {
      const [, minimum, intercept, slope, maximum] = fluid.map(Number)
      return Math.max(
        minimum * rootFontSize,
        Math.min(intercept * rootFontSize + (slope * width) / 100, maximum * rootFontSize),
      )
    }
  }
  throw new UnsupportedToken('Requires layout context or an unsupported dimension expression.')
}

function colour(value) {
  if (value === 'transparent') return { alpha: 0, colorSpace: 'srgb', components: [0, 0, 0] }
  if (typeof value === 'string' && /^#(?:[\da-f]{3,4}|[\da-f]{6}|[\da-f]{8})$/i.test(value)) {
    let hex = value.slice(1)
    if (hex.length < 5) hex = [...hex].map((digit) => digit.repeat(2)).join('')
    return {
      alpha: hex.length === 8 ? parseInt(hex.slice(6), 16) / 255 : 1,
      colorSpace: 'srgb',
      components: [0, 2, 4].map((offset) => parseInt(hex.slice(offset, offset + 2), 16) / 255),
    }
  }
  const rgb = typeof value === 'string' && value.match(/^rgba?\(([^()]+)\)$/)
  if (rgb) {
    const parts = rgb[1].trim().split(/[\s,/]+/)
    if ([3, 4].includes(parts.length) && parts.every((part) => /^\d+(?:\.\d+)?%?$/.test(part))) {
      const components = parts.slice(0, 3).map((part) => parseFloat(part) / (part.endsWith('%') ? 100 : 255))
      const alpha = parts.length === 4 ? parseFloat(parts[3]) / (parts[3].endsWith('%') ? 100 : 1) : 1
      if ([...components, alpha].every((part) => part >= 0 && part <= 1)) {
        return { alpha, colorSpace: 'srgb', components }
      }
    }
  }
  throw new UnsupportedToken(
    'Requires a concrete hex, RGB, or transparent colour; contextual colours and colour expressions are not imported.',
  )
}

// A line-height ratio needs the font size at its point of use, which can differ from its alias target's context.
function fontSizeToken(token, tokens) {
  const parent = token.path.slice(0, -1)
  while (parent.length > 1) {
    const size = tokens.get([...parent, 'font-size'].join('.'))
    if (size) return size
    parent.pop()
  }
  const target = reference(token)
  if (target) return fontSizeToken(tokens.get(target), tokens)
  throw new UnsupportedToken('A line-height multiplier has no source font size to convert it to pixels.')
}

function convert(token, tokens, width) {
  const value = token.$value
  const extensions = token.$extensions ?? {}
  const type = extensions['nl.amsterdam.type'] ?? token.$type
  const property = token.path.at(-1)
  const subtype = extensions['nl.amsterdam.subtype']
  let result
  // An empty scope keeps primitives without a matching property picker out of Figma's menus.
  let scopes = []

  if (property === 'line-height' || subtype === 'lineHeight' || type === 'lineHeight') {
    if (typeof value !== 'number' || !Number.isFinite(value) || value <= 0) {
      throw new UnsupportedToken('Only positive numeric line-height multipliers are supported.')
    }
    result = {
      $type: 'dimension',
      $value: { unit: 'px', value: value * dimension(fontSizeToken(token, tokens).$value, width) },
    }
    scopes = ['LINE_HEIGHT']
  } else if (['borderRadius', 'borderWidth', 'dimension', 'fontSize'].includes(type)) {
    result = { $type: 'dimension', $value: { unit: 'px', value: dimension(value, width) } }
    if (property === 'font-size' || type === 'fontSize') scopes = ['FONT_SIZE']
    else if (type === 'borderRadius' || property.endsWith('radius')) scopes = ['CORNER_RADIUS']
    else if (type === 'borderWidth' || /^(?:border|outline).*-width$/.test(property)) scopes = ['STROKE_FLOAT']
    else if (
      /(?:^|-)(?:gap|padding|margin)(?:-|$)/.test(property) ||
      (subtype === 'space' && property !== 'outline-offset')
    )
      scopes = ['GAP']
    else if (/(?:block-size|inline-size|width|height)$/.test(property)) scopes = ['WIDTH_HEIGHT']
  } else if (type === 'color') {
    result = { $type: 'color', $value: colour(value) }
    if (property === 'background-color' || token.path.includes('background')) scopes = ['FRAME_FILL', 'SHAPE_FILL']
    else if (property === 'fill') scopes = ['SHAPE_FILL']
    else if (/(?:border|outline).*color$/.test(property) || ['separator', 'stroke'].includes(property))
      scopes = ['STROKE_COLOR']
    else if (property === 'color' || token.path.includes('text')) scopes = ['TEXT_FILL']
  } else if (type === 'fontFamily') {
    const family = Array.isArray(value) ? value[0] : value
    if (typeof family !== 'string' || family.length === 0)
      throw new UnsupportedToken('No primary font family is defined.')
    result = { $type: 'fontFamily', $value: family }
    scopes = ['FONT_FAMILY']
  } else if (type === 'fontWeight' || type === 'number' || type === 'opacity') {
    const numeric =
      type === 'opacity' && typeof value === 'string' && /^\d+(?:\.\d+)?%$/.test(value)
        ? parseFloat(value) / 100
        : typeof value === 'number' || (typeof value === 'string' && /^-?\d+(?:\.\d+)?$/.test(value))
          ? Number(value)
          : NaN
    if (!Number.isFinite(numeric)) throw new UnsupportedToken('Not a finite numeric value.')
    result = { $type: 'number', $value: numeric }
    if (type === 'fontWeight') scopes = ['FONT_WEIGHT']
    else if (type === 'opacity') scopes = ['OPACITY']
  } else if (type === 'duration') {
    const match = typeof value === 'string' && value.match(/^(\d+(?:\.\d+)?)(ms|s)$/)
    const duration = match ? { unit: match[2], value: Number(match[1]) } : value
    if (!duration || !Number.isFinite(duration.value) || !['ms', 's'].includes(duration.unit)) {
      throw new UnsupportedToken('Not a duration in seconds or milliseconds.')
    }
    result = { $type: 'duration', $value: { unit: 's', value: duration.value / (duration.unit === 'ms' ? 1000 : 1) } }
  } else {
    throw new UnsupportedToken(`No usable Figma variable mapping for ${type ?? 'an untyped token'}.`)
  }
  return {
    ...result,
    ...(token.$description ? { $description: token.$description } : {}),
    $extensions: {
      'com.figma.codeSyntax': { Web: `var(--${nameCustomKebab.transform(token)})` },
      'com.figma.hiddenFromPublishing': Boolean(token.$deprecated),
      'com.figma.scopes': scopes,
    },
  }
}

function setToken(document, path, token) {
  let parent = document
  for (const segment of path.slice(0, -1)) {
    parent[segment] ??= {}
    parent = parent[segment]
  }
  if (Object.hasOwn(parent, path.at(-1))) throw new Error(`Duplicate Figma token: ${path.join('.')}`)
  parent[path.at(-1)] = token
}

function sameValues(left, right) {
  return left.every(
    (token, index) =>
      token.$type === right[index].$type && JSON.stringify(token.$value) === JSON.stringify(right[index].$value),
  )
}

function viewportsFromBreakpoints(source) {
  // Phone has no Sass breakpoint; 320px is the fluid scales' documented lower bound.
  const viewports = { Phone: 320 }
  for (const [mode, breakpoint] of [
    ['Tablet', 'medium'],
    ['Desktop', 'wide'],
  ]) {
    const matches = [
      ...source.matchAll(new RegExp(`^\\s*\\$ams-breakpoint-${breakpoint}:\\s*(\\d+(?:\\.\\d+)?)(rem|px);`, 'gm')),
    ]
    if (matches.length !== 1)
      throw new Error(`Expected one px or rem $ams-breakpoint-${breakpoint} in breakpoint.scss.`)
    viewports[mode] = Number(matches[0][1]) * (matches[0][2] === 'rem' ? rootFontSize : 1)
  }
  if (!(viewports.Phone < viewports.Tablet && viewports.Tablet < viewports.Desktop)) {
    throw new Error('Expected Phone < Tablet < Desktop viewport widths.')
  }
  return viewports
}

/**
 * Creates core Figma import documents from resolved brand and common tokens.
 * The two density dictionaries must contain the same core token paths.
 * Theme selects density; a separate Viewport collection provides responsive pixel values.
 * Unsupported CSS-only values are returned in the report instead of becoming unusable variables.
 */
export function createFigmaFiles(densityTokens, breakpoints) {
  const viewports = viewportsFromBreakpoints(breakpoints)
  if (densityTokens.length !== densities.length) throw new Error('Expected Spacious and Compact source dictionaries.')
  const tokens = densityTokens.map(
    (allTokens) =>
      new Map(
        allTokens
          .filter((token) => {
            if (typeof token.filePath !== 'string') throw new Error('Figma source tokens must include their filePath.')
            // The source layer, not a component-like name such as inputs or links, defines the library boundary.
            return /(?:^|\/)src\/(?:brand|common)\//.test(token.filePath.replaceAll('\\', '/'))
          })
          .map((token) => [token.path.join('.'), token]),
      ),
  )
  const paths = [...tokens[0].keys()].sort()
  if (tokens.some((mode) => mode.size !== paths.length || paths.some((path) => !mode.has(path)))) {
    throw new Error('Spacious and Compact must define the same source token paths.')
  }
  const excluded = []
  const evaluated = new Map()
  for (const path of paths) {
    for (const mode of tokens) {
      const target = reference(mode.get(path))
      if (target && !mode.has(target)) {
        throw new Error(`Core Figma token ${path} references an out-of-scope token: ${target}.`)
      }
    }
    const failures = []
    const values = tokens.map((mode, density) => {
      try {
        return Object.values(viewports).map((width) => convert(mode.get(path), mode, width))
      } catch (error) {
        if (!(error instanceof UnsupportedToken)) throw error
        failures.push({ density: densities[density], reason: error.message })
        return undefined
      }
    })
    if (!failures.length && values[0][0].$type !== values[1][0].$type) {
      throw new Error(`Figma token types differ between Spacious and Compact: ${path}.`)
    }
    if (failures.length) excluded.push({ path, reasons: failures })
    else evaluated.set(path, values)
  }

  const files = {}
  for (const [collection, modes] of [
    ['Viewport', Object.keys(viewports)],
    ['Theme', densities],
  ]) {
    for (const mode of modes) files[`${collection}/${mode}.json`] = { $extensions: { 'com.figma.modeName': mode } }
  }
  const helpers = new Set()
  const materialisedAliases = []
  for (const [path, values] of evaluated) {
    for (const [density, name] of densities.entries()) {
      const sourceToken = tokens[density].get(path)
      const target = reference(sourceToken)
      const targetValues = evaluated.get(target)?.[density]
      const token = structuredClone(values[density][0])
      // Equal source values can convert differently, especially line-height ratios with different font sizes.
      if (targetValues && sameValues(values[density], targetValues)) {
        token.$value = `{${themePath(target)}}`
      } else if (
        !sameValues(
          values[density],
          values[density].map(() => values[density][0]),
        )
      ) {
        // Density-specific helpers let Theme and Viewport modes remain independent choices.
        const helperPath = [name, ...sourceToken.path]
        for (const [index, viewport] of Object.keys(viewports).entries()) {
          const helper = structuredClone(values[density][index])
          helper.$extensions['com.figma.scopes'] = []
          helper.$extensions['com.figma.hiddenFromPublishing'] = true
          setToken(files[`Viewport/${viewport}.json`], helperPath, helper)
        }
        helpers.add(helperPath.join('.'))
        token.$extensions['com.figma.aliasData'] = {
          targetVariableName: helperPath.join('/'),
          targetVariableSetName: 'Viewport',
        }
      }
      if (target && (!targetValues || !sameValues(values[density], targetValues))) {
        materialisedAliases.push({ density: name, path, target })
      }
      setToken(files[`Theme/${name}.json`], themePath(path).split('.'), token)
    }
  }
  return {
    files,
    report: {
      collections: [
        { modes: Object.keys(viewports), name: 'Viewport', variables: helpers.size },
        { modes: densities, name: 'Theme', variables: evaluated.size },
      ],
      excluded,
      materialisedAliases,
      outOfScopeTokens: densityTokens[0].length - paths.length,
      rootFontSize,
      sourceLayers: ['brand', 'common'],
      sourceTokens: paths.length,
      viewports,
    },
  }
}

/**
 * Adds offline, native Figma import files to the normal token build.
 * Base values and Compact overrides are resolved without web transforms so units and source aliases remain available.
 * Both density dictionaries are complete because native import requires matching variables in every mode.
 * This writes local JSON only; importing, publishing, and removing obsolete variables happen separately in Figma.
 */
export async function buildFigmaTokens(source) {
  const densityTokens = await Promise.all(
    densities.map(async (density) => {
      const dictionary = new StyleDictionary({
        include: source,
        platforms: { figma: { transforms: [] } },
        source: density === 'Compact' ? ['./src/**/*.compact.tokens.json'] : [],
      })
      return (await dictionary.getPlatformTokens('figma')).allTokens
    }),
  )
  const breakpoints = await readFile(
    new URL('../../../packages/css/src/common/breakpoint.scss', import.meta.url),
    'utf8',
  )
  const { files, report } = createFigmaFiles(densityTokens, breakpoints)
  for (const [path, contents] of Object.entries({ ...files, 'report.json': report })) {
    const destination = new URL(`../dist/figma/${path}`, import.meta.url)
    await mkdir(new URL('./', destination), { recursive: true })
    await writeFile(destination, `${JSON.stringify(contents, null, 2)}\n`)
  }
  console.log(
    `\nFigma: ${report.collections.map(({ name, variables }) => `${name}: ${variables}`).join(', ')} variables.`,
  )
  if (report.excluded.length)
    console.warn(`Figma: ${report.excluded.length} unsupported tokens excluded; see dist/figma/report.json.`)
}
