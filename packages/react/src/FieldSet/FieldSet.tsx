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
  /** Whether the field set is not required. */
  notRequired?: boolean
  /** Text to inform the user that the field is explicitely not required. */
  notRequiredLabel?: string
}

export const FieldSet = forwardRef(
  (
    {
      children,
      className,
      invalid,
      legend,
      notRequiredLabel = 'niet verplicht',
      notRequired,
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
        {notRequired === true && (
          <em className="ams-field-set__legend--not-required">
            <span className="ams-visually-hidden">,</span> ({notRequiredLabel})
          </em>
        )}
      </legend>
      {children}
    </fieldset>
  ),
)

FieldSet.displayName = 'FieldSet'
