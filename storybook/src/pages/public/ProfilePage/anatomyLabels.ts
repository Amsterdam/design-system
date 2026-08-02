/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnatomyLabels } from '#storybook/_components/PageAnatomy/model'

/**
 * Names every Grid Cell of the story the docs page draws, grouped per section and in the order they appear.
 * The drawing reads its geometry from the story itself, so only these names and the impression of a height are
 * written by hand. Adding or removing a section or a cell means editing this list too.
 */
export const anatomyLabels: AnatomyLabels = [
  [{ height: 'line', label: 'Breadcrumb' }],
  // PhotoPlaceholder is not an Image, so the portrait takes no height from its 3:4 ratio and needs one of its own.
  // At that ratio it reaches past the lead beside it on the medium and wide grids, and about as far on the narrow
  // one, where both run the full width.
  [
    { height: 'title', label: 'Page title' },
    { height: { narrow: 'body', medium: 'panel', wide: 'panel' }, label: 'Lead and duties' },
    { height: 'body', label: 'Portrait' },
  ],
  [
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
  ],
  [
    { height: 'card', label: 'Contact' },
    { height: 'card', label: 'Social media' },
    { height: 'panel', label: 'Image slider' },
    { height: 'card', label: 'Residence' },
  ],
  [{ height: 'card', label: 'Background detail' }],
]
