/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { MenuIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Heading } from '../Heading'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { PageMenu } from '../PageMenu'

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
      <nav className="ams-header__navigation">
        {/* The logo and appname section is recreated here, to make sure the pagemenu breaks at the right spot */}
        <div className="ams-header__section" aria-hidden style={{ opacity: 0 }}>
          <div className="ams-header__logo-link">
            <Logo brand={logoBrand} />
          </div>
          {appName && <span className="ams-heading ams-heading--level-5 ams-header__app-name">{appName}</span>}
        </div>
        <div className="ams-header__section" style={{ pointerEvents: 'auto' }}>
          <PageMenu alignEnd>
            <PageMenu.Item rank="secondary">
              <PageMenu.Link href="#" lang="en">
                English
              </PageMenu.Link>
            </PageMenu.Item>
            <PageMenu.Item rank="secondary">
              <PageMenu.Link href="#">Mijn Amsterdam</PageMenu.Link>
            </PageMenu.Item>
            <PageMenu.Item>
              <PageMenu.Button icon={MenuIcon} onClick={() => {}}>
                Menu
              </PageMenu.Button>
            </PageMenu.Item>
          </PageMenu>
        </div>
        {menu}
      </nav>
    </header>
  ),
)

Header.displayName = 'Header'
