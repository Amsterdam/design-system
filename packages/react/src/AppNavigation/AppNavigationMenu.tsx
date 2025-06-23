/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { ForwardedRef, forwardRef, OlHTMLAttributes, PropsWithChildren } from 'react'

export type AppNavigationMenuProps = PropsWithChildren<OlHTMLAttributes<HTMLOListElement>>

export const AppNavigationMenu = forwardRef(
  ({ children, className, ...restProps }: AppNavigationMenuProps, ref: ForwardedRef<HTMLOListElement>) => (
    <ol className={clsx('ams-app-navigation__menu', className)} ref={ref} {...restProps}>
      {children}
    </ol>
  ),
)

AppNavigationMenu.displayName = 'AppNavigation.Menu'
