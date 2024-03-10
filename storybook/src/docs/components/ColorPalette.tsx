import './color-palette.css'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type ColorPaletteComponent = {
  Section: typeof ColorPaletteSection
  Tile: typeof ColorPaletteTile
} & ForwardRefExoticComponent<DivProps & RefAttributes<HTMLDivElement>>

export const ColorPalette = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="ams-storybook-color-palette">
    {children}
  </div>
)) as ColorPaletteComponent

export const ColorPaletteSection = ({ children }: DivProps) => (
  <div className="ams-storybook-color-palette__section">{children}</div>
)

type ColourPaletteTileProps = {
  color: string
  name: string
}

export const ColorPaletteTile = ({ name, color }: ColourPaletteTileProps) => (
  <div className="ams-storybook-color-palette__tile">
    <div className="ams-storybook-color-palette__example" style={{ backgroundColor: color }} />
    <dl className="sb-unstyled ams-storybook-color-palette__description">
      <dt className="ams-storybook-color-palette__name">{name}</dt>
      <dd className="ams-storybook-color-palette__color">{color}</dd>
    </dl>
  </div>
)

ColorPalette.Section = ColorPaletteSection
ColorPalette.Tile = ColorPaletteTile
ColorPalette.displayName = 'ColourPalette'
ColorPaletteSection.displayName = 'ColourPalette.Section'
ColorPaletteTile.displayName = 'ColourPalette.Tile'
