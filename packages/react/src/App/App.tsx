/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import type { ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { AppContext } from './AppContext'
import { AppHeader } from './AppHeader'

export type AppProps = {
  centered?: boolean
  fullscreen?: boolean
} & PropsWithChildren<HTMLAttributes<HTMLDivElement>>

export const AppRoot = forwardRef(
  (
    { centered = true, children, className, fullscreen = false, ...restProps }: AppProps,
    ref: ForwardedRef<HTMLDivElement>,
  ) => {
    const innerRef = useRef<HTMLDivElement>(null)
    const [appNavigationOpen, setAppNavigationOpen] = useState(false)

    // use a passed ref if it's there, otherwise use innerRef
    useImperativeHandle(ref, () => innerRef.current as HTMLDivElement)

    return (
      <AppContext.Provider value={{ appNavigationOpen, setAppNavigationOpen }}>
        <div
          {...restProps}
          className={clsx('ams-app', centered && 'ams-app--centered', fullscreen && 'ams-app--fullscreen', className)}
          ref={innerRef}
        >
          {children}
        </div>
      </AppContext.Provider>
    )
  },
)

AppRoot.displayName = 'App'

/**
 * @see {@link https://designsystem.amsterdam/?path=/docs/components-containers-app--docs App docs at Amsterdam Design System}
 */
export const App = Object.assign(AppRoot, { Header: AppHeader })
