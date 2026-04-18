/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { flattenTokens } from './flattenTokens'

describe('flattenTokens', () => {
  it('flattens a single string token', () => {
    const tokens = {
      color: { $type: 'color', $value: '#ff0000' },
    }

    expect(flattenTokens(tokens)).toEqual([
      { deprecated: undefined, description: undefined, path: '--color', type: 'color', value: '#ff0000' },
    ])
  })

  it('flattens a dimension token into a combined string', () => {
    const tokens = {
      size: { $type: 'dimension', $value: { unit: 'rem', value: 1 } },
    }

    expect(flattenTokens(tokens)).toEqual([
      { deprecated: undefined, description: undefined, path: '--size', type: 'dimension', value: '1rem' },
    ])
  })

  it('flattens nested groups and builds the correct path', () => {
    const tokens = {
      ams: {
        color: {
          primary: { $type: 'color', $value: '#009de6' },
        },
      },
    }

    expect(flattenTokens(tokens)).toEqual([
      { deprecated: undefined, description: undefined, path: '--ams-color-primary', type: 'color', value: '#009de6' },
    ])
  })

  it('uses the provided scope as a path prefix', () => {
    const tokens = {
      primary: { $type: 'color', $value: '#009de6' },
    }

    expect(flattenTokens(tokens, ['ams', 'color'])).toEqual([
      {
        deprecated: undefined,
        description: undefined,
        path: '--ams-color-primary',
        type: 'color',
        value: '#009de6',
      },
    ])
  })

  it('inherits $type from the group', () => {
    const tokens = {
      $type: 'color',
      primary: { $value: '#009de6' },
      secondary: { $value: '#ec0000' },
    }

    const result = flattenTokens(tokens)

    expect(result[0].type).toBe('color')
    expect(result[1].type).toBe('color')
  })

  it('inherits $type from an ancestor via inheritedType parameter', () => {
    const tokens = {
      primary: { $value: '#009de6' },
    }

    const result = flattenTokens(tokens, [], 'color')

    expect(result[0].type).toBe('color')
  })

  it('overrides inherited type with a group-level $type', () => {
    const tokens = {
      $type: 'dimension',
      size: { $value: { unit: 'rem', value: 1 } },
    }

    const result = flattenTokens(tokens, [], 'color')

    expect(result[0].type).toBe('dimension')
  })

  it('prefers $extensions subtype over $type', () => {
    const tokens = {
      token: {
        $extensions: { 'nl.amsterdam.subtype': 'space' },
        $type: 'dimension',
        $value: '1rem',
      },
    }

    const result = flattenTokens(tokens)

    expect(result[0].type).toBe('space')
  })

  it('falls back to nl.amsterdam.type when no $type is set', () => {
    const tokens = {
      token: {
        $extensions: { 'nl.amsterdam.type': 'borderStyle' },
        $value: 'solid',
      },
    }

    const result = flattenTokens(tokens)

    expect(result[0].type).toBe('borderStyle')
  })

  it('includes deprecated and description fields', () => {
    const tokens = {
      old: {
        $deprecated: 'Use new token instead',
        $description: 'Legacy red',
        $type: 'color',
        $value: '#ff0000',
      },
    }

    const result = flattenTokens(tokens)

    expect(result[0].deprecated).toBe('Use new token instead')
    expect(result[0].description).toBe('Legacy red')
  })

  it('formats an array value as a comma-separated string', () => {
    const tokens = {
      font: { $type: 'fontFamily', $value: ['Arial', 'sans-serif'] },
    }

    const result = flattenTokens(tokens)

    expect(result[0].value).toBe('Arial, sans-serif')
  })

  it('wraps array values that contain spaces in quotes', () => {
    const tokens = {
      font: { $type: 'fontFamily', $value: ['Open Sans', 'Arial', 'sans-serif'] },
    }

    const result = flattenTokens(tokens)

    expect(result[0].value).toBe("'Open Sans', Arial, sans-serif")
  })

  it('formats a shadow token value', () => {
    const tokens = {
      shadow: {
        $type: 'shadow',
        $value: {
          blur: { unit: 'px', value: 4 },
          color: '#000000',
          offsetX: { unit: 'px', value: 0 },
          offsetY: { unit: 'px', value: 2 },
          spread: { unit: 'px', value: 0 },
        },
      },
    }

    const result = flattenTokens(tokens)

    expect(result[0].value).toBe('0px 2px 4px 0px #000000')
  })

  it('skips keys starting with $', () => {
    const tokens = {
      $description: 'group description',
      $type: 'color',
      primary: { $value: '#009de6' },
    }

    const result = flattenTokens(tokens)

    expect(result).toHaveLength(1)
    expect(result[0].path).toBe('--primary')
  })

  it("drops a trailing 'default' segment from the path", () => {
    const tokens = {
      ams: {
        color: {
          background: {
            default: { $type: 'color', $value: '#ffffff' },
          },
        },
      },
    }

    expect(flattenTokens(tokens)).toEqual([
      {
        deprecated: undefined,
        description: undefined,
        path: '--ams-color-background',
        type: 'color',
        value: '#ffffff',
      },
    ])
  })

  it('returns an empty array for an empty group', () => {
    expect(flattenTokens({})).toEqual([])
  })
})
