import './color-palette.css'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type DivProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

const ColorPaletteRoot = forwardRef(({ children, ...restProps }: DivProps, ref: ForwardedRef<HTMLDivElement>) => (
  <div {...restProps} ref={ref} className="ams-docs-color-palette">
    {children}
  </div>
))

ColorPaletteRoot.displayName = 'ColorPalette'

type ColorPaletteSwatchProps = {
  color: Record<'0' | '200' | '400' | '600' | '800' | '1000', string>
  name: string
}

const ColorPaletteSwatch = ({ color, name }: ColorPaletteSwatchProps) => (
  <div className={clsx('ams-docs-color-swatch', `ams-docs-color-swatch--${name}`)}>
    <code className="ams-docs-color-code">ams.brand.color.{name}</code>
    {name === 'neutral' ? (
      <>
        <ColorPaletteTile color={color['0']} level="0" />
        <ColorPaletteTile color={color['200']} level="200" />
        <ColorPaletteTile color={color['400']} level="400" />
        <ColorPaletteTile color={color['600']} level="600" />
        <ColorPaletteTile color={color['800']} level="800" />
        <ColorPaletteTile color={color['1000']} level="1000" />
      </>
    ) : (
      <>
        <ColorPaletteTile color={color['200']} level="200" />
        <ColorPaletteTile color={color['600']} level="600" />
        <ColorPaletteTile color={color['800']} level="800" />
      </>
    )}
  </div>
)

ColorPaletteSwatch.displayName = 'ColorPalette.Swatch'

type ColorPaletteTileProps = {
  color: string | undefined
  level: string
}

const ColorPaletteTile = ({ color, level }: ColorPaletteTileProps) => (
  <div className={clsx('ams-docs-color-tile', `ams-docs-color-tile--${level}`)}>
    {color && (
      <>
        <code className="ams-docs-color-code">{level}</code>
        <div className="ams-docs-color-sample" style={{ backgroundColor: color }} />
      </>
    )}
  </div>
)

ColorPaletteTile.displayName = 'ColorPalette.Tile'

export const ColorPalette = Object.assign(ColorPaletteRoot, {
  Swatch: ColorPaletteSwatch,
  Tile: ColorPaletteTile,
})
