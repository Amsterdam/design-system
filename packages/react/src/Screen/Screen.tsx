/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type ScreenMaxWidth = 'wide' | 'x-wide'

export interface ScreenProps extends PropsWithChildren<HTMLAttributes<HTMLDivElement>> {
  maxWidth?: ScreenMaxWidth
}

export const Screen = forwardRef(
  ({ children, className, maxWidth = 'wide', ...restProps }: ScreenProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('amsterdam-screen', `amsterdam-screen--${maxWidth}`, className)}>
      {children}
    </div>
  ),
)

Screen.displayName = 'Screen'
