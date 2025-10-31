/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HintProps } from '../Hint'

import { Hint } from '../Hint'

export type FieldSetProps = {
  /** Whether the field set has an input with a validation error. */
  invalid?: boolean
  /** The text for the caption. */
  legend: string
  /**
   * Render a level 1 heading in the legend.
   * Set this if the Field Set is the only content of the page.
   */
  legendIsPageHeading?: boolean
} & HintProps &
  PropsWithChildren<HTMLAttributes<HTMLFieldSetElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-field-set--docs Field Set docs at Amsterdam Design System}
 */
export const FieldSet = forwardRef(
  (
    { children, className, hint, invalid, legend, legendIsPageHeading, optional, ...restProps }: FieldSetProps,
    ref: ForwardedRef<HTMLFieldSetElement>,
  ) => {
    const legendContent = (
      <>
        {legend} <Hint hint={hint} optional={optional} />
      </>
    )

    return (
      <fieldset
        {...restProps}
        className={clsx('ams-field-set', invalid && 'ams-field-set--invalid', className)}
        ref={ref}
      >
        <legend className="ams-field-set__legend">
          {legendIsPageHeading ? <h1 className="ams-field-set__heading">{legendContent}</h1> : legendContent}
        </legend>
        {children}
      </fieldset>
    )
  },
)

FieldSet.displayName = 'FieldSet'
