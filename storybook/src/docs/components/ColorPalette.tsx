/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './color-palette.css'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

type ColorPaletteProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * Compound component for displaying a colour palette in documentation.
 * Use `ColorPalette.Swatch` to group related tones and `ColorPalette.Tile` to show an individual colour.
 *
 * @example
 * <ColorPalette>
 *   <ColorPalette.Swatch name="azure">
 *     <ColorPalette.Tile color="#009de6" level="100" />
 *   </ColorPalette.Swatch>
 * </ColorPalette>
 */
const ColorPaletteRoot = forwardRef(
  ({ children, ...restProps }: ColorPaletteProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className="_ams-color-palette" ref={ref}>
      {children}
    </div>
  ),
)

ColorPaletteRoot.displayName = 'ColorPalette'

type ColorPaletteSwatchProps = PropsWithChildren<{
  /** The colour name (e.g. `'azure'`). Used as a display label and as a BEM modifier on the wrapper element. */
  name: string
}>

/** Groups the tiles for a single named colour, showing the colour name as a label. */
const ColorPaletteSwatch = ({ children, name }: ColorPaletteSwatchProps) => (
  <div className={clsx('_ams-color-palette-swatch', `_ams-color-palette-swatch--${name}`)}>
    <span className="_ams-color-palette-name">{name}</span>
    {children}
  </div>
)

ColorPaletteSwatch.displayName = 'ColorPalette.Swatch'

type ColorPaletteTileProps = {
  /** The hex colour value to display (e.g. `'#009de6'`). Renders nothing when falsy. */
  color: string
  /** The tone level label (e.g. `'100'`, `'80'`). Shown as text and applied as a BEM modifier. */
  level: string
}

/** Renders a single colour tile with a labelled swatch and a tooltip showing the hex value. */
const ColorPaletteTile = ({ color, level }: ColorPaletteTileProps) =>
  color && (
    <div className={clsx('_ams-color-palette-tile', `_ams-color-palette-tile--${level}`)}>
      <span className="_ams-color-palette-level">{level}</span>
      <div className="_ams-color-palette-sample" style={{ backgroundColor: color }} title={color} />
    </div>
  )

ColorPaletteTile.displayName = 'ColorPalette.Tile'

export const ColorPalette = Object.assign(ColorPaletteRoot, {
  Swatch: ColorPaletteSwatch,
  Tile: ColorPaletteTile,
})
