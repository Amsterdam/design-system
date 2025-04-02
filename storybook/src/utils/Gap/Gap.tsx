/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { HTMLAttributes, PropsWithChildren } from 'react'

export type GapProps = {
  /** The amount of space between the element’s children. */
  size: 'xs' | 's' | 'm' | 'l' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Mock component to render examples in Storybook. Not for reuse. */
export const Gap = (props: GapProps) => <span {...props} />
