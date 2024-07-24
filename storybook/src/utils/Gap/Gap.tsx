/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { HTMLAttributes, PropsWithChildren } from 'react'

const gapLengthOptions = ['xs', 'sm', 'md', 'lg', 'xl'] as const
type GapLength = (typeof gapLengthOptions)[number]

export type GapProps = {
  /** The amount of vertical space between items. */
  length: GapLength
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Gap = ({ children, length }: GapProps) => <span className={`ams-gap--${length}`}>{children}</span>
