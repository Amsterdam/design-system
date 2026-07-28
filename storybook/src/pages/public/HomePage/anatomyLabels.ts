/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnatomyLabels } from '#storybook/_components/PageAnatomy/anatomy'

/**
 * Names every Grid Cell of the Default story for the anatomy drawing on the docs page, grouped per section and in the
 * order they appear. The drawing reads its geometry from the story itself, so only these names and the impression of
 * a height are written by hand. Adding or removing a section or a cell means editing this list too.
 */
export const anatomyLabels: AnatomyLabels = [
  ['Hero image', { height: 64, label: 'Search field' }],
  [{ height: 44, label: 'Section heading' }, ...Array.from({ length: 8 }, () => ({ height: 96, label: 'Top task' }))],
  [
    { height: 168, label: 'Link section' },
    { height: 168, label: 'Link section' },
  ],
  [
    { height: 44, label: 'Section heading' },
    { height: 212, label: 'News card' },
    { height: 212, label: 'News card' },
    { height: 212, label: 'News card' },
  ],
]
