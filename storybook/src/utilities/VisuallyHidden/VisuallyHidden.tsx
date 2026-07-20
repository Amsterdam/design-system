/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type VisuallyHiddenProps = PropsWithChildren<HTMLAttributes<HTMLSpanElement>>

/** Mock component to render examples in Storybook. Not for reuse. */
export const VisuallyHidden = (props: VisuallyHiddenProps) => <span {...props} />
