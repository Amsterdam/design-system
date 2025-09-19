/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { Hint, HintProps } from '@amsterdam/design-system-react/src/Hint'
import { clsx } from 'clsx'
import { forwardRef } from 'react'

export type FieldSetProps = HintProps &
  PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>> & {
    /** Whether the field set has an input with a validation error */
    invalid?: boolean
    /** The text for the caption. */
    legend: string
  }

export const FieldSetWithHeading = forwardRef(
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
          <h1 style={{ fontSize: 'inherit', fontWeight: 'inherit', marginBlock: 0 }}>
            {legend} <Hint hint={hint} optional={optional} />
          </h1>
        </legend>
        {children}
      </fieldset>
    )
  },
)

FieldSetWithHeading.displayName = 'FieldSetWithHeading'
