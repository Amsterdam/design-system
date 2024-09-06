/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'
import { Hint, HintProps } from '../Hint'

export type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
  /** Whether the associated input is optional. Will append the text '(niet verplicht)' to the label if no hint is provided. */
  optional?: boolean
} & HintProps

export const Label = forwardRef(
  ({ children, className, hint, optional, ...restProps }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    let optionalHint = null

    if (optional) {
      optionalHint = hint ? <Hint hint={hint} /> : <Hint hint="niet verplicht" />
    } else if (hint) {
      optionalHint = <Hint hint={hint} />
    }

    return (
      <label {...restProps} ref={ref} className={clsx('ams-label', className)}>
        {children} {optionalHint}
      </label>
    )
  },
)

Label.displayName = 'Label'
