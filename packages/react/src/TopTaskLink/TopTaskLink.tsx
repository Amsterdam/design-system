/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export const TopTaskLink = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-top-task-link', className)}>
      {children}
    </span>
  ),
)

TopTaskLink.displayName = 'TopTaskLink'
