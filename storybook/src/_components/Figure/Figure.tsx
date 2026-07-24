/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { PropsWithChildren } from 'react'

import './figure.css'

/** Displays a set of figures in a wrapping, top-aligned row. */
export const FigureSet = ({ children }: PropsWithChildren) => <div className="_ams-figure-set">{children}</div>

type FigureProps = PropsWithChildren<{
  /** The width to display the figure at. */
  readonly width: number | string
}>

/** Displays an image at a given width, keeping its intrinsic ratio. */
export const Figure = ({ children, width }: FigureProps) => (
  <figure className="_ams-figure" style={{ inlineSize: width }}>
    {children}
  </figure>
)
