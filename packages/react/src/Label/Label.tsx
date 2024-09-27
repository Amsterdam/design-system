/**
 * @license EUPL-1.2+
 * Copyright (c) 2021 Robbert Broersma
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, LabelHTMLAttributes, PropsWithChildren } from 'react'
import { Hint, HintProps } from '../Hint'

export type LabelProps = PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>> & HintProps

export const Label = forwardRef(
  ({ children, className, hint, optional, ...restProps }: LabelProps, ref: ForwardedRef<HTMLLabelElement>) => {
    return (
      <label {...restProps} ref={ref} className={clsx('ams-label', className)}>
        {children} <Hint hint={hint} optional={optional} />
      </label>
    )
  },
)

Label.displayName = 'Label'
