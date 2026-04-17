/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { GridVerticalPadding } from './Grid'

export const paddingClasses = (
  componentName: string,
  paddingBottom?: GridVerticalPadding,
  paddingTop?: GridVerticalPadding,
  paddingVertical?: GridVerticalPadding,
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
