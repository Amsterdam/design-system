/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** The text for the caption. */
  legend: string
}

export const FieldSet = forwardRef(
  ({ children, className, legend, ...restProps }: FieldSetProps, ref: ForwardedRef<HTMLFieldSetElement>) => (
    <fieldset {...restProps} ref={ref} className={clsx('ams-field-set', className)}>
      <legend className="ams-field-set__legend">{legend}</legend>
      {children}
    </fieldset>
  ),
)

FieldSet.displayName = 'FieldSet'
