import type { HeadingProps } from './Heading'

export function getHeadingTag(level: HeadingProps['level'] | null) {
  switch (level) {
    case 2:
      return 'h2'
    case 3:
      return 'h3'
    case 4:
      return 'h4'
    // Ensure valid HTML with invalid input outside of TypeScript.
    default:
      return 'h1'
  }
}
