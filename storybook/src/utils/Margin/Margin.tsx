/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type MarginProps = {
  /** The amount of white space to add below the element. */
  length: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
} & PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const Margin = ({ children, length }: MarginProps) => <span className={`ams-mb--${length}`}>{children}</span>
