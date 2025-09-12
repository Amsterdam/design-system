/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type MarginProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>> & {
  /** The amount of space below the element. */
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
}

/** Mock component to render examples in Storybook. Not for reuse. */
export const Margin = (props: MarginProps) => <span {...props} />
