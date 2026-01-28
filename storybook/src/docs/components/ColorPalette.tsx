/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './color-palette.css'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const ColorPaletteRoot = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} className="ams-docs-color-palette" ref={ref}>
    {children}
  </div>
))

ColorPaletteRoot.displayName = 'ColorPalette'

type ColorPaletteSwatchProps = PropsWithChildren<{
  name: string
}>

const ColorPaletteSwatch = ({ children, name }: ColorPaletteSwatchProps) => (
  <div className={clsx('ams-docs-color-palette-swatch', `ams-docs-color-palette-swatch--${name}`)}>
    <span className="ams-docs-color-palette-name">{name}</span>
    {children}
  </div>
)

ColorPaletteSwatch.displayName = 'ColorPalette.Swatch'

type ColorPaletteTileProps = {
  color: string
  level: string
}

const ColorPaletteTile = ({ color, level }: ColorPaletteTileProps) =>
  color && (
    <div className={clsx('ams-docs-color-palette-tile', `ams-docs-color-palette-tile--${level}`)}>
      <span className="ams-docs-color-palette-level">{level}</span>
      <div className="ams-docs-color-palette-sample" style={{ backgroundColor: color }} title={color} />
    </div>
  )

ColorPaletteTile.displayName = 'ColorPalette.Tile'

export const ColorPalette = Object.assign(ColorPaletteRoot, {
  Swatch: ColorPaletteSwatch,
  Tile: ColorPaletteTile,
})
