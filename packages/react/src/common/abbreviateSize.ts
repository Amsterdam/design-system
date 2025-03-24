/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

// If you modify this list, you must also update the
// Sass list in packages/css/src/common/size.scss
/** Abbreviations for the size labels in our React API */
const sizeAbbreviations = {
  large: 'l',
  medium: 'm',
  none: 'none',
  small: 's',
  'x-large': 'xl',
  'x-small': 'xs',
} as const

type SizeLabel = keyof typeof sizeAbbreviations

export const abbreviateSize = (label: SizeLabel): string => sizeAbbreviations[label]
