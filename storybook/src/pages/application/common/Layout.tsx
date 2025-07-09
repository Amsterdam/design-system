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
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

type LayoutProps = {
  navExpanded?: boolean
  navItems?: ReactNode
} & PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children, navExpanded, navItems }: LayoutProps) => (
  <App centered={false}>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>

    <App.Header
      appName="Application"
      appNavigation={[
        <PageHeader.MenuLink href="#" key="1">
          Inloggen
        </PageHeader.MenuLink>,
      ]}
    />

    <AppNavigation aria-label="Main" expanded={navExpanded}>
      {navItems ??
        (navItems || (
          <>
            <AppNavigation.Link href="#dashboard" icon={HouseCanalFillIcon} key={1} label="Dashboard" />
            <AppNavigation.Link href="#projecten" icon={FolderFillIcon} key={2} label="Projecten" />
            <AppNavigation.Link href="#rapportages" icon={DocumentsFillIcon} key={3} label="Rapportages" />
            <AppNavigation.Link href="#analyses" icon={BarChartFillIcon} key={4} label="Analyses" />
            <AppNavigation.Link href="#instellingen" icon={CogwheelFillIcon} key={5} label="Instellingen" />
          </>
        ))}
    </AppNavigation>

    <main className="ams-app-content" id="main">
      {children}
    </main>

    <PageFooter>
      <PageFooter.Menu>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  </App>
)
