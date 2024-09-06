/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type FieldSetHintProp = {
  /** Provides additional context to the user, i.e. whether the associated form field is optional or required. Make sure that this prop communicates field optionality if the `optional` prop is `true` and vice versa. */
  hint?: string
}

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** Whether the field set has an input with a validation error */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
  /** Whether the associated input is optional. Will render the value of the hint prop or 'niet verplicht'. Make sure that the hint communicates field optionality this prop is `true` and vice versa. */
  optional?: boolean
} & FieldSetHintProp

const FieldSetLegendHint = ({ hint }: FieldSetHintProp) => <span className="ams-hint">({hint})</span>

export const FieldSet = forwardRef(
  (
    { children, className, invalid, legend, hint, optional, ...restProps }: FieldSetProps & FieldSetHintProp,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => {
    let optionalHint = null

    if (optional) {
      optionalHint = hint ? <FieldSetLegendHint hint={hint} /> : <FieldSetLegendHint hint="niet verplicht" />
    } else if (hint) {
      optionalHint = <FieldSetLegendHint hint={hint} />
    }

    return (
      <fieldset
        {...restProps}
        ref={ref}
        className={clsx('ams-field-set', invalid && 'ams-field-set--invalid', className)}
      >
        <legend className="ams-field-set__legend">
          {legend} {optionalHint}
        </legend>
        {children}
      </fieldset>
    )
  },
)

FieldSet.displayName = 'FieldSet'
