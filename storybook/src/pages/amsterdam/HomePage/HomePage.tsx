/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Overlap } from '@amsterdam/design-system-react'

import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'
import { HomeNews } from './HomeNews'
import { HomeSpotlight } from './HomeSpotlight'
import { HomeTopTasks } from './HomeTopTasks'

export const HomePage = () => (
  <main id="main">
    <Overlap>{OverlapStory.args?.children}</Overlap>
    <HomeTopTasks />
    <HomeSpotlight />
    <HomeNews />
  </main>
)
