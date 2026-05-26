/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type QueryContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/** Mock component to render examples in Storybook. Not for reuse. */
export const QueryContainer = (props: QueryContainerProps) => <div {...props} />
