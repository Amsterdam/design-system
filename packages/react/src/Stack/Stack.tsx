/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { type ForwardedRef, forwardRef, type HTMLAttributes, type PropsWithChildren } from 'react'

export const Stack = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-stack', className)}>
      {children}
    </div>
  ),
)

Stack.displayName = 'Stack'
