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
  [{ height: 32, label: 'Breadcrumb' }],
  [{ height: 132, label: 'Article header' }],
  ['Hero image'],
  [{ height: 372, label: 'Article body' }],
  [{ height: 132, label: 'Newsletter' }],
  [
    { height: 44, label: 'Section heading' },
    { height: 212, label: 'News card' },
    { height: 212, label: 'News card' },
    { height: 212, label: 'News card' },
  ],
]
