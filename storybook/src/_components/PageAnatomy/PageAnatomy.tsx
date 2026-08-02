/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import { clsx } from 'clsx'
import { useId, useState } from 'react'
import { flushSync } from 'react-dom'

import type {
  AnatomyBlock,
  AnatomyLabels,
  AnatomyMode,
  AnatomyPage,
  AnatomySection,
  AnatomyViewport,
  Breakpoint,
  StoryModule,
} from './model'

import {
  anatomyViewports,
  blockHeight,
  columnGapWidth,
  drawnSections,
  elidedLabel,
  hasElidedBlocks,
  logoHeight,
  paddingHeight,
  pageHeaderHeight,
  readPageAnatomy,
  readStoryTree,
  rowGapHeight,
  space,
  toContainerWidth,
} from './model'

import './page-anatomy.css'

/** The emblem of the Amsterdam logo, in the units of the logo’s own viewBox: three crosses over its full height. */
const logo = { crossGap: 2.365, crossSize: 11.758, height: 40 }

export type PageAnatomyProps = {
  /**
   * One label per Grid Cell, grouped per section, in the order they appear in the story.
   * A label is either a string, or an object that also sets the height of the block.
   */
  readonly labels: AnatomyLabels
  /** The module of the story file to draw, as imported in the docs page. */
  readonly of: StoryModule
  /**
   * The story to draw.
   * @default Default
   */
  readonly story?: string
} & AnatomyPage &
  Readonly<Omit<HTMLAttributes<HTMLDivElement>, 'children'>>

const gridColumn = (start: number | undefined, span: number): string =>
  start ? `${start} / span ${span}` : `span ${span}`

const gridRow = (rowSpan: number | undefined): string | undefined => (rowSpan ? `span ${rowSpan}` : undefined)

/**
 * Whether the cells of a section sit straight against what is above them, with no space in between: the cells of the
 * section before it, or the Page Header. Both would otherwise draw a second line where they meet.
 */
const touchesAbove = (sections: readonly AnatomySection[], index: number): boolean =>
  !sections[index]?.paddingTop && (index === 0 || !sections[index - 1]?.paddingBottom)

/** The height a block covers, which for a Subgrid is the tallest of the cells that sit in its rows. */
const coveringHeight = (block: AnatomyBlock, viewport: AnatomyViewport, mode: AnatomyMode): number =>
  block.blocks
    ? Math.max(0, ...block.blocks.map((child) => coveringHeight(child, viewport, mode)))
    : blockHeight(block, viewport, mode)

/** The strip of a block that the blocks lying on it leave in the open, above them. */
const stripAboveOverlay = (
  section: AnatomySection,
  block: AnatomyBlock,
  viewport: AnatomyViewport,
  mode: AnatomyMode,
): number => {
  const covering = Math.max(
    0,
    ...section.blocks.filter((other) => !other.bleed).map((other) => coveringHeight(other, viewport, mode)),
  )

  return Math.max(0, (blockHeight(block, viewport, mode) - covering) / 2)
}

const Blocks = ({
  mode,
  section,
  viewport,
}: {
  readonly mode: AnatomyMode
  readonly section: AnatomySection
  readonly viewport: AnatomyViewport
}) => (
  <div
    className="_ams-page-anatomy__grid"
    style={{
      columnGap: toContainerWidth(columnGapWidth(viewport.width, mode), viewport.contentWidth),
      gridTemplateColumns: `repeat(${viewport.columns}, minmax(0, 1fr))`,
      paddingInline: toContainerWidth(space(viewport.paddingInline, viewport.width, mode), viewport.contentWidth),
      rowGap: toContainerWidth(rowGapHeight(section.gapVertical, viewport.width, mode), viewport.contentWidth),
    }}
  >
    {section.blocks.map((block, index) => (
      <Block block={block} key={`${block.label}-${index}`} mode={mode} section={section} viewport={viewport} />
    ))}
  </div>
)

const Block = ({
  block,
  mode,
  section,
  viewport,
}: {
  readonly block: AnatomyBlock
  readonly mode: AnatomyMode
  readonly section: AnatomySection
  readonly viewport: AnatomyViewport
}) => (
  <div
    className={clsx(
      block.blocks ? '_ams-page-anatomy__subgrid' : '_ams-page-anatomy__block',
      block.bleed && '_ams-page-anatomy__block--bleed',
      block.appearance === 'transparent' && '_ams-page-anatomy__block--transparent',
      block.elided !== undefined && '_ams-page-anatomy__block--repeat',
    )}
    style={{
      // A block that lies on top of another is centred on it, as the Grid inside an Overlap is.
      alignSelf: section.overlap && !block.bleed ? 'center' : undefined,
      // A Subgrid takes its height from the cells inside it, as the real one does.
      blockSize: block.blocks ? undefined : toContainerWidth(blockHeight(block, viewport, mode), viewport.contentWidth),
      gridColumn: block.bleed ? '1 / -1' : gridColumn(block.start[viewport.key], block.span[viewport.key]),
      // The blocks of an Overlap share one row; a bleed block reaches past the inline padding of the Grid.
      gridRow: section.overlap ? 1 : gridRow(block.rowSpan[viewport.key]),
      marginInline: block.bleed
        ? toContainerWidth(-space(viewport.paddingInline, viewport.width, mode), viewport.contentWidth)
        : undefined,
      paddingBlockStart:
        section.overlap && block.bleed
          ? // Halfway down the strip left in the open, less half a line so the label centres on that point.
            `calc(${toContainerWidth(stripAboveOverlay(section, block, viewport, mode) / 2, viewport.contentWidth)} - 0.375rem)`
          : undefined,
    }}
  >
    {block.blocks ? (
      block.blocks.map((child, childIndex) => (
        <Block block={child} key={`${child.label}-${childIndex}`} mode={mode} section={section} viewport={viewport} />
      ))
    ) : (
      <span className="_ams-page-anatomy__label">
        {block.elided === undefined ? block.label : elidedLabel(block.elided)}
      </span>
    )}
  </div>
)

/** The three crosses, at the inline start of the Page Header and a padding down from its top, where the logo sits. */
const Logo = ({ mode, viewport }: { readonly mode: AnatomyMode; readonly viewport: AnatomyViewport }) => {
  // A measure of the logo, from the units of its viewBox to a share of the width of the drawing.
  const unit = (units: number) =>
    toContainerWidth((units / logo.height) * logoHeight(viewport.width, mode), viewport.contentWidth)

  return (
    <div
      aria-hidden="true"
      className="_ams-page-anatomy__logo"
      style={{
        blockSize: unit(logo.height),
        gap: unit(logo.crossGap),
        insetBlockStart: toContainerWidth(space('l', viewport.width, mode), viewport.contentWidth),
        insetInlineStart: toContainerWidth(space(viewport.paddingInline, viewport.width, mode), viewport.contentWidth),
      }}
    >
      {[0, 1, 2].map((index) => (
        <span key={index} style={{ blockSize: unit(logo.crossSize), inlineSize: unit(logo.crossSize) }} />
      ))}
    </div>
  )
}

const Space = ({
  mode,
  padding,
  showLabel,
  viewport,
}: {
  readonly mode: AnatomyMode
  readonly padding: AnatomySection['paddingBottom']
  readonly showLabel: boolean
  readonly viewport: AnatomyViewport
}) =>
  padding ? (
    <div
      className="_ams-page-anatomy__space"
      style={{ blockSize: toContainerWidth(paddingHeight(padding, viewport.width, mode), viewport.contentWidth) }}
    >
      {showLabel && <span className="_ams-page-anatomy__space-label">{padding}</span>}
    </div>
  ) : null

const Drawing = ({
  mode,
  sections,
  selected,
  viewport,
}: {
  readonly mode: AnatomyMode
  readonly sections: readonly AnatomySection[]
  readonly selected: boolean
  readonly viewport: AnatomyViewport
}) => {
  // The narrowest drawing has no room to name the amount of space; there, the colour stands on its own.
  const showSpaceLabels = viewport.key !== 'narrow'

  return (
    <li
      className={clsx('_ams-page-anatomy__viewport', selected && '_ams-page-anatomy__viewport--selected')}
      style={{ '--_ams-page-anatomy-width': viewport.width } as CSSProperties}
    >
      <p className="_ams-page-anatomy__caption">
        {viewport.label}{' '}
        <span>
          {viewport.width} px, {viewport.columns} columns
        </span>
      </p>
      <div
        className="_ams-page-anatomy__page"
        style={{
          // The Menu takes a column of the Page beside the header, the body and the footer.
          gridTemplateColumns: viewport.menuWidth
            ? `${((viewport.menuWidth / viewport.width) * 100).toFixed(4)}% minmax(0, 1fr)`
            : undefined,
        }}
      >
        {viewport.menuWidth > 0 && (
          <div className="_ams-page-anatomy__menu">
            <span className="_ams-page-anatomy__label">Menu</span>
          </div>
        )}
        <div
          className="_ams-page-anatomy__body"
          style={
            {
              '--_ams-page-anatomy-paper': toContainerWidth(space('m', viewport.width, mode), viewport.contentWidth),
            } as CSSProperties
          }
        >
          <div
            className="_ams-page-anatomy__header"
            style={{ blockSize: toContainerWidth(pageHeaderHeight(viewport.width, mode), viewport.contentWidth) }}
          >
            <Logo mode={mode} viewport={viewport} />
            <span className="_ams-page-anatomy__label">Page Header</span>
          </div>
          <div className="_ams-page-anatomy__sections">
            <div
              aria-hidden="true"
              className="_ams-page-anatomy__columns"
              style={{
                columnGap: toContainerWidth(columnGapWidth(viewport.width, mode), viewport.contentWidth),
                gridTemplateColumns: `repeat(${viewport.columns}, minmax(0, 1fr))`,
                paddingInline: toContainerWidth(
                  space(viewport.paddingInline, viewport.width, mode),
                  viewport.contentWidth,
                ),
              }}
            >
              {Array.from({ length: viewport.columns }, (_, index) => (
                <div key={index} />
              ))}
            </div>
            {sections.map((section, index) => (
              <div
                className={clsx(
                  '_ams-page-anatomy__section',
                  section.overlap && '_ams-page-anatomy__section--overlap',
                  section.spotlight && '_ams-page-anatomy__section--spotlight',
                  touchesAbove(sections, index) && '_ams-page-anatomy__section--touching',
                )}
                key={index}
              >
                <Space mode={mode} padding={section.paddingTop} showLabel={showSpaceLabels} viewport={viewport} />
                <Blocks mode={mode} section={section} viewport={viewport} />
                <Space mode={mode} padding={section.paddingBottom} showLabel={showSpaceLabels} viewport={viewport} />
              </div>
            ))}
          </div>
          <div
            className="_ams-page-anatomy__footer"
            // No token measures the Page Footer, and it is far taller than this in reality. It is drawn to the height
            // of the Page Header so that the two read as one frame around the sections.
            style={{ blockSize: toContainerWidth(pageHeaderHeight(viewport.width, mode), viewport.contentWidth) }}
          >
            <span className="_ams-page-anatomy__label">Page Footer</span>
          </div>
        </div>
      </div>
    </li>
  )
}

/**
 * Draws the anatomy of a page template: the Page Header, the sections in between, and the Page Footer, at the three
 * Grid variants side by side. The geometry comes from the story, so the drawing follows the page it documents.
 *
 * Where there is no width for three drawings beside one another, they would take three pages of scrolling one under
 * the other, so one is drawn at a time and the buttons above choose which. Switching between them at one width is
 * also the closest look at what the Grid does that the drawing gives: the frame stays put while the page inside it
 * lays itself out again.
 */
export const PageAnatomy = ({
  className,
  labels,
  menu = false,
  mode = 'spacious',
  of,
  story = 'Default',
  style,
  ...restProps
}: PageAnatomyProps) => {
  const [selected, setSelected] = useState<Breakpoint>('narrow')
  // A view transition names the elements it carries across, and a documentation page may hold more than one drawing.
  const transitionName = `ams-page-anatomy-${useId().replace(/[^a-z\d]/gi, '')}`
  const { problems, sections } = readPageAnatomy(readStoryTree(of, story), labels)
  const viewports = anatomyViewports({ menu, mode })
  const widest = viewports[viewports.length - 1]?.width ?? 0
  const drawings = viewports.map((viewport) => ({ drawn: drawnSections(sections, viewport, mode), viewport }))

  /**
   * Swaps one drawing for another. The two are of different heights, so a view transition carries the page across
   * rather than cutting to it. React would batch the state change past the transition, which `flushSync` prevents.
   */
  const select = (key: Breakpoint) => {
    if (key === selected) return

    if ('startViewTransition' in document && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.startViewTransition(() => flushSync(() => setSelected(key)))
    } else {
      setSelected(key)
    }
  }

  return (
    <div
      {...restProps}
      className={clsx('_ams-page-anatomy', 'sb-unstyled', className)}
      style={
        {
          ...style,

          // The drawings share one scale, so the row that holds the two narrower ones is padded out to the width
          // of the widest with an empty column.
          '--_ams-page-anatomy-row': viewports
            .map(
              (viewport, index) =>
                `minmax(0, ${index < 2 ? viewport.width : widest - viewports[0]!.width - viewports[1]!.width}fr)`,
            )
            .join(' '),
          '--_ams-page-anatomy-single-row': viewports.map((viewport) => `minmax(0, ${viewport.width}fr)`).join(' '),
          '--_ams-page-anatomy-transition': transitionName,
        } as CSSProperties
      }
    >
      {problems.length > 0 && (
        <p className="_ams-page-anatomy__problems" role="status">
          The labels no longer match the story. {problems.join(' ')}
        </p>
      )}
      <div aria-label="Grid variant" className="_ams-page-anatomy__switcher" role="group">
        {viewports.map((viewport) => (
          <button
            aria-pressed={viewport.key === selected}
            className="_ams-page-anatomy__switch"
            key={viewport.key}
            onClick={() => select(viewport.key)}
            type="button"
          >
            {viewport.label}
          </button>
        ))}
      </div>
      <ol className="_ams-page-anatomy__viewports">
        {drawings.map(({ drawn, viewport }) => (
          <Drawing
            key={viewport.key}
            mode={mode}
            sections={drawn}
            selected={viewport.key === selected}
            viewport={viewport}
          />
        ))}
      </ol>
      <ul className="_ams-page-anatomy__legend">
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--columns">Grid columns</li>
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--space">Vertical space</li>
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--block">Grid Cell</li>
        {drawings.some(({ drawn }) => drawn.some((section) => hasElidedBlocks(section.blocks))) && (
          <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--repeat">More of the same</li>
        )}
        {sections.some((section) => section.spotlight) && (
          <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--spotlight">Spotlight</li>
        )}
      </ul>
    </div>
  )
}
