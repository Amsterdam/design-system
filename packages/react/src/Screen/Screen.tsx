/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

export interface ScreenProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  fullWidth?: Boolean
}

export const Screen = forwardRef(
  ({ children, className, fullWidth, ...restProps }: ScreenProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-screen', fullWidth && 'amsterdam-screen--full-width', className)}
    >
      {children}
    </div>
  ),
)

Screen.displayName = 'Screen'
