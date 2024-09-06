/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type HintProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** Provides additional context to the user on some inline text element such as a Label. For example: a form field can be marked as optional. Keep the text brief, preferably no more than two words, as it doesn't break words to a new line. */
  hint?: string
}

export const Hint = forwardRef(({ className, hint, ...restProps }: HintProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('ams-hint', className)}>
    ({hint})
  </span>
))

Hint.displayName = 'Hint'
