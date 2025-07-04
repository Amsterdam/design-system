/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'

export type AppProps = {
  fullscreen?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-app--docs App docs at Amsterdam Design System}
 */
export const App = forwardRef(
  ({ children, className, fullscreen = false, ...restProps }: AppProps, ref: ForwardedRef<HTMLDivElement>) => (
    <div {...restProps} className={clsx('ams-app', fullscreen && 'ams-app--fullscreen', className)} ref={ref}>
      {children}
    </div>
  ),
)

App.displayName = 'App'
