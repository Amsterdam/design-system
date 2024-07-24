/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes } from 'react'

const marginLengthOptions = ['xs', 'sm', 'md', 'lg', 'xl'] as const
type MarginLength = (typeof marginLengthOptions)[number]

export type MarginProps = {
  /** The amount of white space to add below the element. */
  length: MarginLength
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Margin = ({ children, length }: MarginProps) => <span className={`ams-mb--${length}`}>{children}</span>
