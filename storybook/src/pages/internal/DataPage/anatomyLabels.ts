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
  [
    { height: 'heading', label: 'Page title' },
    { height: 'body', label: 'Object metadata' },
    { height: 'panel', label: 'Table of contents' },
    { height: 'card', label: 'Status assessment' },
    { height: 'card', label: 'Risk score' },
    { height: 'panel', label: 'Condition report' },
    { height: 'panel', label: 'Condition report' },
    { height: 'card', label: 'Measures' },
    { height: 'body', label: 'Documents' },
    { height: 'card', label: 'Further research' },
    { height: 'heading', label: 'Amendments' },
  ],
]
