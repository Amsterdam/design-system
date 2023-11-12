import { PaddingSize } from './types'

export const paddingClasses = (
  paddingBottom?: PaddingSize,
  paddingTop?: PaddingSize,
  paddingVertical?: PaddingSize,
): string[] => {
  const classes = [] as string[]

  if (paddingVertical) {
    return [`amsterdam-padding-vertical--${paddingVertical}`]
  }

  if (paddingBottom) {
    classes.push(`amsterdam-padding-bottom--${paddingBottom}`)
  }

  if (paddingTop) {
    classes.push(`amsterdam-padding-top--${paddingTop}`)
  }

  return classes
}
