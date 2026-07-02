/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import * as Icons from '@amsterdam/design-system-react-icons'

// These arg types live in their own module because they pull in the entire icon package.
// Import them only in stories that offer an icon control, so other stories don’t pay that cost.

/**
 * An optional icon prop. Offers all icons by name.
 * Labels `undefined` as ‘none’, or with the name of the default icon if one is passed.
 */
export const iconArgType = (defaultIcon?: string) => ({
  control: {
    labels: { undefined: defaultIcon ? `${defaultIcon} (default)` : 'none' },
    type: 'select' as const,
  },
  mapping: Icons,
  options: [undefined, ...Object.keys(Icons).filter((name) => name !== defaultIcon)],
})

/** A required icon prop. Offers all icons by name. */
export const requiredIconArgType = {
  control: { type: 'select' },
  mapping: Icons,
  options: Object.keys(Icons),
} as const
