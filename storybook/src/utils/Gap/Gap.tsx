/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { HTMLAttributes, PropsWithChildren } from 'react'

export type GapProps = {
  /** The amount of space between the element’s children. */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Gap = ({ children, size }: GapProps) => <span className={`ams-gap--${size}`}>{children}</span>
