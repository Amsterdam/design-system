/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'

export type HeaderProps = {
  /** The name of the application. */
  appName?: string
  /** The list of menu links. Use a Page Menu here. */
  links?: ReactNode
  /** The name of the brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** A button to toggle the visibility of a Mega Menu. */
  menu?: ReactNode
} & HTMLAttributes<HTMLElement>

export const Header = forwardRef(
  (
    {
      appName,
      className,
      links,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <>
        <header {...restProps} ref={ref} className={clsx('ams-header', className)}>
          <a href={logoLink} className="ams-header__logo-link">
            <span className="ams-visually-hidden">{logoLinkTitle}</span>
            <Logo brand={logoBrand} />
          </a>
          {links && <div className="ams-header__links">{links}</div>}
          {menu && <div className="ams-header__menu">{menu}</div>}
          {appName && (
            <div className="ams-header__app-name">
              <Heading level={1} size="level-3" className="ams-header__app-name-heading">
                {appName}
              </Heading>
            </div>
          )}
        </header>
      </>
    )
  },
)

Header.displayName = 'Header'
