/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta } from '@storybook/react-vite'
import type { StrictArgTypes, StrictInputType } from 'storybook/internal/csf'

import { ChevronDownIcon } from '@amsterdam/design-system-react-icons'
import { describe, expect, it } from 'vitest'

import type { VariantState } from './renderComponentVariantTypes'

import { buildComponentProps } from './buildComponentProps'
import { buildVariantMatrix, SIZE_PROP_NAME } from './buildVariantMatrix'
import { HEADING_SAMPLE } from './variantFixtures'

const argType = (overrides: { name: string } & Partial<StrictInputType>): StrictInputType => ({ ...overrides })

const argTypes = (entries: StrictInputType[]): StrictArgTypes =>
  Object.fromEntries(entries.map((entry) => [entry.name, entry])) as StrictArgTypes

const booleanProp = (name: string) => argType({ name, type: { name: 'boolean' } })

const enumProp = (name: string, values: string[], defaultValue?: string) =>
  argType({
    name,
    ...(defaultValue && { table: { defaultValue: { summary: defaultValue } } }),
    type: { name: 'enum', value: values },
  })

/** The props a cell hands the component, as a comparable string. */
const propsKey = (entry: Parameters<typeof buildComponentProps>[0]): string => {
  const props = buildComponentProps(entry) as Record<string, unknown>

  return JSON.stringify(
    Object.keys(props)
      .sort()
      .map((name) => [name, props[name]]),
    (_key, value) => (typeof value === 'function' ? `function ${value.name}` : value),
  )
}

// Mirrors how renderComponentVariants turns the matrix into component instances.
const renderedKeys = (types: StrictArgTypes, variants: VariantState[], args: Meta['args']) =>
  buildVariantMatrix(types, { args, variants }).map((entry) =>
    propsKey({ ...entry, args, sizePropName: SIZE_PROP_NAME }),
  )

const duplicatesIn = (keys: string[]) => keys.filter((key, index) => keys.indexOf(key) !== index)

// Every shape a test story’s arg types can take, so that the sweep below covers the
// prop kinds the matrix has to combine rather than a handful of examples.
const propShapes = [
  booleanProp('checked'),
  booleanProp('disabled'),
  booleanProp('invalid'),
  enumProp('variant', ['primary', 'secondary', 'tertiary'], 'primary'),
  enumProp('color', ['default', 'inverse']),
  enumProp(SIZE_PROP_NAME, ['large', 'small']),
  argType({ name: 'accessibleName', type: { name: 'string' } }),
  argType({ name: 'icon', table: { defaultValue: { summary: 'CheckboxIcon' } } }),
  argType({ name: 'iconOnly', type: { name: 'boolean' } }),
  argType({ name: 'heading', type: { name: 'string' } }),
]

const stateAxes: VariantState[][] = [[], ['disabled'], ['hovered'], ['disabled', 'hovered']]

// Metas set args freely: values the prop axis offers as well, and bare `undefined`
// to put a row in the controls table without choosing a value for it.
const argSets: Meta['args'][] = [
  undefined,
  {},
  { checked: false, disabled: false, invalid: false },
  { color: 'inverse', heading: HEADING_SAMPLE, iconOnly: true, variant: 'secondary' },
  { checked: undefined, color: undefined, variant: undefined },
]

describe('buildVariantMatrix', () => {
  it('renders no two identical configurations, whatever the arg types and args hold', () => {
    const offenders: string[] = []

    // Every subset of the prop shapes, against every state axis and every set of args.
    for (let subset = 0; subset < 2 ** propShapes.length; subset += 1) {
      const types = argTypes(propShapes.filter((_shape, index) => subset & (1 << index)))

      for (const variants of stateAxes) {
        for (const args of argSets) {
          const duplicates = duplicatesIn(renderedKeys(types, variants, args))

          if (duplicates.length > 0) {
            offenders.push(
              `[${Object.keys(types).join(', ')}] × [${variants.join(', ')}] × ${JSON.stringify(args)}: ${duplicates[0]}`,
            )
          }
        }
      }
    }

    expect(offenders).toEqual([])
  })

  it('leaves out a value the story’s own args already show', () => {
    const types = argTypes([enumProp('variant', ['primary', 'secondary', 'tertiary'], 'primary')])
    const matrix = buildVariantMatrix(types, { args: { variant: 'secondary' } })

    // The baseline shows secondary, so the prop axis shows the other two — primary included.
    expect(matrix.map(({ variant }) => variant)).toEqual([undefined, 'primary', 'tertiary'])
  })

  it('falls back to the declared default for an arg a meta spells out as undefined', () => {
    const types = argTypes([
      argType({ name: 'markers', table: { defaultValue: { summary: 'true' } }, type: { name: 'boolean' } }),
    ])
    const matrix = buildVariantMatrix(types, { args: { markers: undefined } })

    // Passing no value leaves the component on its default of true, which the baseline shows.
    expect(matrix.map(({ variant }) => variant)).toEqual([undefined, false])
  })

  it('opens every state with the baseline, exactly once', () => {
    const matrix = buildVariantMatrix(argTypes([booleanProp('invalid')]), { variants: ['disabled', 'hovered'] })

    expect(matrix.filter(({ propName }) => !propName)).toEqual([
      { hasIcon: null, size: undefined, state: 'default' },
      { hasIcon: null, size: undefined, state: 'disabled' },
      { hasIcon: null, size: undefined, state: 'hovered' },
    ])
  })

  it('keeps an aria-only prop off the prop axis', () => {
    const matrix = buildVariantMatrix(
      argTypes([argType({ name: 'accessibleName', type: { name: 'string' } }), booleanProp('invalid')]),
    )

    expect(matrix.map(({ propName }) => propName)).toEqual([undefined, 'invalid'])
  })

  it('keeps a prop that is also a state off the prop axis', () => {
    const matrix = buildVariantMatrix(argTypes([booleanProp('checked'), booleanProp('disabled')]), {
      variants: ['disabled'],
    })

    expect(matrix.map(({ propName }) => propName)).toEqual([undefined, 'checked', undefined, 'checked'])
  })

  it('crosses the states that have tokens of their own, such as disabled and checked', () => {
    const matrix = buildVariantMatrix(argTypes([booleanProp('checked'), booleanProp('disabled')]), {
      variants: ['disabled'],
    })

    expect(matrix).toContainEqual({
      hasIcon: null,
      propName: 'checked',
      size: undefined,
      state: 'disabled',
      variant: true,
    })
  })

  it('leaves a value equal to the default out, the baseline having shown it', () => {
    const matrix = buildVariantMatrix(argTypes([enumProp('variant', ['primary', 'secondary', 'tertiary'], 'primary')]))

    expect(matrix.map(({ variant }) => variant)).toEqual([undefined, 'secondary', 'tertiary'])
  })

  it('drops the false value of a boolean prop, which is its default', () => {
    const matrix = buildVariantMatrix(argTypes([booleanProp('invalid')]))

    expect(matrix.map(({ variant }) => variant)).toEqual([undefined, true])
  })

  it('keeps a value that merely shares a name with the default of another prop', () => {
    const matrix = buildVariantMatrix(
      argTypes([argType({ name: 'icon', table: { defaultValue: { summary: 'CheckboxIcon' } } })]),
    )

    expect(matrix.map(({ variant }) => variant)).toEqual([undefined, ChevronDownIcon])
  })

  it('crosses every state with every size', () => {
    const matrix = buildVariantMatrix(argTypes([enumProp(SIZE_PROP_NAME, ['large', 'small'])]), {
      variants: ['disabled'],
    })

    expect(matrix.map(({ size, state }) => `${state}/${size}`)).toEqual([
      'default/large',
      'default/small',
      'disabled/large',
      'disabled/small',
    ])
  })

  it('yields one baseline per state for a component with nothing to vary', () => {
    expect(buildVariantMatrix({} as StrictArgTypes, { variants: ['disabled'] })).toEqual([
      { hasIcon: null, size: undefined, state: 'default' },
      { hasIcon: null, size: undefined, state: 'disabled' },
    ])
  })
})
