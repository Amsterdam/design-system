import './color-palette.css'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type ColorPaletteComponent = {
  Section: typeof ColorPaletteSection
  Tile: typeof ColorPaletteTile
} & ForwardRefExoticComponent<DivProps & RefAttributes<HTMLDivElement>>

export const ColorPalette = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="amsterdam-storybook-color-palette">
    {children}
  </div>
)) as ColorPaletteComponent

export const ColorPaletteSection = ({ children }: DivProps) => (
  <div className="amsterdam-storybook-color-palette__section">{children}</div>
)

type ColourPaletteTileProps = {
  name: string
  rgb: string
}

export const ColorPaletteTile = ({ name, rgb }: ColourPaletteTileProps) => (
  <div className="amsterdam-storybook-color-palette__tile">
    <div className="amsterdam-storybook-color-palette__example" style={{ backgroundColor: rgb }} />
    <dl className="sb-unstyled amsterdam-storybook-color-palette__description">
      <dt className="amsterdam-storybook-color-palette__name">{name}</dt>
      <dd className="amsterdam-storybook-color-palette__code">{rgb}</dd>
    </dl>
  </div>
)

ColorPalette.Section = ColorPaletteSection
ColorPalette.Tile = ColorPaletteTile
ColorPalette.displayName = 'ColourPalette'
ColorPaletteSection.displayName = 'ColourPalette.Section'
ColorPaletteTile.displayName = 'ColourPalette.Tile'
