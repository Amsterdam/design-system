/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@aram-limpens/design-system-react'

export const AppleTouchIcon = () => (
  <div className="ams-docs-gallery">
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={180} src="favicon/apple-touch-icon.png" width={180} />
      <figcaption>apple-touch-icon.png (180px)</figcaption>
    </figure>
  </div>
)

export const Favicon = () => (
  <div className="ams-docs-gallery">
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={16} src="favicon/favicon.ico" width={16} />
      <figcaption>favicon.ico (16px)</figcaption>
    </figure>
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={32} src="favicon/favicon.ico" width={32} />
      <figcaption>favicon.ico (32px)</figcaption>
    </figure>
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={48} src="favicon/favicon.ico" width={48} />
      <figcaption>favicon.ico (48px)</figcaption>
    </figure>
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={64} src="favicon/favicon.ico" width={64} />
      <figcaption>favicon.ico (64px)</figcaption>
    </figure>
  </div>
)

export const SvgIcon = () => (
  <div className="ams-docs-gallery">
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={64} src="favicon/icon.svg" width={64} />
      <figcaption>icon.svg (64px)</figcaption>
    </figure>
  </div>
)

export const WebAppIcons = () => (
  <div className="ams-docs-gallery">
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={192} src="app-icons/icon-192.png" width={192} />
      <figcaption>icon-192.png (192px)</figcaption>
    </figure>
    <figure className="ams-docs-figure">
      <Image alt="" aspectRatio="1:1" height={512} src="app-icons/icon-512.png" width={512} />
      <figcaption>icon-512.png (512px)</figcaption>
    </figure>
  </div>
)
