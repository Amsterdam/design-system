/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type HintAndOptionalProps = {
  /** Show a custom hint text. */
  hint?: string
  /** Appends the text '(niet verplicht)' to the label or legend if no hint is provided. Use when the associated inputs are optional. */
  optional?: boolean
}

const getHintText = ({ hint, optional }: HintAndOptionalProps) => {
  if (hint) {
    return hint
  } else if (optional) {
    return 'niet verplicht'
  }

  return null
}

export type HintProps = HintAndOptionalProps & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Hint = forwardRef(
  ({ className, hint, optional, ...restProps }: HintProps, ref: ForwardedRef<HTMLElement>) => {
    const hintText = getHintText({ hint, optional })

    return (
      hintText && (
        <span {...restProps} className={clsx('ams-hint', className)} ref={ref}>
          ({hintText})
        </span>
      )
    )
  },
)

Hint.displayName = 'Hint'
