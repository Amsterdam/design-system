/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { Hint, HintProps } from '../Hint'

export type FieldSetProps = HintProps &
  PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
    /** Whether the field set has an input with a validation error */
    invalid?: boolean
    /** The text for the caption. */
    legend: string | ReactNode
  }

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-field-set--docs Field Set docs at Amsterdam Design System}
 */
export const FieldSet = forwardRef(
  (
    { children, className, hint, invalid, legend, optional, ...restProps }: FieldSetProps,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => {
    return (
      <fieldset
        {...restProps}
        className={clsx('ams-field-set', invalid && 'ams-field-set--invalid', className)}
        ref={ref}
      >
        <legend className="ams-field-set__legend">
          {legend} <Hint hint={hint} optional={optional} />
        </legend>
        {children}
      </fieldset>
    )
  },
)

FieldSet.displayName = 'FieldSet'
