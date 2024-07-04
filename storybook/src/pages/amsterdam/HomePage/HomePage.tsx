import { Overlap } from '@amsterdam/design-system-react'
import { HomeNews } from './HomeNews'
import { HomeSpotlight } from './HomeSpotlight'
import { HomeTopTasks } from './HomeTopTasks'
import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'

export const HomePage = () => (
  <main id="main">
    <Overlap>{OverlapStory.args?.children}</Overlap>
    <HomeTopTasks />
    <HomeSpotlight />
    <HomeNews />
  </main>
)
