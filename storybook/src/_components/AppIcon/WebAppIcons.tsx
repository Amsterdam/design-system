/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'

import './app-icon.css'

/** Displays the PWA icons at 192 px and 512 px side by side. */
export const WebAppIcons = () => (
  <div className="_ams-app-icon-set">
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={192} src="app-icons/icon-192.png" width={192} />
      <figcaption>icon-192.png (192px)</figcaption>
    </figure>
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={512} src="app-icons/icon-512.png" width={512} />
      <figcaption>icon-512.png (512px)</figcaption>
    </figure>
  </div>
)
