import { PageFooter, SkipLink } from '@amsterdam/design-system-react'
import type { HTMLAttributes, PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'
import { Default as FooterStory } from '../../../components/Footer/Footer.stories'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <AppHeader />
    {children}
    <PageFooter>{FooterStory.args?.children}</PageFooter>
  </>
)
