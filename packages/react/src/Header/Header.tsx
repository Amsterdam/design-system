/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { MenuIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext } from 'react'
import type { AnchorHTMLAttributes, ForwardedRef, HTMLAttributes, PropsWithChildren } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { LinkList } from '../LinkList'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { MegaMenuNavigationContext, MegaMenuNavigationContextProvider } from './MegaMenuNavigationContext'
// import { MegaMenuListCategory } from '../MegaMenu/MegaMenuListCategory'
// import { MegaMenu } from '../MegaMenu'

type HeaderNavigationProps = {
  label?: string
} & PropsWithChildren

export const HeaderNavigation = ({ children, label = 'Hoofdnavigatie' }: HeaderNavigationProps) => (
  <nav className="ams-header__navigation-lite" aria-labelledby="primary-navigation">
    <h2 id="primary-navigation" className="ams-visually-hidden">
      {label}
    </h2>
    {children}
  </nav>
)

export const HeaderMenu = ({ children }: PropsWithChildren) => <ul className="ams-header__menu">{children}</ul>

type HeaderMenuLinkProps = {
  secondary?: boolean
} & PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

export const HeaderMenuLink = ({ children, secondary, ...restProps }: HeaderMenuLinkProps) => (
  <li className={clsx(secondary && 'ams-header__menu-item--secondary')}>
    <a {...restProps} className="ams-header__menu-link">
      {children}
    </a>
  </li>
)

// TODO: alles wat begint met MegaMenu naar apart component verplaatsen.
// MegaMenuNavigation? Met MegaMenuNavigation.Button, MegaMenuNavigation.Menu, MegaMenuNavigation.SecondaryLinkList, MegaMenuNavigation.SecondaryLinkListLink

type MegaMenuNavigationProps = {
  logoBrand?: LogoBrand
  appName?: string
  label?: string
} & PropsWithChildren

export const MegaMenuNavigation = ({
  children,
  logoBrand = 'amsterdam',
  appName,
  label = 'Hoofdnavigatie',
}: MegaMenuNavigationProps) => (
  <nav className="ams-mega-menu-navigation" aria-labelledby="primary-navigation">
    <h2 id="primary-navigation" className="ams-visually-hidden">
      {label}
    </h2>
    {/* The logo and app name section is recreated here, to make sure the page menu breaks at the right spot */}
    <div className="ams-header__section" aria-hidden style={{ opacity: 0 }}>
      <div className="ams-header__logo-link">
        <Logo brand={logoBrand} />
      </div>
      {appName && <span className="ams-heading ams-heading--level-5 ams-header__app-name">{appName}</span>}
    </div>
    <MegaMenuNavigationContextProvider>{children}</MegaMenuNavigationContextProvider>
  </nav>
)

export const MegaMenuButton = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  const { open, setOpen } = useContext(MegaMenuNavigationContext)

  return (
    <li>
      <button
        {...restProps}
        type="button"
        className="ams-page-menu__button"
        aria-controls="ams-mega-menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        <span className="ams-visually-hidden">{open ? 'Verberg ' : 'Toon '}</span>
        {children}
        <Icon svg={MenuIcon} size="level-6" />
      </button>
    </li>
  )
}

export const MegaMenuNavigationMenu = ({ children }: PropsWithChildren) => {
  const { open } = useContext(MegaMenuNavigationContext)

  return (
    <Grid className={clsx('ams-mega-menu', !open && 'ams-mega-menu--closed')} id="ams-mega-menu" paddingBottom="large">
      {children}
    </Grid>
  )
}

export const MegaMenuSecondaryLinkList = ({ children }: PropsWithChildren) => (
  <LinkList className="ams-mega-menu__secondary-link-list">{children}</LinkList>
)

export const MegaMenuSecondaryLinkListLink = ({
  children,
  ...restProps
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) => (
  <LinkList.Link {...restProps}>{children}</LinkList.Link>
)

export type HeaderProps = {
  /** A site-wide title for the website or application. */
  appName?: string
  hasMegaMenu?: boolean
  /** The brand for which to display the logo. */
  logoBrand?: LogoBrand
  /** The url for the link on the logo. */
  logoLink?: string
  /** The accessible text for the link on the logo. */
  logoLinkTitle?: string
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Header = forwardRef(
  (
    {
      appName,
      children,
      className,
      hasMegaMenu,
      logoBrand = 'amsterdam',
      logoLink = '/',
      logoLinkTitle = 'Ga naar de homepage',
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    return (
      <header
        {...restProps}
        ref={ref}
        className={clsx('ams-header', hasMegaMenu && 'ams-header--has-mega-menu', className)}
      >
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
        {children}
      </header>
    )
  },
)

Header.displayName = 'Header'
