/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'

import './app-icon.css'

/** Displays the Apple Touch icon at its native size (180 px). */
export const AppleTouchIcon = () => (
  <div className="_ams-app-icon-set">
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={180} src="favicon/apple-touch-icon.png" width={180} />
      <figcaption>apple-touch-icon.png (180px)</figcaption>
    </figure>
  </div>
)
