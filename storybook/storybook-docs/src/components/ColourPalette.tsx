import './colour-palette.css'
import { forwardRef } from 'react'
import type { ForwardedRef, ForwardRefExoticComponent, HTMLAttributes, PropsWithChildren, RefAttributes } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

type ColourPaletteComponent = {
  Section: typeof ColourPaletteSection
  Tile: typeof ColourPaletteTile
} & ForwardRefExoticComponent<DivProps & RefAttributes<HTMLDivElement>>

export const ColourPalette = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="amsterdam-storybook-colour-palette">
    {children}
  </div>
)) as ColourPaletteComponent

export const ColourPaletteSection = ({ children }: DivProps) => (
  <div className="amsterdam-storybook-colour-palette__section">{children}</div>
)

type ColourPaletteTileProps = {
  name: string
  rgb: string
}

export const ColourPaletteTile = ({ name, rgb }: ColourPaletteTileProps) => (
  <div className="amsterdam-storybook-colour-palette__tile">
    <div className="amsterdam-storybook-colour-palette__example" style={{ backgroundColor: rgb }} />
    <dl className="sb-unstyled amsterdam-storybook-colour-palette__description">
      <dt className="amsterdam-storybook-colour-palette__name">{name}</dt>
      <dd className="amsterdam-storybook-colour-palette__code">{rgb}</dd>
    </dl>
  </div>
)

ColourPalette.Section = ColourPaletteSection
ColourPalette.Tile = ColourPaletteTile
ColourPalette.displayName = 'ColourPalette'
ColourPaletteSection.displayName = 'ColourPalette.Section'
ColourPaletteTile.displayName = 'ColourPalette.Tile'
