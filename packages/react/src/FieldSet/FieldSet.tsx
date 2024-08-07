/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { LabelOptionalFlag } from '../Label/Label'

export type FieldSetProps = PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
  /** Whether the field set has an input with a validation error */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
  /** Text to inform the user that the field is explicitely not required. */
  notRequiredLabel?: string
  /** Whether the field set is required. */
  required?: boolean
}

export const FieldSet = forwardRef(
  (
    {
      children,
      className,
      invalid,
      legend,
      required,
      notRequiredLabel = 'niet verplicht',
      ...restProps
    }: FieldSetProps,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => (
    <fieldset
      {...restProps}
      ref={ref}
      className={clsx('ams-field-set', invalid && 'ams-field-set--invalid', className)}
    >
      <legend className="ams-field-set__legend">
        {legend}
        {required === false && notRequiredLabel && <LabelOptionalFlag notRequiredLabel={notRequiredLabel} />}
      </legend>
      {children}
    </fieldset>
  ),
)

FieldSet.displayName = 'FieldSet'
