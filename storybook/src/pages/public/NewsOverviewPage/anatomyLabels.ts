/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnatomyLabel, AnatomyLabels } from '#storybook/_components/PageAnatomy/model'

/**
 * Names every Grid Cell of the story the docs page draws, grouped per section and in the order they appear.
 * The drawing reads its geometry from the story itself, so only these names and the impression of a height are
 * written by hand. Adding or removing a section or a cell means editing this list too.
 */
export const anatomyLabels: AnatomyLabels = [
  [{ height: 'line', label: 'Breadcrumb' }],
  [{ height: 'card', label: 'Page title and search' }],
  [
    { height: 'panel', label: 'Filters' },
    { height: 'line', label: 'Result count' },
    ...Array.from({ length: 6 }, (): AnatomyLabel => ({ height: 'card', label: 'News card' })),
    { height: 'heading', label: 'Pagination' },
  ],
]
