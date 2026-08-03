/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryFn, StoryObj } from '@storybook/react-vite'
import type { ReactElement, ReactNode } from 'react'

import { Children, createElement, isValidElement } from 'react'
import { renderToStaticMarkup } from 'react-dom/server'

/**
 * Reads the anatomy of a page template from the element tree its story renders.
 *
 * The drawing derives its geometry from the story itself, so a change to a Grid or a Grid Cell shows up in the
 * schematic without an edit here. Only the labels are written by hand: no prop on the page says that a cell holds
 * the article body. Section and cell counts are checked against those labels, so a change to the story that the
 * labels do not cover reports a problem instead of drawing a wrong page.
 */

/** The viewport widths the `ams.space` tokens scale between. */
const minViewportWidth = 320
const maxViewportWidth = 1440

/** Spacious Mode for public websites, Compact Mode for internal ones. Both scale their own way. */
export type AnatomyMode = 'compact' | 'spacious'

/** The pixel values the `ams.space` tokens scale between at those two viewport widths, per mode. */
const spaceScales = {
  compact: { xs: [4, 4], s: [8, 8], m: [12, 16], l: [16, 24], xl: [20, 32], '2xl': [24, 40] },
  spacious: { xs: [4, 6], s: [8, 12], m: [16, 24], l: [24, 36], xl: [36, 60], '2xl': [48, 90] },
} as const satisfies Record<AnatomyMode, Record<string, readonly [number, number]>>

export type SpaceToken = keyof (typeof spaceScales)['spacious']

/** The pixel value of a space token at a given viewport width. */
export const space = (token: SpaceToken, viewportWidth: number, mode: AnatomyMode = 'spacious'): number => {
  const [min, max] = spaceScales[mode][token]
  const ratio = Math.min(1, Math.max(0, (viewportWidth - minViewportWidth) / (maxViewportWidth - minViewportWidth)))

  return min + (max - min) * ratio
}

export type Breakpoint = 'medium' | 'narrow' | 'wide'

export type AnatomyViewport = {
  /** The number of Grid columns at this viewport width. */
  readonly columns: number
  /** The width the Grid runs across: the width of the page, less the Menu column where there is one. */
  readonly contentWidth: number
  readonly key: Breakpoint
  readonly label: string
  /** The width of the Menu beside the page, if it has one at this viewport width. */
  readonly menuWidth: number
  /** The `ams.grid.padding-inline` token at this viewport width. */
  readonly paddingInline: SpaceToken
  readonly width: number
}

/** The `ams.grid.padding-inline` token per Grid variant, per mode. */
const paddingInlineTokens = {
  compact: ['m', 'l', 'xl'],
  spacious: ['l', 'xl', '2xl'],
} as const satisfies Record<AnatomyMode, readonly SpaceToken[]>

/** The `ams.menu.vi-wide.max-inline-size` token. The Menu only takes a column of its own on a wide window. */
const menuWidth = 128

export type AnatomyPage = {
  /** Whether the Page lays out a column for a Menu beside its header, body and footer. */
  readonly menu?: boolean
  readonly mode?: AnatomyMode
}

/**
 * One viewport width per Grid variant: the narrow, medium, and wide grids of 4, 8, and 12 columns.
 *
 * Every page type is drawn at the same three widths, so the drawings compare across the whole section. A Page with
 * a Menu may run to `ams.page.with-menu.max-inline-size`, wider than the 1440 drawn here; the Grid is the wide
 * variant either way, and the Menu takes the same column.
 */
export const anatomyViewports = ({ menu = false, mode = 'spacious' }: AnatomyPage = {}): readonly AnatomyViewport[] =>
  (
    [
      { columns: 4, key: 'narrow', label: 'Mobile', width: 320 },
      { columns: 8, key: 'medium', label: 'Tablet', width: 880 },
      { columns: 12, key: 'wide', label: 'Desktop', width: 1440 },
    ] as const
  ).map((viewport, index) => {
    // Below the wide breakpoint the Menu folds into the Page Header, so only the widest page keeps a column for it.
    const column = menu && viewport.key === 'wide' ? menuWidth : 0

    return {
      ...viewport,
      contentWidth: viewport.width - column,
      menuWidth: column,
      paddingInline: paddingInlineTokens[mode][index] as SpaceToken,
    }
  })

/** The `ams.grid.column-gap` token, at every viewport width. */
const columnGapToken: SpaceToken = 'xl'

/** The space token behind each value of the Grid padding props. */
const paddingTokens = { large: 'l', 'x-large': 'xl', '2x-large': '2xl' } as const

/**
 * The space token behind each value of the Grid `gapVertical` prop. Its default is `x-large`.
 * A Subgrid takes `x-large` as well, to state the gap the Grid gives by default where the Grid has given it up.
 */
const rowGapTokens = { '2x-large': '2xl', large: 'l', none: undefined, 'x-large': 'xl' } as const

type Padding = keyof typeof paddingTokens
type Gap = keyof typeof rowGapTokens

/**
 * The heights a block is drawn at, in pixels of the page it stands for.
 *
 * A schematic says what a page is made of, not how much of it there is, so a block takes a step of this scale
 * rather than a measurement of its content. The same kind of content is then the same size on every page type, and
 * nothing runs taller than a body of text — which on a real page is several times taller than this against its own
 * width, and would leave the whole drawing to be scrolled past rather than read at a glance.
 *
 * The names are sizes with a typical use, not a taxonomy: a page title that carries a lead paragraph is a `card`,
 * and a Compact Mode page has smaller titles than a Spacious Mode one.
 */
/* eslint-disable perfectionist/sort-objects -- Ordered by size, as the space scale above it is. */
const blockHeights = {
  /** A single line of text: a breadcrumb, a result count. */
  line: 32,
  /** A heading, a pagination, a search field. */
  heading: 48,
  /** A page title. */
  title: 72,
  /** A compact box in a row of them: a top task. */
  tile: 96,
  /** A card: a link section, a news card, a search result. */
  card: 128,
  /** A panel: a map, a set of filters, a table of contents, an image slider. */
  panel: 192,
  /** A body of text: an article, a product description, a set of questions. The tallest a block is drawn. */
  body: 256,
} as const
/* eslint-enable perfectionist/sort-objects */

export type BlockHeight = keyof typeof blockHeights

/** The height a block takes when its label does not ask for another. */
const defaultBlockHeight = blockHeights.tile

/**
 * An Image is drawn at its aspect ratio up to a card's height, and past it at an ever smaller share of the rest,
 * so that it never reaches a body's.
 *
 * A hero image drawn at its true ratio is taller on a wide page than everything else on that page put together,
 * and no step of the scale above is. The drawing therefore keeps the ratio where an image is a band across the
 * page, and flattens it where it is not.
 */
const imageHeightInFull = blockHeights.card
const tallestImageHeight = blockHeights.body

/** The height of the marker that stands in for a run of repeated Grid Cells. */
const elidedBlockHeight = 40

/**
 * A run of identical Grid Cells is drawn in full up to this many rows, and from there as its first row, a marker
 * for the ones in between, and its last row. Below it the marker stands in for a single row and takes one of its
 * own, so the drawing is no shorter for it.
 */
const elidedFromRows = 4

export type AnatomyLabel =
  | string
  | {
      /**
       * The height of the block, as a step of the scale above. Accepts one step, or one per Grid variant where the
       * content changes shape between them.
       */
      readonly height?: BlockHeight | Record<Breakpoint, BlockHeight>
      readonly label: string
    }

/** One label per Grid Cell, grouped per section, in the order they appear in the story. */
export type AnatomyLabels = ReadonlyArray<readonly AnatomyLabel[]>

/** The rows a marker stands in for, and how many cells lie beside one another on each of them. */
export type ElidedRows = {
  readonly perRow: number
  readonly rows: number
}

export type AnatomyBlock = {
  /**
   * The `appearance` of the Grid Cell. In Compact Mode a cell has a background and a padding of its own, which the
   * transparent variant removes, so a transparent cell is drawn as bare page rather than as a block.
   */
  readonly appearance?: string
  /**
   * The aspect ratio of an Image, as a height divided by a width, where its label sets no height of its own. A block
   * that has one takes its shape from the width it runs across.
   */
  readonly aspectRatio?: number
  /** Whether the block runs to the edges of the page, outside the inline padding of the Grid. */
  readonly bleed: boolean
  /**
   * The blocks of a Grid Subgrid, which shares the columns of the Grid with its own children rather than holding
   * content of itself. Only a block without these holds content, and only those take a name.
   */
  readonly blocks?: readonly AnatomyBlock[]
  /**
   * The rows of Grid Cells this block stands in for, where a run of identical ones is drawn as its first row, this
   * marker, and its last row. Only a marker carries it, and a marker holds nothing else.
   */
  readonly elided?: ElidedRows
  /**
   * The row gap a Subgrid sets for the blocks it holds. Without one it takes the gap of the Grid, as the real
   * Subgrid does through `row-gap: inherit`.
   */
  readonly gapVertical?: Gap
  /** The height of the block, per Grid variant. */
  readonly height: Record<Breakpoint, number>
  readonly label: string
  /** The number of rows the block spans, per Grid variant. */
  readonly rowSpan: Record<Breakpoint, number | undefined>
  /**
   * The space the content of the Cell puts below itself with an `ams-mb-*` utility. A Grid that has given up its
   * row gap leaves the spacing to that margin, so the drawing has to read it to show the page it stands for.
   */
  readonly spaceAfter?: SpaceToken
  /** The number of columns the block spans, per Grid variant. */
  readonly span: Record<Breakpoint, number>
  /** The column the block starts at, per Grid variant. Undefined leaves the placement to the browser. */
  readonly start: Record<Breakpoint, number | undefined>
}

export type AnatomySection = {
  readonly blocks: readonly AnatomyBlock[]
  readonly gapVertical?: Gap
  /** Whether the blocks of this section lie on top of one another, as the children of an Overlap do. */
  readonly overlap?: boolean
  readonly paddingBottom?: Padding
  readonly paddingTop?: Padding
  /** Whether this section sits in a Spotlight, and takes its coloured band. */
  readonly spotlight?: boolean
}

export type PageAnatomy = {
  /** Everything about the story the labels do not describe. Empty when the two agree. */
  readonly problems: readonly string[]
  readonly sections: readonly AnatomySection[]
}

/** The height an Image takes, as a fraction of the width it runs across. */
const aspectRatios: Record<string, number> = {
  '1:1': 1,
  '16:5': 5 / 16,
  '16:9': 9 / 16,
  '3:4': 4 / 3,
  '4:3': 3 / 4,
  '9:16': 16 / 9,
}

/** The `ams.image.aspect-ratio` token, which an Image reserves a box of where it names no ratio of its own. */
const defaultAspectRatio = aspectRatios['16:9']!

type Props = Record<string, unknown>

const propsOf = (element: ReactElement): Props => (element.props ?? {}) as Props

/**
 * The name a component registers itself under. Comparing these instead of the component references keeps the reading
 * working when a story imports the library through a different specifier than this component does.
 */
const displayNameOf = (element: ReactElement): string | undefined => {
  const { type } = element

  if (typeof type === 'string') return type
  if (typeof type === 'function' || (typeof type === 'object' && type !== null)) {
    return (type as { displayName?: string }).displayName
  }

  return undefined
}

const eachElement = (node: ReactNode, visit: (element: ReactElement) => void): void => {
  Children.toArray(node).forEach((child) => {
    if (isValidElement(child)) visit(child)
  })
}

/** Reads a `span` or a `start` prop, which is a single number, one number per Grid variant, or ‘all’. */
const readColumns = (value: unknown, viewport: AnatomyViewport, columns?: number): number | undefined => {
  if (value === 'all') return columns ?? viewport.columns
  if (typeof value === 'number') return value
  if (typeof value === 'object' && value !== null) {
    const perVariant = value as Partial<Record<Breakpoint, number>>

    return perVariant[viewport.key]
  }

  return undefined
}

const perViewport = <T>(read: (viewport: AnatomyViewport) => T): Record<Breakpoint, T> =>
  Object.fromEntries(anatomyViewports().map((viewport) => [viewport.key, read(viewport)])) as Record<Breakpoint, T>

/** The aspect ratio an Image reserves a box of, which is the token's 16:9 where it names none of its own. */
const imageRatio = (element: ReactElement): number =>
  aspectRatios[String(propsOf(element)['aspectRatio'])] ?? defaultAspectRatio

/**
 * The aspect ratio of an Image that is the whole of what a Grid Cell holds, which gives the cell its shape.
 *
 * A cell that holds an image among other content – an article body with one halfway down it – is as tall as that
 * content, which nothing in the story says, so it keeps the height its label gives it.
 */
const readCellRatio = (children: ReactNode): number | undefined => {
  const [only, ...rest] = Children.toArray(children)

  if (rest.length > 0 || !isValidElement(only) || displayNameOf(only) !== 'Image') return undefined

  return imageRatio(only)
}

/** The space tokens of the margin utilities, longest first so that `xs` is not read as an `s`. */
const spaceAfterPattern = /(?:^|\s)ams-mb-(2xl|xl|xs|s|m|l)(?:\s|$)/

/**
 * The space the content of a Cell puts below itself with an `ams-mb-*` utility.
 *
 * A Grid that gives up its row gap leaves the spacing to that margin, so a drawing that ignored it would show a
 * heading sitting against the section it introduces. The utility goes on the content rather than on the Cell,
 * which only ever takes the props of the Grid, so this reads the last thing the Cell holds: a grid item opens an
 * independent formatting context, so the margin of that last child adds to the height of the Cell rather than
 * collapsing through it.
 */
const readSpaceAfter = (children: ReactNode): SpaceToken | undefined => {
  const last = Children.toArray(children).filter(isValidElement).at(-1)
  const className = last ? propsOf(last)['className'] : undefined

  return typeof className === 'string' ? (spaceAfterPattern.exec(className)?.[1] as SpaceToken | undefined) : undefined
}

/**
 * Reads a Grid Cell or a Grid Subgrid. Both take the same placement props.
 *
 * A cell inside a Subgrid is placed on the columns of that Subgrid, which are the columns of the Grid it covers.
 * Its own columns are numbered from one again, so a span of ‘all’ is the span of the Subgrid rather than of the Grid.
 */
const readCell = (element: ReactElement, columns?: Record<Breakpoint, number>): AnatomyBlock => {
  const { appearance, children, gapVertical, rowSpan, span, start } = propsOf(element)
  const available = (viewport: AnatomyViewport) => columns?.[viewport.key] ?? viewport.columns

  return {
    appearance: appearance as string | undefined,
    aspectRatio: readCellRatio(children as ReactNode),
    bleed: false,
    gapVertical: gapVertical as Gap | undefined,
    height: perViewport(() => defaultBlockHeight),
    label: '',
    rowSpan: perViewport((viewport) => readColumns(rowSpan, viewport)),
    spaceAfter: readSpaceAfter(children as ReactNode),
    // A cell without a `span` spans a single column, as `grid-column-end: auto` does.
    span: perViewport((viewport) => readColumns(span, viewport, available(viewport)) ?? 1),
    start: perViewport((viewport) => readColumns(start, viewport, available(viewport))),
  }
}

/**
 * Collects the Grid Cells of a Grid. They can sit behind a fragment or a map, so this looks past anything else.
 * A Grid Subgrid is a block of its own that carries the cells inside it, because those sit on its columns.
 */
const readCells = (
  node: ReactNode,
  blocks: AnatomyBlock[] = [],
  columns?: Record<Breakpoint, number>,
): AnatomyBlock[] => {
  eachElement(node, (element) => {
    const name = displayNameOf(element)

    if (name === 'Grid.Cell') {
      blocks.push(readCell(element, columns))
    } else if (name === 'Grid.Subgrid') {
      const subgrid = readCell(element, columns)

      blocks.push({ ...subgrid, blocks: readCells(propsOf(element)['children'] as ReactNode, [], subgrid.span) })
    } else {
      readCells(propsOf(element)['children'] as ReactNode, blocks, columns)
    }
  })

  return blocks
}

const readGrid = (element: ReactElement): AnatomySection => {
  const { children, gapVertical, paddingBottom, paddingTop, paddingVertical } = propsOf(element)

  return {
    blocks: readCells(children as ReactNode),
    gapVertical: gapVertical as Gap | undefined,
    paddingBottom: (paddingVertical ?? paddingBottom) as Padding | undefined,
    paddingTop: (paddingVertical ?? paddingTop) as Padding | undefined,
  }
}

/** A Spotlight is a coloured band around a Grid; that Grid carries the padding of the section. */
const findGrid = (node: ReactNode): ReactElement | undefined => {
  let found: ReactElement | undefined

  eachElement(node, (element) => {
    if (found) return
    if (displayNameOf(element) === 'Grid') {
      found = element
    } else {
      found = findGrid(propsOf(element)['children'] as ReactNode)
    }
  })

  return found
}

/** An Image is a block of its own: it has no Grid, and runs to the edges of the page. */
const readImage = (element: ReactElement): AnatomyBlock => ({
  aspectRatio: imageRatio(element),
  bleed: true,
  height: perViewport(() => defaultBlockHeight),
  label: '',
  rowSpan: perViewport(() => undefined),
  span: perViewport((viewport) => viewport.columns),
  start: perViewport(() => 1),
})

/**
 * An Overlap lays its children over one another: an Image that runs to the edges of the page, and a Grid whose cells
 * sit on top of it. It takes no vertical space of its own.
 */
const readOverlap = (element: ReactElement): AnatomySection => {
  const blocks: AnatomyBlock[] = []

  eachElement(propsOf(element)['children'] as ReactNode, (child) => {
    if (displayNameOf(child) === 'Image') {
      blocks.push(readImage(child))
    } else {
      readCells(propsOf(child)['children'] as ReactNode, blocks)
    }
  })

  return { blocks, overlap: true }
}

const readSections = (node: ReactNode, sections: AnatomySection[] = []): AnatomySection[] => {
  eachElement(node, (element) => {
    const name = displayNameOf(element)
    const { children } = propsOf(element)

    if (name === 'Grid') {
      sections.push(readGrid(element))
    } else if (name === 'Spotlight') {
      const grid = findGrid(children as ReactNode)

      if (grid) sections.push({ ...readGrid(grid), spotlight: true })
    } else if (name === 'Overlap') {
      sections.push(readOverlap(element))
    } else if (name === 'Image') {
      sections.push({ blocks: [readImage(element)] })
    } else {
      // Anything else is a wrapper: a fragment, the `main` element, a decorator. Its sections are the page’s.
      readSections(children as ReactNode, sections)
    }
  })

  return sections
}

const labelText = (label: AnatomyLabel): string => (typeof label === 'string' ? label : label.label)

const labelHeight = (label: AnatomyLabel): Record<Breakpoint, number> | undefined => {
  const height = typeof label === 'string' ? undefined : label.height

  if (height === undefined) return undefined

  return typeof height === 'string'
    ? perViewport(() => blockHeights[height])
    : perViewport((viewport) => blockHeights[height[viewport.key]])
}

export type StoryModule = {
  readonly default: Meta
} & Record<string, unknown>

/**
 * Renders a page template once, in a throwaway pass, so its element tree can be read.
 *
 * Some templates render from their meta and others from the story itself, and both may declare arguments. The story
 * wins over the meta for each, as it does in Storybook.
 *
 * The pass goes through the server renderer rather than a plain call, because a template may render from state. The
 * server renderer runs those hooks but skips every effect, so a template that starts a timer to walk through its
 * loading states does not start one here. Nothing is mounted and the markup is thrown away.
 */
export const readStoryTree = (of: StoryModule, name: string): ReactNode => {
  // A story is an object carrying a render, or, in the older format Storybook still accepts, that function itself.
  const story = of[name] as (Partial<StoryFn> & Partial<StoryObj>) | undefined
  const render = typeof story === 'function' ? story : (story?.render ?? of.default.render)

  if (!render) return null

  let tree: ReactNode = null

  renderToStaticMarkup(
    createElement(() => {
      tree = render({ ...of.default.args, ...story?.args }, {} as never)

      return null
    }),
  )

  return tree
}

/** The number of blocks that hold content: a Subgrid holds cells instead, so it counts as the cells inside it. */
const countCells = (blocks: readonly AnatomyBlock[]): number =>
  blocks.reduce((total, block) => total + (block.blocks ? countCells(block.blocks) : 1), 0)

/** Reads the sections of a story and pairs them with the labels written for it. */
export const readPageAnatomy = (story: ReactNode, labels: AnatomyLabels): PageAnatomy => {
  const sections = readSections(story)
  const problems: string[] = []

  if (sections.length !== labels.length) {
    problems.push(`The story has ${sections.length} sections, and there are labels for ${labels.length}.`)
  }

  const labelled = sections.map((section, index) => {
    const sectionLabels = labels[index] ?? []
    const cells = countCells(section.blocks)

    if (index < labels.length && cells !== sectionLabels.length) {
      problems.push(`Section ${index + 1} has ${cells} cells, and there are labels for ${sectionLabels.length}.`)
    }

    // A Subgrid holds cells rather than content, so the names go to the blocks inside it.
    let taken = 0
    const name = (blocks: readonly AnatomyBlock[]): AnatomyBlock[] =>
      blocks.map((block) => {
        if (block.blocks) return { ...block, blocks: name(block.blocks) }

        const label = sectionLabels[taken]

        taken += 1

        if (label === undefined) return block

        const height = labelHeight(label)

        // A label that sets a height sets it for an Image too, which otherwise takes one from its aspect ratio.
        return {
          ...block,
          aspectRatio: height ? undefined : block.aspectRatio,
          height: height ?? block.height,
          label: labelText(label),
        }
      })

    return { ...section, blocks: name(section.blocks) }
  })

  return { problems, sections: labelled }
}

/**
 * The width of a Grid Cell that spans a number of columns, in pixels of the page it stands for.
 *
 * The columns divide the width the Grid runs across, less its inline padding on either side and a gap in between
 * each pair. A cell that covers several of them covers the gaps in between as well.
 */
export const cellWidth = (span: number, viewport: AnatomyViewport, mode?: AnatomyMode): number => {
  const gap = columnGapWidth(viewport.width, mode)
  const inside = viewport.contentWidth - 2 * space(viewport.paddingInline, viewport.width, mode)

  return ((inside - (viewport.columns - 1) * gap) / viewport.columns) * span + (span - 1) * gap
}

/**
 * The height an Image is drawn at, from the height its aspect ratio gives it over the width it runs across.
 *
 * Up to `imageHeightInFull` that is the height itself; past it, every further pixel adds a little less than the one
 * before, so the drawing approaches `tallestImageHeight` without ever reaching it. Any aspect ratio therefore
 * stays a band the eye can take in, and an image still grows taller as the page grows wider.
 */
export const imageHeight = (height: number): number => {
  if (height <= imageHeightInFull) return height

  const beyond = height - imageHeightInFull
  const room = tallestImageHeight - imageHeightInFull

  return imageHeightInFull + (room * beyond) / (beyond + room)
}

/**
 * The height of a block at a viewport, in pixels of the page it stands for.
 *
 * An Image takes its shape from the width it runs across: the whole of the content width where it bleeds past the
 * Grid, and the width of its own columns where it sits in a cell.
 */
export const blockHeight = (block: AnatomyBlock, viewport: AnatomyViewport, mode?: AnatomyMode): number =>
  block.aspectRatio
    ? imageHeight(
        block.aspectRatio * (block.bleed ? viewport.contentWidth : cellWidth(block.span[viewport.key], viewport, mode)),
      )
    : block.height[viewport.key]

/** Whether two Grid Cells are drawn alike at a viewport, and so read as a repeat of one another. */
const repeats = (block: AnatomyBlock, other: AnatomyBlock, viewport: AnatomyViewport, mode?: AnatomyMode): boolean =>
  !block.blocks &&
  !other.blocks &&
  !block.bleed &&
  !other.bleed &&
  block.label === other.label &&
  block.appearance === other.appearance &&
  block.span[viewport.key] === other.span[viewport.key] &&
  block.rowSpan[viewport.key] === other.rowSpan[viewport.key] &&
  blockHeight(block, viewport, mode) === blockHeight(other, viewport, mode)

/**
 * The number of cells of a run that lie beside one another on one row, counted from the column the run starts at.
 * A cell that names a start of its own begins a new row wherever that is not the column the row has reached.
 */
const cellsPerRow = (run: readonly AnatomyBlock[], columns: number, viewport: AnatomyViewport): number => {
  const span = run[0]!.span[viewport.key]
  let column = run[0]!.start[viewport.key] ?? 1
  let fitting = 0

  for (const block of run) {
    const start = block.start[viewport.key]

    if ((start !== undefined && start !== column) || column + span - 1 > columns) break

    fitting += 1
    column += span
  }

  return Math.max(1, fitting)
}

/**
 * The marker that stands in for the cells between the first row of a run and its last. It lies on the rows of that
 * run, so it covers what one of them covers: as many cells as fit beside one another, from the column they start at.
 */
const elidedBlock = (
  block: AnatomyBlock,
  elided: ElidedRows,
  columns: number,
  viewport: AnatomyViewport,
): AnatomyBlock => {
  const start = block.start[viewport.key] ?? 1
  const perRow = elided.perRow

  return {
    ...block,
    elided,
    height: { ...block.height, [viewport.key]: elidedBlockHeight },
    rowSpan: { ...block.rowSpan, [viewport.key]: undefined },
    span: { ...block.span, [viewport.key]: Math.min(perRow * block.span[viewport.key], columns - start + 1) },
  }
}

/**
 * Shortens every run of identical Grid Cells to its first row, a marker naming the cells in between, and its last
 * row. A page that lists eight top tasks stacks all eight on a phone and lays them out four to a row on a desktop,
 * so a run is elided at the Grid variants where it runs long and drawn in full at the ones where it does not.
 */
export const elideRepeats = (
  blocks: readonly AnatomyBlock[],
  viewport: AnatomyViewport,
  columns: number,
  mode?: AnatomyMode,
): readonly AnatomyBlock[] => {
  const drawn: AnatomyBlock[] = []
  let index = 0

  while (index < blocks.length) {
    const block = blocks[index]!

    // A Subgrid holds its own cells on its own columns, so a run inside it is measured against those.
    if (block.blocks) {
      drawn.push({ ...block, blocks: elideRepeats(block.blocks, viewport, block.span[viewport.key], mode) })
      index += 1
      continue
    }

    let end = index + 1

    while (end < blocks.length && repeats(block, blocks[end]!, viewport, mode)) end += 1

    const run = end - index
    const perRow = cellsPerRow(blocks.slice(index, end), columns, viewport)

    // The last row of a run holds what is left over, which is a full row only where the two divide evenly.
    const lastRow = ((run - 1) % perRow) + 1
    const rows = Math.ceil(run / perRow)

    if (rows < elidedFromRows) {
      drawn.push(...blocks.slice(index, end))
    } else {
      drawn.push(
        ...blocks.slice(index, index + perRow),
        elidedBlock(block, { perRow, rows: rows - 2 }, columns, viewport),
        ...blocks.slice(end - lastRow, end),
      )
    }

    index = end
  }

  return drawn
}

/**
 * The sections as they are drawn at one Grid variant. The blocks of an Overlap lie on one another rather than
 * following one another down the page, so nothing there is a repeat to elide.
 */
export const drawnSections = (
  sections: readonly AnatomySection[],
  viewport: AnatomyViewport,
  mode?: AnatomyMode,
): readonly AnatomySection[] =>
  sections.map((section) =>
    section.overlap ? section : { ...section, blocks: elideRepeats(section.blocks, viewport, viewport.columns, mode) },
  )

/**
 * What a marker says it stands in for. Where the cells lie one under the other it is a count of them, and where
 * they lie beside one another it names the rows and the cells on each: ‘3 × 2 more’ is three rows of two, which
 * ‘6 more’ would leave open to reading as six more rows of two.
 */
export const elidedLabel = ({ perRow, rows }: ElidedRows): string =>
  perRow === 1 ? `${rows} more` : `${rows} × ${perRow} more`

/** Whether a drawing shortens a run of repeated cells anywhere, which its legend then names. */
export const hasElidedBlocks = (blocks: readonly AnatomyBlock[]): boolean =>
  blocks.some((block) => (block.blocks ? hasElidedBlocks(block.blocks) : block.elided !== undefined))

/** The height of the logo, `ams.logo.block-size` against its `min-block-size` of 2.5rem. */
export const logoHeight = (viewportWidth: number, mode?: AnatomyMode): number =>
  Math.max(space('xl', viewportWidth, mode), 40)

/**
 * The height of the Page Header: the logo between two paddings, as `ams.menu.vi-wide.padding-block` derives it.
 * It is the one part of the page chrome the tokens can measure, so it is drawn rather than guessed.
 */
export const pageHeaderHeight = (viewportWidth: number, mode?: AnatomyMode): number =>
  logoHeight(viewportWidth, mode) + 2 * space('l', viewportWidth, mode)

/** The vertical space above a section, in pixels of the page it stands for. */
export const paddingHeight = (padding: Padding | undefined, viewportWidth: number, mode?: AnatomyMode): number =>
  padding ? space(paddingTokens[padding], viewportWidth, mode) : 0

/** The space between the rows of a Grid, in pixels of the page it stands for. */
export const rowGapHeight = (gap: Gap | undefined, viewportWidth: number, mode?: AnatomyMode): number => {
  const token = gap ? rowGapTokens[gap] : 'xl'

  return token ? space(token, viewportWidth, mode) : 0
}

/** The space between the columns of a Grid, in pixels of the page it stands for. */
export const columnGapWidth = (viewportWidth: number, mode?: AnatomyMode): number =>
  space(columnGapToken, viewportWidth, mode)

/** Turns a measure in pixels of the page into a share of the width its drawing runs across. */
export const toContainerWidth = (pixels: number, contentWidth: number): string =>
  `${((pixels / contentWidth) * 100).toFixed(4)}cqw`
