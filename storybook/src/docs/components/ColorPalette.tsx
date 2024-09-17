import './color-palette.css'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const ColorPaletteRoot = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="ams-storybook-color-palette">
    {children}
  </div>
))

ColorPaletteRoot.displayName = 'ColorPalette'

const ColorPaletteSection = ({ children }: DivProps) => (
  <div className="ams-storybook-color-palette__section">{children}</div>
)

ColorPaletteSection.displayName = 'ColorPalette.Section'

type ColorPaletteTileProps = {
  color: string
  name: string
}

type ColorPaletteSwatchesProps = {
  color: string
  type: 'hsl' | 'oklch'
}

const ColorPaletteTile = ({ name, color }: ColorPaletteTileProps) => (
  <div className="ams-storybook-color-palette__tile">
    <div className="ams-storybook-color-palette__example" style={{ backgroundColor: color }} />
    <dl className="sb-unstyled ams-storybook-color-palette__description">
      <dt className="ams-storybook-color-palette__name">{name}</dt>
      <dd className="ams-storybook-color-palette__color">{color}</dd>
    </dl>
  </div>
)

const ColorPaletteSwatches = ({ color, type }: ColorPaletteSwatchesProps) => (
  <div
    className={`ams-storybook-color-palette__swatches ams-storybook-color-palette__swatches--${type} ams-storybook-color-palette--${color}`}
  >
    <div className="ams-storybook-color-palette__swatch"></div>
    <div className="ams-storybook-color-palette__swatch"></div>
    <div className="ams-storybook-color-palette__swatch">{color}</div>
    <div className="ams-storybook-color-palette__swatch"></div>
    <div className="ams-storybook-color-palette__swatch"></div>
  </div>
)

ColorPaletteTile.displayName = 'ColorPalette.Tile'
ColorPaletteSwatches.displayName = 'ColorPalette.Swatches'

export const ColorPalette = Object.assign(ColorPaletteRoot, {
  Section: ColorPaletteSection,
  Tile: ColorPaletteTile,
  Swatches: ColorPaletteSwatches,
})
