/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { HTMLAttributes, PropsWithChildren } from 'react'

export type ProseProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

/** Mock component to render examples in Storybook. Not for reuse. */
export const Prose = (props: ProseProps) => <article {...props} />
