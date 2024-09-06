/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type HintProps = PropsWithChildren<HTMLAttributes<HTMLElement>> & {
  /** Show a custom hint text. */
  hint?: string
  /** Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional. */
  optional?: boolean
}

const getHintText = ({ hint, optional }: HintProps) => {
  if (hint) {
    return <Hint hint={hint} />
  } else if (optional) {
    return <Hint hint="niet verplicht" />
  }

  return null
}

export const Hint = forwardRef(
  ({ className, hint, optional, ...restProps }: HintProps, ref: ForwardedRef<HTMLElement>) => {
    const hintText = getHintText({ hint, optional })

    return (
      hintText && (
        <span {...restProps} ref={ref} className={clsx('ams-hint', className)}>
          ({hintText})
        </span>
      )
    )
  },
)

Hint.displayName = 'Hint'
