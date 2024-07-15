/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { MenuIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Button } from '../Button'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
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
  ) => (
    <header {...restProps} className={clsx('ams-header', className)} ref={ref}>
      <a className="ams-header__logo-link" href={logoLink}>
        <span className="ams-visually-hidden">{logoLinkTitle}</span>
        <Logo brand={logoBrand} />
      </a>
      {appName && (
        <Heading className="ams-header__app-name" level={1} size="level-6">
          {appName}
        </Heading>
      )}
      {links && <div className="ams-header__links">{links}</div>}
      {menu && (
        <Button className="ams-header__menu-button" variant={'tertiary'}>
          Menu <Icon svg={MenuIcon} size="level-6" />
        </Button>
      )}
    </header>
  ),
)

Header.displayName = 'Header'
