import { SkipLink } from '@amsterdam/design-system-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { AppFooter } from './AppFooter'
import { AppHeader } from './AppHeader'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <AppHeader />
    {children}
    <AppFooter />
  </>
)
