import { ViewportMap } from './types'

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
      width: '832px',
    },
    type: 'tablet',
  },
  desktop: {
    name: 'Desktop',
    styles: {
      height: '1080px',
      width: '1600px',
    },
    type: 'desktop',
  },
}
