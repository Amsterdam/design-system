/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'

import './app-icon.css'

/** Displays the SVG icon at 64 px. */
export const SvgIcon = () => (
  <div className="_ams-app-icon-set">
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={64} src="favicon/icon.svg" width={64} />
      <figcaption>icon.svg (64px)</figcaption>
    </figure>
  </div>
)
