/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageFooter, SkipLink } from '@amsterdam/design-system-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <AppHeader />
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
