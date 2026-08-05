/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { AnatomyLabels } from '#storybook/_components/PageAnatomy/model'

/**
 * Names every Grid Cell of the Default story for the anatomy drawing on the docs page, grouped per section and in the
 * order they appear. The drawing reads its geometry from the story itself, so only these names and the impression of
 * a height are written by hand. Adding or removing a section or a cell means editing this list too.
 */
export const anatomyLabels: AnatomyLabels = [
  [{ height: 'line', label: 'Breadcrumb' }],
  [{ height: 'card', label: 'Article header' }],
  ['Hero image'],
  [{ height: 'body', label: 'Article body' }],
  [{ height: 'card', label: 'Newsletter' }],
  [
    { height: 'heading', label: 'Section heading' },
    { height: 'card', label: 'News card' },
    { height: 'card', label: 'News card' },
    { height: 'card', label: 'News card' },
  ],
]
