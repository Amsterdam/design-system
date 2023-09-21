/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface AlertProps extends PropsWithChildren<HTMLAttributes<HTMLElement>> {}

export const Alert = forwardRef(({ children, className, ...restProps }: AlertProps, ref: ForwardedRef<HTMLElement>) => (
  <span {...restProps} ref={ref} className={clsx('amsterdam-alert', className)}>
    {children}
  </span>
))

Alert.displayName = 'Alert'
