/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { InputType, StrictArgTypes } from 'storybook/internal/types'

import { describe, expect, it } from 'vitest'

import { sortLiteralUnionValues } from './sortLiteralUnionValues'

const enhance = (argType: InputType) =>
  (sortLiteralUnionValues as (context: { argTypes: Record<string, InputType> }) => StrictArgTypes)({
    argTypes: { prop: argType },
  })['prop']

describe('sortLiteralUnionValues', () => {
  it('sorts a scrambled numeric type summary', () => {
    const result = enhance({ table: { type: { summary: '3 | 1 | 2 | 4' } } })

    expect(result?.table?.type?.summary).toBe('1 | 2 | 3 | 4')
  })

  it('sorts a scrambled numeric type detail', () => {
    const result = enhance({ table: { type: { detail: '3 | 1 | 2 | 4', summary: 'union' } } })

    expect(result?.table?.type?.detail).toBe('1 | 2 | 3 | 4')
    expect(result?.table?.type?.summary).toBe('union')
  })

  it('sorts numeric options and enum values', () => {
    const result = enhance({ options: [3, 1, 2, 4], type: { name: 'enum', value: [3, 1, 2, 4] } })

    expect(result?.options).toEqual([1, 2, 3, 4])
    expect(result?.type).toEqual({ name: 'enum', value: [1, 2, 3, 4] })
  })

  it('orders a string type summary by the control’s options', () => {
    const result = enhance({
      options: [undefined, 'small', 'medium', 'large'],
      table: { type: { summary: '"medium" | "large" | "small"' } },
    })

    expect(result?.table?.type?.summary).toBe('"small" | "medium" | "large"')
  })

  it('leaves a string type summary without options untouched', () => {
    const result = enhance({ table: { type: { summary: '"medium" | "large" | "small"' } } })

    expect(result?.table?.type?.summary).toBe('"medium" | "large" | "small"')
  })

  it('leaves a string type summary untouched if the options don’t offer every value', () => {
    const result = enhance({
      options: [undefined, 'small'],
      table: { type: { summary: '"medium" | "large" | "small"' } },
    })

    expect(result?.table?.type?.summary).toBe('"medium" | "large" | "small"')
  })

  it('leaves options containing undefined unsorted', () => {
    const result = enhance({ options: [undefined, 2, 3] })

    expect(result?.options).toEqual([undefined, 2, 3])
  })

  it('leaves a type summary without a union untouched', () => {
    const result = enhance({ table: { type: { summary: 'string' } } })

    expect(result?.table?.type?.summary).toBe('string')
  })
})
