import { Footer, Overlap, Screen, SkipLink } from '@amsterdam/design-system-react'
import type { FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { HomeNews } from './HomeNews'
import { HomeSpotlight } from './HomeSpotlight'
import { HomeTopTasks } from './HomeTopTasks'
import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'
import { Default as SkipLinkStory } from '../../../components/SkipLink/SkipLink.stories'
import { AppHeader } from '../common/AppHeader'

type HomeProps = {
  footer: ReactElement<FooterProps>
}

export const Home = ({ footer }: HomeProps) => (
  <>
    <SkipLink href="#main">{SkipLinkStory.args?.children}</SkipLink>
    <Screen maxWidth="wide">
      <AppHeader />
      <Overlap>{OverlapStory.args?.children}</Overlap>
      <HomeTopTasks />
      <HomeSpotlight />
      <HomeNews />
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
