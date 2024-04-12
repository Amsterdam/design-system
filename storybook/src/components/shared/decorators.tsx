/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { StoryContext, StoryFn } from '@storybook/react'

/** Applies a dark background colour if the `inverseColor` arg is true. */
export const inverseColorDecorator = (Story: StoryFn, context: StoryContext) => (
  <div className={context.args['inverseColor'] ? 'ams-docs-dark-background' : undefined}>
    <Story />
  </div>
)
