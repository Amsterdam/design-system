/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import type { HintProps } from '../Hint'

import { Hint } from '../Hint'

export type LabelProps = {
  /**
   * Whether the label is nested inside a fieldset.
   * This will show the label in a lighter style.
   */
  inFieldSet?: boolean
  /**
   * Render a level 1 heading around the label.
   * Set this if the Field is the only content of the page.
   */
  isPageHeading?: boolean
} & HintProps &
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-label--docs Label docs at Amsterdam Design System}
 */
export const Label = forwardRef(
  (
    { children, className, hint, inFieldSet, isPageHeading, optional, ...restProps }: LabelProps,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => {
    const labelElement = (
      <label {...restProps} className={clsx('ams-label', inFieldSet && 'ams-label--in-fieldset', className)} ref={ref}>
        {children} <Hint hint={hint} inFieldSet={inFieldSet} optional={optional} />
      </label>
    )

    return isPageHeading ? <h1 className="ams-label__heading">{labelElement}</h1> : labelElement
  },
)

Label.displayName = 'Label'
