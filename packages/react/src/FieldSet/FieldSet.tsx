/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type FieldSetHintProp = {
  /** Provides additional context to the user, for example whether the associated form elements are optional or required. Will disregard the value of the optional prop if provided with a text. */
  hint?: string
}

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** Whether the field set has an input with a validation error */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
  /** Whether the associated inputs are optional. Will append the text '(niet verplicht)' to the label if no hint is provided. */
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
