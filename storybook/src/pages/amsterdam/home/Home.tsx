import { Footer, Overlap, Screen, SkipLink } from '@amsterdam/design-system-react'
import type { FooterProps } from '@amsterdam/design-system-react'
import { ReactElement } from 'react'
import { HomeNews } from './HomeNews'
import { HomeSpotlight } from './HomeSpotlight'
import { HomeTopTasks } from './HomeTopTasks'
import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'
import SkipLinkStoryMeta from '../../../components/SkipLink/SkipLink.stories'
import { AppHeader } from '../common/AppHeader'

type HomeProps = {
  footer: ReactElement<FooterProps>
}

export const Home = ({ footer }: HomeProps) => (
  <>
    <SkipLink href="#main">{SkipLinkStoryMeta.args.children}</SkipLink>
    <Screen maxWidth="wide">
      <AppHeader />
      <main id="main">
        <Overlap>{OverlapStory.args?.children}</Overlap>
        <HomeTopTasks />
        <HomeSpotlight />
        <HomeNews />
      </main>
      <Footer>{footer}</Footer>
    </Screen>
  </>
)
