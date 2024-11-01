/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { MenuIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef, useContext, useState } from 'react'
import type {
  AnchorHTMLAttributes,
  ForwardedRef,
  HTMLAttributes,
  LiHTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { Icon } from '../Icon'
import { LinkList } from '../LinkList'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { HeaderNavigationContext, HeaderNavigationContextProvider } from './HeaderNavigationContext'
import { MegaMenuListCategory } from '../MegaMenu/MegaMenuListCategory'
// import { MegaMenu } from '../MegaMenu'

type HeaderNavigationProps = {
  children: ReactNode
  logoBrand: LogoBrand
  appName?: string
  label?: string
}

// TODO: hier willen we misschien een los component van maken, geen subcomponent van Header.
// Als je geen mega menu hebt, dan hoef je ook niet logo en app na te maken en context in te laden e.d.
// Als we er een subcomponent van maken, dan kun je 'm gelijk niet meer als server component gebruiken denk ik

const HeaderNavigation = ({ children, logoBrand, appName, label = 'Hoofdnavigatie' }: HeaderNavigationProps) => {
  return (
    <nav className="ams-header__navigation" aria-labelledby="primary-navigation">
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
      <HeaderNavigationContextProvider>{children}</HeaderNavigationContextProvider>
    </nav>
  )
}

const HeaderMenu = ({ children }: { children: ReactNode }) => <ul className="ams-header__menu">{children}</ul>

type HeaderMenuItemProps = {
  secondary?: boolean
} & PropsWithChildren<LiHTMLAttributes<HTMLLIElement>>

const HeaderMenuItem = ({ children, secondary }: HeaderMenuItemProps) => (
  <li className={clsx('ams-header__menu-item', secondary && 'ams-header__menu-item__secondary')}>{children}</li>
)

type HeaderMenuLinkProps = PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>

const HeaderMenuLink = ({ children, ...restProps }: HeaderMenuLinkProps) => (
  <a {...restProps} className={clsx('ams-header__menu-link')}>
    {children}
  </a>
)

const MegaMenuButton = ({ children, ...restProps }: PropsWithChildren<HTMLAttributes<HTMLButtonElement>>) => {
  const { open, setOpen } = useContext(HeaderNavigationContext)

  return (
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
  )
}

const MegaMenu = ({ children }: PropsWithChildren) => {
  const { open } = useContext(HeaderNavigationContext)

  return (
    <Grid
      className={clsx(!open && 'ams-header__mega-menu--closed')}
      paddingBottom="large"
      style={{ width: '100%', pointerEvents: 'auto' }}
      id="ams-mega-menu"
    >
      {children}
    </Grid>
  )
}

// TODO: MegaMenuSecondaryLinks maken, lijstje met links die worden getoond op kleinere schermen. Secondary als prop?

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
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
      setOpen(!open)
    }

    return (
      <>
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
          <HeaderNavigation logoBrand={logoBrand} appName={appName}>
            <HeaderMenu>
              <HeaderMenuItem secondary>
                <HeaderMenuLink href="#" lang="en">
                  English
                </HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem secondary>
                <HeaderMenuLink href="#">Mijn Amsterdam</HeaderMenuLink>
              </HeaderMenuItem>
              <HeaderMenuItem>
                <MegaMenuButton onClick={handleClick}>Menu</MegaMenuButton>
              </HeaderMenuItem>
            </HeaderMenu>
            <MegaMenu>
              <Grid.Cell span="all">
                <Heading level={1} size="level-2">
                  Alle onderwerpen
                </Heading>
                <MegaMenuListCategory>
                  <LinkList>
                    <LinkList.Link href="#">Afval</LinkList.Link>
                    <LinkList.Link href="#">Bestuur en organisatie</LinkList.Link>
                    <LinkList.Link href="#">Bouw- en verkeersprojecten</LinkList.Link>
                    <LinkList.Link href="#">Burgerzaken</LinkList.Link>
                    <LinkList.Link href="#">Diversiteit</LinkList.Link>
                    <LinkList.Link href="#">Gemeentebelastingen</LinkList.Link>
                    <LinkList.Link href="#">Gezondheidsdienst (GGD)</LinkList.Link>
                    <LinkList.Link href="#">Kunst en cultuur</LinkList.Link>
                    <LinkList.Link href="#">Ondernemen</LinkList.Link>
                    <LinkList.Link href="#">Onderwijs en jeugd</LinkList.Link>
                    <LinkList.Link href="#">Parkeren</LinkList.Link>
                    <LinkList.Link href="#">Sport</LinkList.Link>
                    <LinkList.Link href="#">Stadsdelen</LinkList.Link>
                    <LinkList.Link href="#">Subsidies</LinkList.Link>
                    <LinkList.Link href="#">Vacatures</LinkList.Link>
                    <LinkList.Link href="#">Verkeer en vervoer</LinkList.Link>
                    <LinkList.Link href="#">Vrije tijd</LinkList.Link>
                    <LinkList.Link href="#">Werk aan de weg</LinkList.Link>
                    <LinkList.Link href="#">Werk en inkomen</LinkList.Link>
                    <LinkList.Link href="#">Wonen en leefomgeving</LinkList.Link>
                    <LinkList.Link href="#">Zorg en ondersteuning</LinkList.Link>
                  </LinkList>
                </MegaMenuListCategory>
              </Grid.Cell>
            </MegaMenu>
          </HeaderNavigation>
        </header>
        <p>hallo</p>
      </>
    )
  },
)

Header.displayName = 'Header'
