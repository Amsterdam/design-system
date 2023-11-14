/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, HTMLAttributes, PropsWithChildren } from 'react'

type ScreenAlign = 'center' | 'start'
type ScreenMaxWidth = 'wide' | 'x-wide'

export interface ScreenProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  align?: ScreenAlign
  maxWidth?: ScreenMaxWidth
}

export const Screen = forwardRef(
  (
    { align = 'center', children, className, maxWidth, ...restProps }: ScreenProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => (
    <div
      {...restProps}
      ref={ref}
      className={clsx('amsterdam-screen', `amsterdam-screen--${align}`, `amsterdam-screen--${maxWidth}`, className)}
    >
      {children}
    </div>
  ),
)

Screen.displayName = 'Screen'
