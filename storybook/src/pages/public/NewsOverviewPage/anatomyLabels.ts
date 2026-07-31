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
  [{ height: 32, label: 'Breadcrumb' }],
  [
    { height: 64, label: 'Page title' },
    { height: 56, label: 'Search' },
  ],
  [
    { height: 380, label: 'Filters' },
    { height: 32, label: 'Result count' },
    ...Array.from({ length: 7 }, () => ({ height: 180, label: 'News card' })),
    { height: 44, label: 'Pagination' },
  ],
]
