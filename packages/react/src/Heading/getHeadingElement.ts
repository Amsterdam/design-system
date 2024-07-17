import type { HeadingProps } from './Heading'

export function getHeadingElement(level: HeadingProps['level']) {
  switch (level) {
    case 2:
      return 'h2'
    case 3:
      return 'h3'
    case 4:
      return 'h4'
    default:
      return 'h1'
  }
}
