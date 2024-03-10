/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

type ScreenMaxWidth = 'wide' | 'x-wide'

export type ScreenProps = {
  maxWidth?: ScreenMaxWidth
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const Screen = forwardRef(
  ({ children, className, maxWidth = 'wide', ...restProps }: ScreenProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} ref={ref} className={clsx('ams-screen', `ams-screen--${maxWidth}`, className)}>
      {children}
    </div>
  ),
)

Screen.displayName = 'Screen'
