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
  color: Record<'100' | '300' | '600' | '900' | '1000', string>
  name: string
}

const ColorPaletteSwatch = ({ color, name }: ColorPaletteSwatchProps) => (
  <div className={clsx('ams-docs-color-swatch', `ams-docs-color-swatch--${name}`)}>
    <code className="ams-docs-color-code">ams.brand.color.{name}</code>
    {name === 'neutral' && <ColorPaletteTile color={color['100']} level="100" />}
    <ColorPaletteTile color={color['300']} level="300" />
    <ColorPaletteTile color={color['600']} level="600" />
    <ColorPaletteTile color={color['900']} level="900" />
    {name === 'neutral' && <ColorPaletteTile color={color['1000']} level="1000" />}
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
