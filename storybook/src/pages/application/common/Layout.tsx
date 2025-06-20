/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageFooter, SkipLink } from '@amsterdam/design-system-react'
import { App, AppNavigation, PageHeader } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  CogwheelFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HouseCanalFillIcon,
} from '@amsterdam/design-system-react-icons'
import clsx from 'clsx'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { LayoutProvider, useLayoutContext } from './LayoutContext'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

const LayoutContent = ({ children }: LayoutProps) => {
  const { appNavigationOpen, setAppNavigationOpen } = useLayoutContext()

  return (
    <App>
      {/* Skiplink is stuk, grid positie maken? */}
      <SkipLink href="#main">Direct naar inhoud</SkipLink>

      <PageHeader
        appnavigation
        appNavigationExpanded={setAppNavigationOpen}
        brandName="Application"
        menuItems={[
          <PageHeader.MenuLink href="#" key="1">
            Inloggen
          </PageHeader.MenuLink>,
        ]}
        noMenuButtonOnWideWindow
      ></PageHeader>

      <AppNavigation aria-label="Main" className={clsx(appNavigationOpen && 'ams-app-navigation--open')}>
        <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1}>
          Dashboard
        </AppNavigation.Link>
        <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2}>
          Projecten
        </AppNavigation.Link>
        <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3}>
          Rapportages
        </AppNavigation.Link>
        <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4}>
          Analyses
        </AppNavigation.Link>
        <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5}>
          Instellingen
        </AppNavigation.Link>
      </AppNavigation>

      <main className="ams-app-content" id="main">
        {children}
      </main>

      <PageFooter>
        <PageFooter.Menu key={3}>
          <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
          <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
        </PageFooter.Menu>
      </PageFooter>
    </App>
  )
}

export const Layout = (props: LayoutProps) => (
  <LayoutProvider>
    <LayoutContent {...props} />
  </LayoutProvider>
)
