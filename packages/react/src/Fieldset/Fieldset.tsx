/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type FieldsetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  legend: string
}

export const Fieldset = forwardRef(
  ({ children, className, legend, ...restProps }: FieldsetProps, ref: ForwardedRef<HTMLFieldSetElement>) => (
    <fieldset {...restProps} ref={ref} className={clsx('amsterdam-fieldset', className)}>
      <legend className="amsterdam-fieldset__legend">{legend}</legend>
      {children}
    </fieldset>
  ),
)

Fieldset.displayName = 'Fieldset'
