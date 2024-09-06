/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Hint, HintProps } from '../Hint'

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** Whether the field set has an input with a validation error */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
  /** Appends the text '(niet verplicht)' to the label if no hint is provided. Use when the associated inputs are optional. */
  optional?: boolean
} & HintProps

export const FieldSet = forwardRef(
  (
    { children, className, invalid, legend, hint, optional, ...restProps }: FieldSetProps,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => {
    let optionalHint = null

    if (optional) {
      optionalHint = hint ? <Hint hint={hint} /> : <Hint hint="niet verplicht" />
    } else if (hint) {
      optionalHint = <Hint hint={hint} />
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
