/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type BodyProps = PropsWithChildren<HTMLAttributes<HTMLBodyElement>>

/** Mock component to render examples in Storybook. Not for reuse. */
export const Body = (props: BodyProps) => <body {...props} />
