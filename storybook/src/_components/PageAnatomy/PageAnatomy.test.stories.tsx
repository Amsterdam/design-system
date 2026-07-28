/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { anatomyLabels as articlePageLabels } from '../../pages/public/ArticlePage/anatomyLabels'
import * as ArticlePageStories from '../../pages/public/ArticlePage/ArticlePage.stories'
import { anatomyLabels as homePageLabels } from '../../pages/public/HomePage/anatomyLabels'
import * as HomePageStories from '../../pages/public/HomePage/HomePage.stories'
import { PageAnatomy } from './PageAnatomy'

const meta = {
  title: 'Components/Docs/Page Anatomy',
} satisfies Meta<typeof PageAnatomy>

export default meta

type Story = StoryObj<typeof meta>

/** Two pages, because the Home Page is the one that opens with an Overlap. */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      <PageAnatomy labels={articlePageLabels} of={ArticlePageStories} />
      <PageAnatomy labels={homePageLabels} of={HomePageStories} />
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
