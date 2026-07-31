/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Grid, Image, Overlap, Spotlight } from '@amsterdam/design-system-react'
import { createElement, Fragment } from 'react'
import { describe, expect, it } from 'vitest'

import type { StoryModule } from './model'

import { paddingHeight, readPageAnatomy, readStoryTree, rowGapHeight, space, toContainerWidth } from './model'

const cell = (props: Record<string, unknown>) => createElement(Grid.Cell, props)

describe('space', () => {
  it('returns the smallest value at the narrowest viewport', () => {
    expect(space('xl', 320)).toBe(36)
  })

  it('returns the largest value at the widest viewport', () => {
    expect(space('xl', 1440)).toBe(60)
  })

  it('interpolates in between', () => {
    expect(space('xl', 880)).toBe(48)
  })

  it('clamps beyond either end', () => {
    expect(space('l', 240)).toBe(24)
    expect(space('l', 1920)).toBe(36)
  })
})

describe('readPageAnatomy', () => {
  it('reads a Grid as a section and its Cells as blocks', () => {
    const story = createElement(Grid, { paddingTop: 'large' }, cell({ span: 4 }))

    const { problems, sections } = readPageAnatomy(story, [['Breadcrumb']])

    expect(problems).toEqual([])
    expect(sections).toHaveLength(1)
    expect(sections[0]?.paddingTop).toBe('large')
    expect(sections[0]?.paddingBottom).toBeUndefined()
    expect(sections[0]?.blocks[0]?.label).toBe('Breadcrumb')
  })

  it('spreads paddingVertical over both sides', () => {
    const story = createElement(Grid, { paddingVertical: 'x-large' }, cell({}))

    const [section] = readPageAnatomy(story, [['Body']]).sections

    expect(section?.paddingTop).toBe('x-large')
    expect(section?.paddingBottom).toBe('x-large')
  })

  it('resolves span and start per Grid variant', () => {
    const story = createElement(
      Grid,
      {},
      cell({ span: { narrow: 4, medium: 6, wide: 7 }, start: { narrow: 1, medium: 2, wide: 3 } }),
    )

    const [block] = readPageAnatomy(story, [['Body']]).sections[0]?.blocks ?? []

    expect(block?.span).toEqual({ narrow: 4, medium: 6, wide: 7 })
    expect(block?.start).toEqual({ narrow: 1, medium: 2, wide: 3 })
  })

  it('resolves a span of ‘all’ to the column count of each variant', () => {
    const story = createElement(Grid, {}, cell({ span: 'all' }))

    const [block] = readPageAnatomy(story, [['Heading']]).sections[0]?.blocks ?? []

    expect(block?.span).toEqual({ narrow: 4, medium: 8, wide: 12 })
  })

  it('gives a Cell without a span a single column, as the CSS does', () => {
    const story = createElement(Grid, {}, cell({}))

    const [block] = readPageAnatomy(story, [['Anything']]).sections[0]?.blocks ?? []

    expect(block?.span).toEqual({ narrow: 1, medium: 1, wide: 1 })
    expect(block?.start).toEqual({ narrow: undefined, medium: undefined, wide: undefined })
  })

  it('looks past wrappers such as fragments and landmark elements', () => {
    const story = createElement(
      Fragment,
      {},
      createElement('main', {}, createElement(Grid, { paddingBottom: 'x-large' }, cell({ span: 4 }))),
    )

    expect(readPageAnatomy(story, [['Header']]).sections).toHaveLength(1)
  })

  it('takes the padding of a Spotlight from the Grid inside it, whether or not it sets a colour', () => {
    const coloured = createElement(
      Spotlight,
      { color: 'green' },
      createElement(Grid, { paddingVertical: 'x-large' }, cell({ span: 4 })),
    )
    const plain = createElement(Spotlight, {}, createElement(Grid, {}, cell({ span: 4 })))

    expect(readPageAnatomy(coloured, [['Newsletter']]).sections[0]?.spotlight).toBe(true)
    expect(readPageAnatomy(coloured, [['Newsletter']]).sections[0]?.paddingTop).toBe('x-large')
    expect(readPageAnatomy(plain, [['Highlights']]).sections[0]?.spotlight).toBe(true)
  })

  it('reads an Overlap as one section that lays its Grid Cells over its Image', () => {
    const story = createElement(
      Overlap,
      {},
      createElement(Image, { alt: '', aspectRatio: '16:5', src: '' }),
      createElement(Grid, {}, cell({ span: { narrow: 4, medium: 6, wide: 8 } })),
    )

    const [section] = readPageAnatomy(story, [['Hero image', 'Search field']]).sections

    expect(section?.overlap).toBe(true)
    expect(section?.paddingTop).toBeUndefined()
    expect(section?.blocks[0]?.bleed).toBe(true)
    expect(section?.blocks[1]?.span).toEqual({ narrow: 4, medium: 6, wide: 8 })
  })

  it('reads an Image as a full-bleed section with its aspect ratio', () => {
    const story = createElement(Image, { alt: '', aspectRatio: '16:5', src: '' })

    const [block] = readPageAnatomy(story, [['Hero image']]).sections[0]?.blocks ?? []

    expect(block?.bleed).toBe(true)
    expect(block?.aspectRatio).toBe(5 / 16)
  })

  it('takes the height from a label that sets one', () => {
    const story = createElement(Grid, {}, cell({ span: 4 }))

    const [block] = readPageAnatomy(story, [[{ height: 420, label: 'Body' }]]).sections[0]?.blocks ?? []

    expect(block?.height).toEqual({ narrow: 420, medium: 420, wide: 420 })
  })

  it('takes a height per Grid variant, where the content changes shape between them', () => {
    const story = createElement(Grid, {}, cell({ span: 4 }))
    const label = { height: { narrow: 40, medium: 240, wide: 240 }, label: 'Navigation' }

    const [block] = readPageAnatomy(story, [[label]]).sections[0]?.blocks ?? []

    expect(block?.height).toEqual({ narrow: 40, medium: 240, wide: 240 })
  })

  it('reports a story with more sections than there are labels for', () => {
    const story = createElement(Fragment, {}, createElement(Grid, {}, cell({})), createElement(Grid, {}, cell({})))

    expect(readPageAnatomy(story, [['One']]).problems).toEqual([
      'The story has 2 sections, and there are labels for 1.',
    ])
  })

  it('reports a section with more cells than there are labels for', () => {
    const story = createElement(Grid, {}, cell({}), cell({}))

    expect(readPageAnatomy(story, [['One']]).problems).toEqual(['Section 1 has 2 cells, and there are labels for 1.'])
  })
})

describe('readStoryTree', () => {
  /** A story file whose meta declares both the render and an argument, as the Loading Page does. */
  const moduleWith = (seen: string[]): StoryModule => ({
    Default: {},
    default: {
      args: { phase: 'idle' },
      render: (args) => {
        seen.push(String(args['phase']))

        return createElement(Grid, {}, cell({}))
      },
    },
    Loaded: { args: { phase: 'loaded' } },
  })

  it('renders a story that has no render of its own from the meta', () => {
    expect(readStoryTree(moduleWith([]), 'Default')).not.toBeNull()
  })

  it('passes the arguments of the meta, which the story may override', () => {
    const seen: string[] = []
    const module = moduleWith(seen)

    readStoryTree(module, 'Default')
    readStoryTree(module, 'Loaded')

    expect(seen).toEqual(['idle', 'loaded'])
  })

  it('returns nothing when neither the story nor the meta renders', () => {
    expect(readStoryTree({ Default: {}, default: {} }, 'Default')).toBeNull()
  })

  it('reads a story written as a render function, which the older format allows', () => {
    const module: StoryModule = {
      Default: Object.assign(() => createElement(Grid, {}, cell({ span: 4 })), { args: { phase: 'loaded' } }),
      default: { args: { phase: 'idle' } },
    }

    expect(readStoryTree(module, 'Default')).not.toBeNull()
  })
})

describe('paddingHeight and rowGapHeight', () => {
  it('reads the space token behind each padding value', () => {
    expect(paddingHeight('large', 1440)).toBe(36)
    expect(paddingHeight('x-large', 1440)).toBe(60)
    expect(paddingHeight('2x-large', 1440)).toBe(90)
    expect(paddingHeight(undefined, 1440)).toBe(0)
  })

  it('defaults the row gap to x-large', () => {
    expect(rowGapHeight(undefined, 1440)).toBe(60)
    expect(rowGapHeight('large', 1440)).toBe(36)
    expect(rowGapHeight('none', 1440)).toBe(0)
  })
})

describe('toContainerWidth', () => {
  it('turns a measure of the page into a share of the width of the drawing', () => {
    expect(toContainerWidth(720, 1440)).toBe('50.0000cqw')
  })
})
