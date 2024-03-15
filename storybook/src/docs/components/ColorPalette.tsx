import './color-palette.css'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const ColorPaletteRoot = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="ams-storybook-color-palette">
    {children}
  </div>
))

ColorPaletteRoot.displayName = 'ColourPalette'

const ColorPaletteSection = ({ children }: DivProps) => (
  <div className="ams-storybook-color-palette__section">{children}</div>
)

ColorPaletteSection.displayName = 'ColourPalette.Section'

type ColourPaletteTileProps = {
  color: string
  name: string
}

const ColorPaletteTile = ({ name, color }: ColourPaletteTileProps) => (
  <div className="ams-storybook-color-palette__tile">
    <div className="ams-storybook-color-palette__example" style={{ backgroundColor: color }} />
    <dl className="sb-unstyled ams-storybook-color-palette__description">
      <dt className="ams-storybook-color-palette__name">{name}</dt>
      <dd className="ams-storybook-color-palette__color">{color}</dd>
    </dl>
  </div>
)

ColorPaletteTile.displayName = 'ColourPalette.Tile'

export const ColorPalette = Object.assign(ColorPaletteRoot, { Section: ColorPaletteSection, Tile: ColorPaletteTile })
