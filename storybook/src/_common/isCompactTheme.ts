/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { StoryContext } from '@storybook/react-vite'

/**
 * Whether the story renders in one of the Compact themes, based on the theme selected in the toolbar.
 * Use this to adapt markup that only makes sense in Compact Mode, such as making a Grid Cell
 * transparent so it does not cover a coloured Spotlight background with its own white background.
 */
export const isCompactTheme = (context: Pick<StoryContext, 'globals'>): boolean => {
  const theme = context.globals['theme']

  return typeof theme === 'string' && theme.toLowerCase().includes('compact')
}
