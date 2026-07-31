/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties, HTMLAttributes } from 'react'

import { clsx } from 'clsx'

import type {
  AnatomyBlock,
  AnatomyLabels,
  AnatomyMode,
  AnatomyPage,
  AnatomySection,
  AnatomyViewport,
  StoryModule,
} from './anatomy'

import {
  anatomyViewports,
  columnGapWidth,
  logoHeight,
  paddingHeight,
  pageHeaderHeight,
  readPageAnatomy,
  readStoryTree,
  rowGapHeight,
  space,
  toContainerWidth,
} from './anatomy'

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

const blockHeight = (block: AnatomyBlock, viewport: AnatomyViewport): number =>
  block.aspectRatio ? block.aspectRatio * viewport.contentWidth : block.height[viewport.key]

/** The strip of a block that the blocks lying on it leave in the open, above them. */
const stripAboveOverlay = (section: AnatomySection, block: AnatomyBlock, viewport: AnatomyViewport): number => {
  const covering = Math.max(
    ...section.blocks.filter((other) => !other.bleed).map((other) => other.height[viewport.key]),
    0,
  )

  return Math.max(0, (blockHeight(block, viewport) - covering) / 2)
}

const Blocks = ({
  mode,
  section,
  viewport,
}: {
  readonly mode: AnatomyMode
  readonly section: AnatomySection
  readonly viewport: AnatomyViewport
}) => {
  const padding = space(viewport.paddingInline, viewport.width, mode)

  return (
    <div
      className="_ams-page-anatomy__grid"
      style={{
        columnGap: toContainerWidth(columnGapWidth(viewport.width, mode), viewport.contentWidth),
        gridTemplateColumns: `repeat(${viewport.columns}, minmax(0, 1fr))`,
        paddingInline: toContainerWidth(padding, viewport.contentWidth),
        rowGap: toContainerWidth(rowGapHeight(section.gapVertical, viewport.width, mode), viewport.contentWidth),
      }}
    >
      {section.blocks.map((block, index) => (
        <Block block={block} key={`${block.label}-${index}`} padding={padding} section={section} viewport={viewport} />
      ))}
    </div>
  )
}

const Block = ({
  block,
  padding,
  section,
  viewport,
}: {
  readonly block: AnatomyBlock
  readonly padding: number
  readonly section: AnatomySection
  readonly viewport: AnatomyViewport
}) => (
  <div
    className={clsx(
      block.blocks ? '_ams-page-anatomy__subgrid' : '_ams-page-anatomy__block',
      block.bleed && '_ams-page-anatomy__block--bleed',
      block.appearance === 'transparent' && '_ams-page-anatomy__block--transparent',
    )}
    style={{
      // A block that lies on top of another is centred on it, as the Grid inside an Overlap is.
      alignSelf: section.overlap && !block.bleed ? 'center' : undefined,
      // A Subgrid takes its height from the cells inside it, as the real one does.
      blockSize: block.blocks ? undefined : toContainerWidth(blockHeight(block, viewport), viewport.contentWidth),
      gridColumn: block.bleed ? '1 / -1' : gridColumn(block.start[viewport.key], block.span[viewport.key]),
      // The blocks of an Overlap share one row; a bleed block reaches past the inline padding of the Grid.
      gridRow: section.overlap ? 1 : gridRow(block.rowSpan[viewport.key]),
      marginInline: block.bleed ? toContainerWidth(-padding, viewport.contentWidth) : undefined,
      paddingBlockStart:
        section.overlap && block.bleed
          ? // Halfway down the strip left in the open, less half a line so the label centres on that point.
            `calc(${toContainerWidth(stripAboveOverlay(section, block, viewport) / 2, viewport.contentWidth)} - 0.375rem)`
          : undefined,
    }}
  >
    {block.blocks ? (
      block.blocks.map((child, childIndex) => (
        <Block
          block={child}
          key={`${child.label}-${childIndex}`}
          padding={padding}
          section={section}
          viewport={viewport}
        />
      ))
    ) : (
      <span className="_ams-page-anatomy__label">{block.label}</span>
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
  viewport,
}: {
  readonly mode: AnatomyMode
  readonly sections: readonly AnatomySection[]
  readonly viewport: AnatomyViewport
}) => {
  // The narrowest drawing has no room to name the amount of space; there, the colour stands on its own.
  const showSpaceLabels = viewport.key !== 'narrow'

  return (
    <li
      className="_ams-page-anatomy__viewport"
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
  const { problems, sections } = readPageAnatomy(readStoryTree(of, story), labels)
  const viewports = anatomyViewports({ menu, mode })
  const widest = viewports[viewports.length - 1]?.width ?? 0

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
        } as CSSProperties
      }
    >
      {problems.length > 0 && (
        <p className="_ams-page-anatomy__problems" role="status">
          The labels no longer match the story. {problems.join(' ')}
        </p>
      )}
      <ol className="_ams-page-anatomy__viewports">
        {viewports.map((viewport) => (
          <Drawing key={viewport.key} mode={mode} sections={sections} viewport={viewport} />
        ))}
      </ol>
      <ul className="_ams-page-anatomy__legend">
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--columns">Grid columns</li>
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--space">Vertical space</li>
        <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--block">Grid Cell</li>
        {sections.some((section) => section.spotlight) && (
          <li className="_ams-page-anatomy__legend-item _ams-page-anatomy__legend-item--spotlight">Spotlight</li>
        )}
      </ul>
    </div>
  )
}
