/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type VisuallyHiddenProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Renders examples in Storybook. Not for reuse. */
export const VisuallyHidden = ({ children }: VisuallyHiddenProps) => (
  <span className="ams-visually-hidden">{children}</span>
)
