/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
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

/** The space token behind each value of the Grid `gapVertical` prop. Its default is `x-large`. */
const rowGapTokens = { '2x-large': '2xl', large: 'l', none: undefined } as const

type Padding = keyof typeof paddingTokens
type Gap = keyof typeof rowGapTokens

/** The height a block takes when its label does not ask for another. */
const defaultBlockHeight = 80

export type AnatomyLabel =
  | string
  | {
      /**
       * The height of the block, in pixels of the page it stands for. Blocks are schematic: this is an impression.
       * Accepts a number, or one number per Grid variant where the content changes shape between them.
       */
      readonly height?: number | Record<Breakpoint, number>
      readonly label: string
    }

/** One label per Grid Cell, grouped per section, in the order they appear in the story. */
export type AnatomyLabels = ReadonlyArray<readonly AnatomyLabel[]>

export type AnatomyBlock = {
  /**
   * The `appearance` of the Grid Cell. In Compact Mode a cell has a background and a padding of its own, which the
   * transparent variant removes, so a transparent cell is drawn as bare page rather than as a block.
   */
  readonly appearance?: string
  /** The aspect ratio of an Image, as a height divided by a width. Takes precedence over the height. */
  readonly aspectRatio?: number
  /** Whether the block runs to the edges of the page, outside the inline padding of the Grid. */
  readonly bleed: boolean
  /** The height of the block, per Grid variant. */
  readonly height: Record<Breakpoint, number>
  readonly label: string
  /** The number of rows the block spans, per Grid variant. */
  readonly rowSpan: Record<Breakpoint, number | undefined>
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

/** The height a full-bleed block takes, as a fraction of the width of the page. */
const aspectRatios: Record<string, number> = {
  '1:1': 1,
  '16:5': 5 / 16,
  '16:9': 9 / 16,
  '3:4': 4 / 3,
  '4:3': 3 / 4,
  '9:16': 16 / 9,
}

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
const readColumns = (value: unknown, viewport: AnatomyViewport): number | undefined => {
  if (value === 'all') return viewport.columns
  if (typeof value === 'number') return value
  if (typeof value === 'object' && value !== null) {
    const perVariant = value as Partial<Record<Breakpoint, number>>

    return perVariant[viewport.key]
  }

  return undefined
}

const perViewport = <T>(read: (viewport: AnatomyViewport) => T): Record<Breakpoint, T> =>
  Object.fromEntries(anatomyViewports().map((viewport) => [viewport.key, read(viewport)])) as Record<Breakpoint, T>

const readCell = (element: ReactElement): AnatomyBlock => {
  const { appearance, rowSpan, span, start } = propsOf(element)

  return {
    appearance: appearance as string | undefined,
    bleed: false,
    height: perViewport(() => defaultBlockHeight),
    label: '',
    rowSpan: perViewport((viewport) => readColumns(rowSpan, viewport)),
    // A cell without a `span` spans a single column, as `grid-column-end: auto` does.
    span: perViewport((viewport) => readColumns(span, viewport) ?? 1),
    start: perViewport((viewport) => readColumns(start, viewport)),
  }
}

/** Collects the Grid Cells of a Grid. They can sit behind a fragment or a map, so this looks past anything else. */
const readCells = (node: ReactNode, blocks: AnatomyBlock[] = []): AnatomyBlock[] => {
  eachElement(node, (element) => {
    if (displayNameOf(element) === 'Grid.Cell') {
      blocks.push(readCell(element))
    } else {
      readCells(propsOf(element)['children'] as ReactNode, blocks)
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
  aspectRatio: aspectRatios[String(propsOf(element)['aspectRatio'])],
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

  return typeof height === 'number' ? perViewport(() => height) : height
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
  const story = of[name] as StoryObj | undefined
  const render = story?.render ?? of.default.render

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

/** Reads the sections of a story and pairs them with the labels written for it. */
export const readPageAnatomy = (story: ReactNode, labels: AnatomyLabels): PageAnatomy => {
  const sections = readSections(story)
  const problems: string[] = []

  if (sections.length !== labels.length) {
    problems.push(`The story has ${sections.length} sections, and there are labels for ${labels.length}.`)
  }

  const labelled = sections.map((section, index) => {
    const sectionLabels = labels[index] ?? []

    if (index < labels.length && section.blocks.length !== sectionLabels.length) {
      problems.push(
        `Section ${index + 1} has ${section.blocks.length} cells, and there are labels for ${sectionLabels.length}.`,
      )
    }

    return {
      ...section,
      blocks: section.blocks.map((block, blockIndex) => {
        const label = sectionLabels[blockIndex]

        if (label === undefined) return block

        return { ...block, height: labelHeight(label) ?? block.height, label: labelText(label) }
      }),
    }
  })

  return { problems, sections: labelled }
}

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
