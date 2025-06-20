/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageFooter, SkipLink } from '@amsterdam/design-system-react'
import { AppNavigation } from '@amsterdam/design-system-react/src'
import {
  BarChartFillIcon,
  CogwheelFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  HouseCanalFillIcon,
} from '@amsterdam/design-system-react-icons'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <AppHeader />

    <AppNavigation>
      <AppNavigation.Link href="#" icon={HouseCanalFillIcon} key={1}>
        Dashboard
      </AppNavigation.Link>
      <AppNavigation.Link href="#" icon={FolderFillIcon} key={2}>
        Projecten
      </AppNavigation.Link>
      <AppNavigation.Link href="#" icon={DocumentsFillIcon} key={2}>
        Rapportages
      </AppNavigation.Link>
      <AppNavigation.Link href="#" icon={BarChartFillIcon} key={2}>
        Analyses
      </AppNavigation.Link>
      <AppNavigation.Link href="#" icon={CogwheelFillIcon} key={2}>
        Instellingen
      </AppNavigation.Link>
    </AppNavigation>

    {children}

    <PageFooter>
      <PageFooter.Menu key={3}>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies</PageFooter.MenuLink>
      </PageFooter.Menu>
    </PageFooter>
  </>
)
