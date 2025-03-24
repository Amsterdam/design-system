/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

const sizeAbbreviations = {
  large: 'l',
  medium: 'm',
  none: 'none',
  small: 's',
  'x-large': 'xl',
  'x-small': 'xs',
} as const

type SizeLabel = keyof typeof sizeAbbreviations

export const abbreviateSize = (key: SizeLabel): string => sizeAbbreviations[key]
