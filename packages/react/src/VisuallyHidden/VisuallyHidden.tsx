/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export const VisuallyHidden = forwardRef(
  (
    { children, className, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLElement>>,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <span {...restProps} ref={ref} className={clsx('amsterdam-visually-hidden', className)}>
      {children}
    </span>
  ),
)

VisuallyHidden.displayName = 'VisuallyHidden'
