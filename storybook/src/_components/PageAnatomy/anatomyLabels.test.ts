/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/// <reference types="vite/client" />

// @vitest-environment jsdom
// A page template may read from `window` as it loads, so give this file a document.

import { describe, expect, it } from 'vitest'

import type { AnatomyLabels, StoryModule } from './model'

import { readPageAnatomy, readStoryTree } from './model'

/**
 * Every page template that draws its anatomy names each of its Grid Cells by hand. The drawing reads the cells from
 * the story, so a story that gains or loses one leaves those names behind. This test fails at that moment, rather
 * than letting the docs page show its own notice to whoever opens it.
 */

const labelModules = import.meta.glob('../../pages/**/anatomyLabels.ts', { eager: true }) as Record<
  string,
  { anatomyLabels: AnatomyLabels }
>

const storyModules = import.meta.glob('../../pages/**/*.stories.tsx', { eager: true }) as Record<string, StoryModule>

/** The story each page draws, where it is not the Default one. */
const storyNames: Record<string, string> = { FormFlow: 'MultipleQuestions', TablePage: 'SortingWithSelect' }

const pages = Object.keys(labelModules)
  .map((path) => ({
    directory: path.split('/').slice(-2)[0] ?? '',
    folder: path.replace(/anatomyLabels\.ts$/, ''),
    path,
  }))
  .sort((a, b) => a.folder.localeCompare(b.folder))

describe.each(pages)('$directory', ({ directory, folder, path }) => {
  it('names every section and cell of the story it draws', () => {
    const labels = labelModules[path]?.anatomyLabels ?? []
    const storyPath = Object.keys(storyModules).find((key) => key.startsWith(folder))
    const story = storyModules[storyPath ?? '']

    expect(story).toBeDefined()
    expect(readPageAnatomy(readStoryTree(story!, storyNames[directory] ?? 'Default'), labels).problems).toEqual([])
  })
})
