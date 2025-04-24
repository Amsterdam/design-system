/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import './color-palette.css'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

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
  <div className={clsx('ams-docs-color-swatch', `ams-docs-color-swatch--${name}`)}>
    <span className="ams-docs-color-name">{name}</span>
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
    <div className={clsx('ams-docs-color-tile', `ams-docs-color-tile--${level}`)}>
      <span className="ams-docs-color-level">{level}</span>
      <div className="ams-docs-color-sample" style={{ backgroundColor: color }} title={color} />
    </div>
  )

ColorPaletteTile.displayName = 'ColorPalette.Tile'

export const ColorPalette = Object.assign(ColorPaletteRoot, {
  Swatch: ColorPaletteSwatch,
  Tile: ColorPaletteTile,
})
