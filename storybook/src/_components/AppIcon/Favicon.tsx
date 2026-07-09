/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'

import './app-icon.css'

/** Displays the favicon at 16 px, 32 px, 48 px and 64 px side by side. */
export const Favicon = () => (
  <div className="_ams-app-icon-set">
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={16} src="favicon/favicon.ico" width={16} />
      <figcaption>favicon.ico (16px)</figcaption>
    </figure>
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={32} src="favicon/favicon.ico" width={32} />
      <figcaption>favicon.ico (32px)</figcaption>
    </figure>
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={48} src="favicon/favicon.ico" width={48} />
      <figcaption>favicon.ico (48px)</figcaption>
    </figure>
    <figure className="_ams-app-icon">
      <Image alt="" aspectRatio="1:1" height={64} src="favicon/favicon.ico" width={64} />
      <figcaption>favicon.ico (64px)</figcaption>
    </figure>
  </div>
)
