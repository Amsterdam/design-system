import { Image, Paragraph } from '@amsterdam/design-system-react'

const FigureGridStyle = { display: 'flex', alignItems: 'center', gap: '1em' }

const FigureStyle: Record<string | number, (string | number) & {}> = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginInline: 0,
  width: 'fit-content',
}

export const IcoFavicon = () => {
  return (
    <div style={FigureGridStyle}>
      <figure style={FigureStyle}>
        <Image src="favicon/favicon.ico" width={16} height={16} sizes="16x16" />
        <figcaption>
          <Paragraph>favicon.ico, 16x16px</Paragraph>
        </figcaption>
      </figure>
      <figure style={FigureStyle}>
        <Image src="favicon/favicon.ico" width={32} height={32} sizes="32x32" />
        <figcaption>
          <Paragraph>favicon.ico, 32x32px</Paragraph>
        </figcaption>
      </figure>
      <figure style={FigureStyle}>
        <Image src="favicon/favicon.ico" width={64} height={64} sizes="64x64" />
        <figcaption>
          <Paragraph>favicon.ico, 64x64px</Paragraph>
        </figcaption>
      </figure>
    </div>
  )
}

export const SvgIconDefault = () => {
  return (
    <figure style={FigureStyle}>
      <Image src="favicon/icon.svg" width={64} height={64} />
      <figcaption>
        <Paragraph>icon.svg, 64x64px</Paragraph>
      </figcaption>
    </figure>
  )
}

export const PngIconAppleTouch = () => {
  return (
    <figure style={FigureStyle}>
      <Image src="favicon/apple-touch-icon.png" width={180} height={180} />
      <figcaption>
        <Paragraph>apple-touch-icon.png, 180x180px</Paragraph>
      </figcaption>
    </figure>
  )
}

export const PngIconsWebApp = () => {
  return (
    <div style={FigureGridStyle}>
      <figure style={FigureStyle}>
        <Image src="favicon/icon-192.png" width={192} height={192} />{' '}
        <figcaption>
          <Paragraph>icon-192.png, 192x192px</Paragraph>
        </figcaption>
      </figure>

      <figure style={FigureStyle}>
        <Image src="favicon/icon-512.png" width={512} height={512} />{' '}
        <figcaption>
          <Paragraph>icon-512.png, 512x512px</Paragraph>
        </figcaption>
      </figure>
    </div>
  )
}
