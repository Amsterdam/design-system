/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

type LabelHintProp = {
  /** Provides additional context to the user, for example whether the associated form field is optional or required. Will disregard the value of the optional prop if provided with a text. */
  hint?: string
}

type LabelOptionalProp = {
  /** Whether the associated input is optional. Will append the text '(niet verplicht)' to the label if no hint is provided. */
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
