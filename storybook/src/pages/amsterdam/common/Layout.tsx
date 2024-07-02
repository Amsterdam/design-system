import { Screen, SkipLink } from '@amsterdam/design-system-react'
import { HTMLAttributes, type PropsWithChildren } from 'react'
import { AppHeader } from './AppHeader'
import { Default as FooterStory } from '../../../components/Footer/Footer.stories'

type LayoutProps = PropsWithChildren<HTMLAttributes<HTMLElement>>

export const Layout = ({ children }: LayoutProps) => (
  <>
    <SkipLink href="#main">Direct naar inhoud</SkipLink>
    <Screen maxWidth="wide">
      <AppHeader />
      {children}
      {FooterStory.args?.children}
    </Screen>
  </>
)
