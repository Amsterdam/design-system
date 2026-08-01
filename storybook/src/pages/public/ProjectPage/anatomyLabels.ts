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
  [
    { height: 'title', label: 'Page title' },
    { height: 'panel', label: 'Image slider' },
    { height: 'body', label: 'Project body' },
    { height: 'card', label: 'News' },
    { height: 'card', label: 'Works and detours' },
  ],
  [
    { height: 'heading', label: 'Section heading' },
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
  ],
  [
    { height: 'panel', label: 'Related projects' },
    { height: 'panel', label: 'Documents' },
    { height: 'card', label: 'Contact' },
    { height: 'card', label: 'Subscribe' },
  ],
  [
    { height: 'heading', label: 'Section heading' },
    { height: 'card', label: 'Link section' },
    { height: 'card', label: 'Link section' },
  ],
  [{ height: 'panel', label: 'Map' }],
]
