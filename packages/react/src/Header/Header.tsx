/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { MenuIcon } from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import { forwardRef } from 'react'
import type { ForwardedRef, HTMLAttributes, ReactNode } from 'react'
import { Grid } from '../Grid'
import { Heading } from '../Heading'
import { LinkList } from '../LinkList'
import { Logo } from '../Logo'
import type { LogoBrand } from '../Logo'
import { MegaMenu } from '../MegaMenu'
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
      ...restProps
    }: HeaderProps,
    ref: ForwardedRef<HTMLElement>,
  ) => (
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
        <nav className="ams-header__navigation" aria-labelledby="primary-navigation">
          <h2 id="primary-navigation" className="ams-visually-hidden">
            Hoofdnavigatie
          </h2>
          {/* The logo and app name section is recreated here, to make sure the page menu breaks at the right spot */}
          <div className="ams-header__section" aria-hidden style={{ opacity: 0 }}>
            <div className="ams-header__logo-link">
              <Logo brand={logoBrand} />
            </div>
            {appName && <span className="ams-heading ams-heading--level-5 ams-header__app-name">{appName}</span>}
          </div>
          <PageMenu alignEnd className="ams-header__page-menu">
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
          <Grid paddingBottom="large" style={{ width: '100%', pointerEvents: 'auto' }}>
            <Grid.Cell span="all">
              <Heading level={1} size="level-2">
                Alle onderwerpen
              </Heading>
              <MegaMenu.ListCategory>
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
              </MegaMenu.ListCategory>
            </Grid.Cell>
          </Grid>
        </nav>
      </header>
      <p>hallo</p>
    </>
  ),
)

Header.displayName = 'Header'
