/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** Whether the field set has an input with a validation error */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
}

export const FieldSet = forwardRef(
  ({ children, className, invalid, legend, ...restProps }: FieldSetProps, ref: ForwardedRef<HTMLFieldSetElement>) => (
    <fieldset
      {...restProps}
      ref={ref}
      className={clsx('ams-field-set', invalid && 'ams-field-set--invalid', className)}
    >
      <legend className="ams-field-set__legend">{legend}</legend>
      {children}
    </fieldset>
  ),
)

FieldSet.displayName = 'FieldSet'
