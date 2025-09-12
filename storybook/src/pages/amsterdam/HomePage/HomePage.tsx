/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Overlap } from '@amsterdam/design-system-react'
import { HomeNews } from './HomeNews'
import { HomeSpotlight } from './HomeSpotlight'
import { HomeTopTasks } from './HomeTopTasks'
import { Default as OverlapStory } from '../../../components/Overlap/Overlap.stories'

export const HomePage = () => (
  <main id="inhoud">
    <h1 className="ams-visually-hidden">Homepage van de gemeente Amsterdam</h1>
    <Overlap>{OverlapStory.args?.children}</Overlap>
    <HomeTopTasks />
    <HomeSpotlight />
    <HomeNews />
  </main>
)
