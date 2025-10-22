/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ViewportMap } from './types'

export const viewports: ViewportMap = {
  phone: {
    name: 'Phone',
    styles: {
      height: '680px',
      width: '320px',
    },
    type: 'mobile',
  },
  tablet: {
    name: 'Tablet',
    styles: {
      height: '1080px',
      width: '880px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '1080px',
      width: '1440px',
    },
    type: 'desktop',
  },
}
