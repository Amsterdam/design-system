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
  /** A site-wide title for the website or application. */
  appName?: string
  /** The brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
  /** A secondary menu of links and buttons. Use a Page Menu. Can include buttons to show the Mega Menu or a Search Field. */
  menu?: ReactNode
} & HTMLAttributes<HTMLElement>

export const Header = forwardRef(
  (
    {
      appName,
      className,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      menu,
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
    <header {...restProps} ref={ref} className={clsx('ams-header', className)}>
      <div className="ams-header__section">
        <a className="ams-header__logo-link" href={logoLink}>
          <span className="ams-visually-hidden">{logoLinkTitle}</span>
          <Logo brand={logoBrand} />
        </a>
        {appName && (
          <Heading className="ams-header__app-name" level={1} size="level-5">
            {appName}
          </Heading>
        )}
      </div>
      <div className="ams-header__section">{menu}</div>
    </header>
  ),
)

Header.displayName = 'Header'
