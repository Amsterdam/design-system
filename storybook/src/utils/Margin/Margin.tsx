/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type MarginProps = {
  /** The amount of space below the element. */
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Margin = ({ children, size }: MarginProps) => <span className={`ams-mb--${size}`}>{children}</span>
