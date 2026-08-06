/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnatomyLabel, AnatomyLabels } from '#storybook/_components/PageAnatomy/model'

/**
 * Names every Grid Cell of the Default story for the anatomy drawing on the docs page, grouped per section and in the
 * order they appear. The drawing reads its geometry from the story itself, so only these names and the impression of
 * a height are written by hand. Adding or removing a section or a cell means editing this list too.
 */
export const anatomyLabels: AnatomyLabels = [
  ['Hero image', { height: 'heading', label: 'Search field' }],
  [
    { height: 'heading', label: 'Section heading' },
    ...Array.from({ length: 8 }, (): AnatomyLabel => ({ height: 'tile', label: 'Top task' })),
    { height: 'line', label: 'Link to all topics' },
  ],
  [
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
  ],
  [
    { height: 'heading', label: 'Section heading' },
    { height: 'card', label: 'News card' },
    { height: 'card', label: 'News card' },
    { height: 'card', label: 'News card' },
  ],
]
