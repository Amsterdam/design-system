import { SpaceSize } from './types'

export const spaceClasses = (spaceBottom?: SpaceSize, spaceTop?: SpaceSize, spaceVertical?: SpaceSize): string[] => {
  const classes = [] as string[]

  if (spaceVertical) {
    return [`amsterdam-space-vertical--${spaceVertical}`]
  }

  if (spaceBottom) {
    classes.push(`amsterdam-space-bottom--${spaceBottom}`)
  }

  if (spaceTop) {
    classes.push(`amsterdam-space-top--${spaceTop}`)
  }

  return classes
}
