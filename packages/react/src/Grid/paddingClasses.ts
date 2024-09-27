import type { GridPaddingSize } from './Grid'

export const paddingClasses = (
  componentName: string,
  paddingBottom?: GridPaddingSize,
  paddingTop?: GridPaddingSize,
  paddingVertical?: GridPaddingSize,
): string[] => {
  const classes: string[] = []

  if (paddingVertical) {
    return [`ams-${componentName}--padding-vertical--${paddingVertical}`]
  }

  if (paddingBottom) {
    classes.push(`ams-${componentName}--padding-bottom--${paddingBottom}`)
  }

  if (paddingTop) {
    classes.push(`ams-${componentName}--padding-top--${paddingTop}`)
  }

  return classes
}
