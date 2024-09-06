/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

type LabelHintProp = {
  /** Provides additional context to the user, i.e. whether the associated form field is optional or required. Make sure that this prop communicates field optionality if the `optional` prop is `true` and vice versa. */
  hint?: string
}

type LabelOptionalProp = {
  /** Whether the associated input is optional. Will render the value of the hint prop or 'niet verplicht'. Make sure that the hint communicates field optionality this prop is `true` and vice versa. */
  optional?: boolean
}

export type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & (LabelHintProp & LabelOptionalProp)

const LabelHint = ({ hint }: LabelHintProp) => <span className="ams-hint">({hint})</span>

export const Label = forwardRef(
  ({ children, className, hint, optional, ...restProps }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    let optionalHint = null

    if (optional) {
      optionalHint = hint ? <LabelHint hint={hint} /> : <LabelHint hint="niet verplicht" />
    } else if (hint) {
      optionalHint = <LabelHint hint={hint} />
    }

    return (
      <label {...restProps} ref={ref} className={clsx('ams-label', className)}>
        {children} {optionalHint}
      </label>
    )
  },
)

Label.displayName = 'Label'
