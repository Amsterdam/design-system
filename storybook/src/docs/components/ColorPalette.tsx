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
  color: Record<'0' | '20' | '40' | '60' | '80' | '100', string>
  name: string
}

const ColorPaletteSwatch = ({ color, name }: ColorPaletteSwatchProps) => (
  <div className={clsx('ams-docs-color-swatch', `ams-docs-color-swatch--${name}`)}>
    <code className="ams-docs-color-code">ams.brand.color.{name}</code>
    {name === 'neutral' ? (
      <>
        <ColorPaletteTile color={color['0']} level="0" />
        <ColorPaletteTile color={color['20']} level="20" />
        <ColorPaletteTile color={color['40']} level="40" />
        <ColorPaletteTile color={color['60']} level="60" />
        <ColorPaletteTile color={color['80']} level="80" />
        <ColorPaletteTile color={color['100']} level="100" />
      </>
    ) : (
      <>
        <ColorPaletteTile color={color['20']} level="20" />
        <ColorPaletteTile color={color['60']} level="60" />
        <ColorPaletteTile color={color['80']} level="80" />
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
