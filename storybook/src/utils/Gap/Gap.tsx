/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { HTMLAttributes, PropsWithChildren } from 'react'

export type GapProps = {
  /** The amount of vertical space between items. */
  length: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Gap = ({ children, length }: GapProps) => <span className={`ams-gap--${length}`}>{children}</span>
