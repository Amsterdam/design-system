/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { createFigmaFiles } from './export.js'

const breakpoints = '$ams-breakpoint-medium: 37.5rem;\n$ams-breakpoint-wide: 72.5rem;'

function source(path, value, type, original = value, extensions = {}) {
  return {
    $extensions: extensions,
    $type: type,
    $value: value,
    original: { $value: original },
    path: path.split('.'),
  }
}

function read(document, path) {
  return path.split('.').reduce((parent, segment) => parent[segment], document)
}

function resolve(files, density, viewport, path, collection = 'Theme') {
  const token = read(files[`${collection}/${collection === 'Theme' ? density : viewport}.json`], path)
  const alias = token.$extensions['com.figma.aliasData']
  if (alias)
    return resolve(files, density, viewport, alias.targetVariableName.replaceAll('/', '.'), alias.targetVariableSetName)
  if (typeof token.$value === 'string' && token.$value.startsWith('{')) {
    return resolve(files, density, viewport, token.$value.slice(1, -1), collection)
  }
  return token.$value
}

describe('Figma import files', () => {
  it('keeps density and viewport independently selectable through native cross-collection aliases', () => {
    const spacious = [
      source('ams.space.m', 'clamp(1rem, 0.5rem + 2vw, 2rem)', 'dimension'),
      source('ams.button.padding-inline', 'clamp(1rem, 0.5rem + 2vw, 2rem)', 'dimension', '{ams.space.m}'),
    ]
    const compact = [
      source('ams.space.m', { unit: 'rem', value: 0.5 }, 'dimension'),
      source('ams.button.padding-inline', { unit: 'rem', value: 0.5 }, 'dimension', '{ams.space.m}'),
    ]
    const { files } = createFigmaFiles([spacious, compact], breakpoints)
    for (const [viewport, value] of [
      ['Phone', 16],
      ['Tablet', 20],
      ['Desktop', 31.2],
    ]) {
      expect(resolve(files, 'Spacious', viewport, 'ams.button.padding-inline')).toEqual({ unit: 'px', value })
      expect(resolve(files, 'Compact', viewport, 'ams.button.padding-inline')).toEqual({ unit: 'px', value: 8 })
    }
    expect(read(files['Theme/Spacious.json'], 'ams.button.padding-inline').$value).toBe('{ams.space.m}')
    expect(read(files['Viewport/Phone.json'], 'Spacious.ams.space.m').$extensions).toMatchObject({
      'com.figma.hiddenFromPublishing': true,
      'com.figma.scopes': [],
    })
  })

  it('reads changed Sass breakpoints and clamps at the source maximum rather than inventing screen widths', () => {
    const tokens = [source('ams.space.m', 'clamp(1rem, 0.5rem + 2vw, 2rem)', 'dimension')]
    const { files, report } = createFigmaFiles(
      [tokens, tokens],
      '$ams-breakpoint-medium: 40rem;\n$ams-breakpoint-wide: 1600px;',
    )
    expect(report.viewports).toEqual({ Desktop: 1600, Phone: 320, Tablet: 640 })
    expect(resolve(files, 'Spacious', 'Tablet', 'ams.space.m')).toEqual({ unit: 'px', value: 20.8 })
    expect(resolve(files, 'Spacious', 'Desktop', 'ams.space.m')).toEqual({ unit: 'px', value: 32 })
  })

  it('converts line-height ratios using their own font size and only retains equivalent aliases', () => {
    const tokens = [
      source('ams.body.font-size', 'clamp(1rem, 0.5rem + 2vw, 2rem)', 'dimension'),
      source('ams.body.line-height', 1.5, 'number'),
      source('ams.button.font-size', 'clamp(1rem, 0.5rem + 2vw, 2rem)', 'dimension', '{ams.body.font-size}'),
      source('ams.button.line-height', 1.5, 'number', '{ams.body.line-height}'),
      source('ams.heading.font-size', { unit: 'rem', value: 2 }, 'dimension'),
      source('ams.heading.line-height', 1.5, 'number', '{ams.body.line-height}'),
    ]
    const { files, report } = createFigmaFiles([tokens, tokens], breakpoints)
    expect(resolve(files, 'Spacious', 'Tablet', 'ams.button.line-height')).toEqual({ unit: 'px', value: 30 })
    expect(resolve(files, 'Spacious', 'Tablet', 'ams.heading.line-height')).toEqual({ unit: 'px', value: 48 })
    expect(read(files['Theme/Spacious.json'], 'ams.button.line-height').$value).toBe('{ams.body.line-height}')
    expect(report.materialisedAliases).toContainEqual({
      density: 'Spacious',
      path: 'ams.heading.line-height',
      target: 'ams.body.line-height',
    })
  })

  it('exports typed colours, primary font families, weights, durations, opacity, and property-specific scopes', () => {
    const tokens = [
      source('ams.button.background-color', '#004699', 'color'),
      source('ams.button.color', '#fff', 'color'),
      source('ams.button.border-color', 'transparent', 'color'),
      source('ams.checkbox.rectangle.fill', '#004699', 'color'),
      source('ams.checkbox.rectangle.stroke', '#004699', 'color'),
      source('ams.button.font-family', ['Amsterdam Sans', 'Arial', 'sans-serif'], 'fontFamily'),
      source('ams.button.font-weight', '700', 'fontWeight'),
      source('ams.button.opacity', '40%', 'opacity'),
      source('ams.button.padding-inline', '0.5rem', 'dimension'),
      source('ams.button.border-radius', '0', 'borderRadius'),
      source('ams.button.border-width', '0.125rem', 'borderWidth'),
      source('ams.motion.duration', '300ms', 'duration'),
    ]
    const { files } = createFigmaFiles([tokens, tokens], breakpoints)
    const document = files['Theme/Spacious.json']
    expect(read(document, 'ams.button.background-color')).toMatchObject({
      $extensions: { 'com.figma.scopes': ['FRAME_FILL', 'SHAPE_FILL'] },
      $type: 'color',
      $value: { alpha: 1, colorSpace: 'srgb', components: [0, 70 / 255, 153 / 255] },
    })
    for (const [property, type, value, scopes] of [
      ['font-family', 'fontFamily', 'Amsterdam Sans', ['FONT_FAMILY']],
      ['font-weight', 'number', 700, ['FONT_WEIGHT']],
      ['opacity', 'number', 0.4, ['OPACITY']],
      ['padding-inline', 'dimension', { unit: 'px', value: 8 }, ['GAP']],
      ['border-radius', 'dimension', { unit: 'px', value: 0 }, ['CORNER_RADIUS']],
      ['border-width', 'dimension', { unit: 'px', value: 2 }, ['STROKE_FLOAT']],
    ]) {
      expect(read(document, `ams.button.${property}`)).toMatchObject({
        $extensions: { 'com.figma.scopes': scopes },
        $type: type,
        $value: value,
      })
    }
    expect(read(document, 'ams.button.border-color').$value.alpha).toBe(0)
    expect(read(document, 'ams.checkbox.rectangle.fill').$extensions['com.figma.scopes']).toEqual(['SHAPE_FILL'])
    expect(read(document, 'ams.checkbox.rectangle.stroke').$extensions['com.figma.scopes']).toEqual(['STROKE_COLOR'])
    expect(read(document, 'ams.motion.duration')).toMatchObject({
      $type: 'duration',
      $value: { unit: 's', value: 0.3 },
    })
  })

  it('normalises RGB opacity without replacing it with an opaque or invented colour', () => {
    const tokens = [source('ams.dialog.backdrop.background-color', 'rgb(24 24 24 / 62.5%)', 'color')]
    const { files } = createFigmaFiles([tokens, tokens], breakpoints)
    expect(read(files['Theme/Spacious.json'], 'ams.dialog.backdrop.background-color').$value).toEqual({
      alpha: 0.625,
      colorSpace: 'srgb',
      components: [24 / 255, 24 / 255, 24 / 255],
    })
  })

  it('uses the existing CSS naming transform and retains descriptions and deprecation visibility', () => {
    const token = {
      ...source('ams.color.interactive.default', '#004699', 'color'),
      $deprecated: 'Use its replacement.',
      $description: 'An interactive colour.',
    }
    const { files } = createFigmaFiles([[token], [token]], breakpoints)
    expect(read(files['Theme/Spacious.json'], 'ams.color.interactive.default')).toMatchObject({
      $description: 'An interactive colour.',
      $extensions: {
        'com.figma.codeSyntax': { Web: 'var(--ams-color-interactive)' },
        'com.figma.hiddenFromPublishing': true,
      },
    })
  })

  it('reports every excluded path and density instead of importing CSS keywords or fake string variables', () => {
    const spacious = [
      source('ams.button.border-color', 'currentColor', 'color'),
      source('ams.button.inline-size', '100%', 'dimension'),
      source('ams.button.line-height', 1.4, 'number'),
      source('ams.button.cursor', 'pointer', 'cursor'),
      source('ams.button.box-shadow', { blur: '1rem' }, 'shadow'),
      source('ams.button.padding-inline', '1rem', 'dimension'),
    ]
    const compact = spacious.map((token) =>
      token.path.at(-1) === 'padding-inline' ? { ...token, $value: '1em' } : token,
    )
    const { files, report } = createFigmaFiles([spacious, compact], breakpoints)
    expect(report.sourceTokens).toBe(report.excluded.length)
    expect(report.excluded.map(({ path }) => path)).toEqual(spacious.map(({ path }) => path.join('.')).sort())
    expect(report.excluded.find(({ path }) => path.endsWith('padding-inline')).reasons).toEqual([
      { density: 'Compact', reason: expect.any(String) },
    ])
    expect(files['Theme/Spacious.json']).not.toHaveProperty('ams')
  })

  it.each([
    '$ams-breakpoint-medium: 40em;\n$ams-breakpoint-wide: 80rem;',
    '$ams-breakpoint-medium: 40rem;',
    '$ams-breakpoint-medium: 40rem;\n$ams-breakpoint-medium: 42rem;\n$ams-breakpoint-wide: 80rem;',
    '$ams-breakpoint-medium: 20rem;\n$ams-breakpoint-wide: 80rem;',
  ])('rejects missing, unsupported, duplicate, or unordered Sass breakpoints: %s', (source) => {
    expect(() => createFigmaFiles([[], []], source)).toThrow()
  })

  it('rejects a Compact-only token rather than producing unequal native mode imports', () => {
    expect(() => createFigmaFiles([[], [source('ams.new', 1, 'number')]], breakpoints)).toThrow(
      'same source token paths',
    )
  })

  it('rejects incompatible types across densities instead of letting native import silently omit a variable', () => {
    expect(() =>
      createFigmaFiles([[source('ams.example', 1, 'number')], [source('ams.example', '#fff', 'color')]], breakpoints),
    ).toThrow('Figma token types differ')
  })
})
