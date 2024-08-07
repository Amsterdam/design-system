/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

export type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
  /** Text to inform the user that the field is explicitely not required. */
  notRequiredLabel?: string
  /** Whether the field set is required. */
  required?: boolean
}

export const LabelOptionalFlag = ({ notRequiredLabel }: LabelProps) => (
  <span className="ams-label__not-required">
    <span className="ams-visually-hidden">,</span> ({notRequiredLabel})
  </span>
)

export const Label = forwardRef(
  (
    { children, className, notRequiredLabel = 'niet verplicht', required, ...restProps }: LabelProps,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => (
    <label {...restProps} ref={ref} className={clsx('ams-label', className)}>
      {children}
      {required === false && notRequiredLabel && <LabelOptionalFlag notRequiredLabel={notRequiredLabel} />}
    </label>
  ),
)

Label.displayName = 'Label'
