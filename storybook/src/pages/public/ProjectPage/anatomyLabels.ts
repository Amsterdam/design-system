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
    { height: 300, label: 'Image slider' },
  ],
  [
    { height: 400, label: 'Project body' },
    { height: 400, label: 'Timeline' },
    { height: 152, label: 'News' },
    { height: 152, label: 'Works and detours' },
  ],
  [
    { height: 44, label: 'Section heading' },
    { height: 152, label: 'Link section' },
    { height: 152, label: 'Link section' },
    { height: 152, label: 'Link section' },
    { height: 152, label: 'Link section' },
  ],
  [
    { height: 240, label: 'Related projects' },
    { height: 240, label: 'Documents' },
    { height: 152, label: 'Contact' },
    { height: 152, label: 'Subscribe' },
  ],
  [
    { height: 44, label: 'Section heading' },
    { height: 152, label: 'Link section' },
    { height: 152, label: 'Link section' },
  ],
  [{ height: 300, label: 'Map' }],
]
