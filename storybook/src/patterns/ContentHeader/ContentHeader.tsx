/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */
import type { HTMLAttributes } from 'react'

export type ContentHeaderProps = {
  breadcrumb: string
  date: Date | number
  heading: string
  lead: string
} & HTMLAttributes<HTMLSpanElement>

/** Mock component to render examples in Storybook. Not for reuse. */
export const ContentHeader = (props: ContentHeaderProps) => <span {...props} />
