/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ImageProps } from '@amsterdam/design-system-react'
import type { ReactNode } from 'react'

import { Grid, Image, Overlap, Spotlight } from '@amsterdam/design-system-react'
import { createElement, Fragment } from 'react'
import { describe, expect, it } from 'vitest'

import type { AnatomyBlock, AnatomyLabel, AnatomyLabels, AnatomyViewport, StoryModule } from './model'

import {
  anatomyViewports,
  blockHeight,
  cellWidth,
  drawnSections,
  elidedLabel,
  imageHeight,
  paddingHeight,
  readPageAnatomy,
  readStoryTree,
  rowGapHeight,
  space,
  toContainerWidth,
} from './model'

const cell = (props: Record<string, unknown>) => createElement(Grid.Cell, props)

const image = (aspectRatio?: ImageProps['aspectRatio']) => createElement(Image, { alt: '', aspectRatio, src: '' })

const [narrow, medium, wide] = anatomyViewports()

const names = (blocks: readonly AnatomyBlock[]): string[] =>
  blocks.flatMap((block) =>
    block.blocks ? names(block.blocks) : [block.elided === undefined ? block.label : elidedLabel(block.elided)],
  )

/** The names a drawing shows, with the marker that stands in for a run written as it is drawn. */
const drawn = (story: ReactNode, labels: AnatomyLabels, viewport: AnatomyViewport): string[] =>
  drawnSections(readPageAnatomy(story, labels).sections, viewport).flatMap((section) => names(section.blocks))

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

  it('gives a Grid Cell the aspect ratio of an Image it holds on its own', () => {
    const story = createElement(Grid, {}, cell({ children: image('4:3'), span: 5 }))

    const [block] = readPageAnatomy(story, [['Lead image']]).sections[0]?.blocks ?? []

    expect(block?.aspectRatio).toBe(3 / 4)
    expect(block?.bleed).toBe(false)
  })

  it('reads an Image that names no aspect ratio as the 16:9 its token reserves', () => {
    const story = createElement(Grid, {}, cell({ children: image(), span: 5 }))

    const [block] = readPageAnatomy(story, [['Map']]).sections[0]?.blocks ?? []

    expect(block?.aspectRatio).toBe(9 / 16)
  })

  it('leaves a Grid Cell that holds an Image among other content no shape of its own', () => {
    const children = [createElement('p', { key: 'text' }, 'Body'), image('4:3')]
    const story = createElement(Grid, {}, cell({ children, span: 7 }))

    const [block] = readPageAnatomy(story, [['Article body']]).sections[0]?.blocks ?? []

    expect(block?.aspectRatio).toBeUndefined()
  })

  it('resolves the step of the scale a label names to the height it stands for', () => {
    const story = createElement(Grid, {}, cell({ span: 4 }))

    const [block] = readPageAnatomy(story, [[{ height: 'body', label: 'Body' }]]).sections[0]?.blocks ?? []

    expect(block?.height).toEqual({ narrow: 256, medium: 256, wide: 256 })
  })

  it('takes a step per Grid variant, where the content changes shape between them', () => {
    const story = createElement(Grid, {}, cell({ span: 4 }))
    const label: AnatomyLabel = { height: { narrow: 'heading', medium: 'panel', wide: 'panel' }, label: 'Navigation' }

    const [block] = readPageAnatomy(story, [[label]]).sections[0]?.blocks ?? []

    expect(block?.height).toEqual({ narrow: 48, medium: 192, wide: 192 })
  })

  it('lets a label set the height of an Image, which otherwise takes one from its aspect ratio', () => {
    const story = createElement(Image, { alt: '', aspectRatio: '16:5', src: '' })

    const [block] = readPageAnatomy(story, [[{ height: 'card', label: 'Hero image' }]]).sections[0]?.blocks ?? []

    expect(block?.aspectRatio).toBeUndefined()
    expect(block?.height).toEqual({ narrow: 128, medium: 128, wide: 128 })
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

describe('imageHeight', () => {
  it('draws a band across the page at the height its aspect ratio gives it, up to a card’s', () => {
    expect(imageHeight(100)).toBe(100)
    expect(imageHeight(128)).toBe(128)
  })

  it('flattens a taller one, and keeps every one of them under a body’s height', () => {
    expect(imageHeight(450)).toBeCloseTo(219.6, 1)
    expect(imageHeight(1920)).toBeGreaterThan(imageHeight(450))
    expect(imageHeight(1920)).toBeLessThan(256)
  })
})

describe('elidedLabel', () => {
  it('counts the cells where they lie one under the other', () => {
    expect(elidedLabel({ perRow: 1, rows: 6 })).toBe('6 more')
  })

  it('names the rows and the cells on each where they lie beside one another', () => {
    expect(elidedLabel({ perRow: 2, rows: 3 })).toBe('3 × 2 more')
  })
})

describe('drawnSections', () => {
  /** A section that lists one heading and a run of identical cells, as a page of top tasks does. */
  const topTasks = (length: number, span: unknown) =>
    createElement(Grid, {}, cell({ span: 'all' }), ...Array.from({ length }, (_, index) => cell({ key: index, span })))

  const labels = (length: number): AnatomyLabels => [['Section heading', ...Array.from({ length }, () => 'Top task')]]

  it('draws a run in full while it is short enough to read', () => {
    // Three rows: a marker for the middle one would take a row of its own and leave the drawing no shorter.
    const story = topTasks(3, { narrow: 4, medium: 4, wide: 3 })

    expect(drawn(story, labels(3), narrow!)).toEqual(['Section heading', 'Top task', 'Top task', 'Top task'])
  })

  it('draws a longer run as its first row, a marker for the rest, and its last row', () => {
    const story = topTasks(8, { narrow: 4, medium: 4, wide: 3 })

    expect(drawn(story, labels(8), narrow!)).toEqual(['Section heading', 'Top task', '6 more', 'Top task'])
  })

  it('elides the same run at another Grid variant by the rows it takes there', () => {
    const story = topTasks(8, { narrow: 4, medium: 4, wide: 3 })

    // Two to a row on the medium grid, so four rows: one, a marker for the two in between, and one.
    expect(drawn(story, labels(8), medium!)).toEqual([
      'Section heading',
      'Top task',
      'Top task',
      '2 × 2 more',
      'Top task',
      'Top task',
    ])
  })

  it('leaves the same run in full at the Grid variant where it fits on a few rows', () => {
    const story = topTasks(8, { narrow: 4, medium: 4, wide: 3 })

    expect(drawn(story, labels(8), wide!)).toHaveLength(9)
  })

  it('keeps a whole row at either end, and gives the marker the width of one', () => {
    const story = topTasks(15, 4)
    const [section] = drawnSections(readPageAnatomy(story, labels(15)).sections, wide!)
    const marker = section?.blocks.find((block) => block.elided !== undefined)

    // Three fit beside one another on the wide grid, so the run runs to five rows: three, the marker, and three.
    expect(names(section?.blocks ?? [])).toEqual([
      'Section heading',
      'Top task',
      'Top task',
      'Top task',
      '3 × 3 more',
      'Top task',
      'Top task',
      'Top task',
    ])
    expect(marker?.span.wide).toBe(12)
  })

  it('counts a row from the column the run starts at, where its cells name one', () => {
    // Two lie beside one another on the wide grid, the second following the first: ten of them run to five rows.
    const story = createElement(
      Grid,
      {},
      ...Array.from({ length: 10 }, (_, index) => cell({ key: index, span: 5, start: index % 2 ? undefined : 2 })),
    )
    const [section] = drawnSections(
      readPageAnatomy(story, [Array.from({ length: 10 }, () => 'Link section')]).sections,
      wide!,
    )

    expect(names(section?.blocks ?? [])).toEqual([
      'Link section',
      'Link section',
      '3 × 2 more',
      'Link section',
      'Link section',
    ])
    expect(section?.blocks[2]?.span.wide).toBe(10)
  })

  it('keeps the marker inside the columns, where a run starts every cell at the same one', () => {
    // Every cell names the same start, so each begins a row of its own and the marker covers a single cell.
    const story = createElement(
      Grid,
      {},
      ...Array.from({ length: 5 }, (_, index) => cell({ key: index, span: 5, start: 4 })),
    )
    const [section] = drawnSections(
      readPageAnatomy(story, [Array.from({ length: 5 }, () => 'Link section')]).sections,
      wide!,
    )

    expect(names(section?.blocks ?? [])).toEqual(['Link section', '3 more', 'Link section'])
    expect(section?.blocks[1]?.span.wide).toBe(5)
  })

  it('measures a run inside a Subgrid against the columns of that Subgrid', () => {
    const story = createElement(
      Grid,
      {},
      createElement(
        Grid.Subgrid,
        { span: { narrow: 4, medium: 5, wide: 9 } },
        ...Array.from({ length: 7 }, (_, index) => createElement(Grid.Cell, { key: index, span: 'all' })),
      ),
    )
    const labelled = [Array.from({ length: 7 }, () => 'News card')]
    const [section] = drawnSections(readPageAnatomy(story, labelled).sections, wide!)

    expect(drawn(story, labelled, wide!)).toEqual(['News card', '5 more', 'News card'])
    expect(section?.blocks[0]?.blocks?.[1]?.span.wide).toBe(9)
  })

  it('leaves an Overlap alone, whose blocks lie on one another rather than following one another down', () => {
    const story = createElement(
      Overlap,
      {},
      createElement(Image, { alt: '', aspectRatio: '16:5', src: '' }),
      createElement(Grid, {}, cell({ span: 4 })),
    )

    expect(drawn(story, [['Hero image', 'Search field']], narrow!)).toEqual(['Hero image', 'Search field'])
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

  // A Subgrid states this where the Grid around it has given its own gap up, so it has to measure the same as
  // the default a Grid gives.
  it('reads an x-large row gap as the one it defaults to', () => {
    expect(rowGapHeight('x-large', 1440)).toBe(rowGapHeight(undefined, 1440))
    expect(rowGapHeight('x-large', 1440)).toBe(60)
  })
})

describe('cellWidth', () => {
  it('measures a cell across its columns and the gaps in between them', () => {
    // The wide Grid runs across 1440 pixels, less a 2x-large padding of 90 on either side, over 12 columns of 50
    // and 11 gaps of 60.
    expect(cellWidth(12, wide!)).toBe(1260)
    expect(cellWidth(5, wide!)).toBe(490)
    expect(cellWidth(1, wide!)).toBe(50)
  })

  it('takes the smaller inline padding of Compact Mode', () => {
    const [, , compactWide] = anatomyViewports({ mode: 'compact' })

    expect(cellWidth(12, compactWide!, 'compact')).toBe(1376)
  })
})

describe('blockHeight', () => {
  it('draws a full-bleed Image across the whole width the Grid runs across', () => {
    const story = createElement(Image, { alt: '', aspectRatio: '16:5', src: '' })

    const [block] = readPageAnatomy(story, [['Hero image']]).sections[0]?.blocks ?? []

    // A sixteenth of five of the 1440 the wide Grid runs across, flattened as every image is.
    expect(blockHeight(block!, wide!)).toBe(imageHeight(450))
  })

  it('draws an Image in a Grid Cell across the width of that cell alone', () => {
    const span = { narrow: 4, medium: 4, wide: 5 }
    const story = createElement(Grid, {}, cell({ children: image('4:3'), span }))

    const [block] = readPageAnatomy(story, [['Lead image']]).sections[0]?.blocks ?? []

    // Three quarters of a cell 490 wide on the wide Grid, and of one 272 wide on the narrow one.
    expect(blockHeight(block!, wide!)).toBe(imageHeight(367.5))
    expect(blockHeight(block!, narrow!)).toBe(imageHeight(204))
  })

  it('draws a block that has no shape of its own to the step its label names', () => {
    const story = createElement(Grid, {}, cell({ span: 5 }))

    const [block] =
      readPageAnatomy(story, [[{ height: 'panel', label: 'Table of contents' }]]).sections[0]?.blocks ?? []

    expect(blockHeight(block!, wide!)).toBe(192)
  })
})

describe('toContainerWidth', () => {
  it('turns a measure of the page into a share of the width of the drawing', () => {
    expect(toContainerWidth(720, 1440)).toBe('50.0000cqw')
  })
})
