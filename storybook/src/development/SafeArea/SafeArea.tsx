/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { CSSProperties } from 'react'

import { Alert, DescriptionList, Grid, Heading, Paragraph } from '@amsterdam/design-system-react'
import { useEffect, useRef, useState } from 'react'

/* The insets are only readable through a property that resolves them: `getPropertyValue` on a custom
   property returns the unresolved `env(…)` token stream, since the property is not registered.
   The four physical sides are what a tester needs to see, so this probe deliberately isn’t logical. */
const probeStyle: CSSProperties = {
  blockSize: 0,
  inlineSize: 0,
  paddingBottom: 'env(safe-area-inset-bottom, 0px)',
  paddingLeft: 'env(safe-area-inset-left, 0px)',
  paddingRight: 'env(safe-area-inset-right, 0px)',
  paddingTop: 'env(safe-area-inset-top, 0px)',
  visibility: 'hidden',
}

type Readout = {
  bottom: string
  gridInlineEnd: string
  gridInlineStart: string
  isTopLevel: boolean
  left: string
  right: string
  top: string
  viewport: string
  writingDirection: string
}

const read = (probe: HTMLElement, grid: HTMLElement): Readout => {
  const insets = getComputedStyle(probe)
  const gridStyle = getComputedStyle(grid)

  return {
    bottom: insets.paddingBottom,
    gridInlineEnd: gridStyle.paddingInlineEnd,
    gridInlineStart: gridStyle.paddingInlineStart,
    isTopLevel: window.top === window.self,
    left: insets.paddingLeft,
    right: insets.paddingRight,
    top: insets.paddingTop,
    viewport: document.querySelector('meta[name="viewport"]')?.getAttribute('content') ?? 'none',
    writingDirection: gridStyle.direction,
  }
}

/**
 * Reads the safe area insets back on screen, to make on-device testing self-evident.
 * A development aid, not a component: see the story for what the numbers mean.
 */
export const SafeArea = () => {
  const probeRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLElement>(null)
  const [readout, setReadout] = useState<Readout>()

  useEffect(() => {
    let frame = 0

    // Measure in the next frame rather than in the effect body: the styles have to be resolved
    // against the layout this render produced, and a synchronous read would render twice.
    const update = () => {
      frame = requestAnimationFrame(() => {
        if (probeRef.current && gridRef.current) {
          setReadout(read(probeRef.current, gridRef.current))
        }
      })
    }

    update()

    // The insets change with the orientation, and `resize` is the event both browsers fire for it.
    window.addEventListener('resize', update)

    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <Grid paddingVertical="large" ref={gridRef}>
      <Grid.Cell span="all">
        {/* Inside a cell, so this zero-size probe doesn’t claim a grid row of its own. */}
        <div ref={probeRef} style={probeStyle} />
        <Heading level={1} size="level-3">
          Safe area insets
        </Heading>
      </Grid.Cell>
      <Grid.Cell span="all">
        {readout?.isTopLevel === false ? (
          <Alert heading="The insets read 0px here" headingLevel={2} severity="warning">
            <Paragraph>
              This story runs in a nested iframe, where <code>env(safe-area-inset-*)</code> always resolves to{' '}
              <code>0px</code>. Open <code>iframe.html</code> directly to read the values the device reports.
            </Paragraph>
          </Alert>
        ) : (
          <Paragraph>
            This story runs in a top-level browsing context, so the insets below are the ones the device reports.
          </Paragraph>
        )}
      </Grid.Cell>
      <Grid.Cell span="all">
        <DescriptionList>
          <DescriptionList.Term>Top</DescriptionList.Term>
          <DescriptionList.Description>{readout?.top ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Right</DescriptionList.Term>
          <DescriptionList.Description>{readout?.right ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Bottom</DescriptionList.Term>
          <DescriptionList.Description>{readout?.bottom ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Left</DescriptionList.Term>
          <DescriptionList.Description>{readout?.left ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Grid padding inline start</DescriptionList.Term>
          <DescriptionList.Description>{readout?.gridInlineStart ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Grid padding inline end</DescriptionList.Term>
          <DescriptionList.Description>{readout?.gridInlineEnd ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Writing direction</DescriptionList.Term>
          <DescriptionList.Description>{readout?.writingDirection ?? '–'}</DescriptionList.Description>
          <DescriptionList.Term>Viewport meta</DescriptionList.Term>
          <DescriptionList.Description>{readout?.viewport ?? '–'}</DescriptionList.Description>
        </DescriptionList>
      </Grid.Cell>
    </Grid>
  )
}
