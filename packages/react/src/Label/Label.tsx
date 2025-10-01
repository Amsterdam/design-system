/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'

import { clsx } from 'clsx'
import { forwardRef } from 'react'

import { Hint, HintProps } from '../Hint'

export type LabelProps = HintProps &
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & {
    /**
     * Render a level 1 heading around the label.
     * Set this if the Field is the only content of the page.
     */
    isPageHeading?: boolean
  }

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-forms-label--docs Label docs at Amsterdam Design System}
 */
export const Label = forwardRef(
  (
    { children, className, hint, isPageHeading, optional, ...restProps }: LabelProps,
    ref: ForwardedRef<HTMLLabelElement>,
  ) => {
    const labelElement = (
      <label {...restProps} className={clsx('ams-label', className)} ref={ref}>
        {children} <Hint hint={hint} optional={optional} />
      </label>
    )

    return isPageHeading ? <h1 className="ams-label__heading">{labelElement}</h1> : labelElement
  },
)

Label.displayName = 'Label'
