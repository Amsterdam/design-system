/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { anatomyLabels as internalNavigationPageLabels } from '../../pages/internal/NavigationPage/anatomyLabels'
import * as InternalNavigationPageStories from '../../pages/internal/NavigationPage/NavigationPage.stories'
import { anatomyLabels as articlePageLabels } from '../../pages/public/ArticlePage/anatomyLabels'
import * as ArticlePageStories from '../../pages/public/ArticlePage/ArticlePage.stories'
import { anatomyLabels as homePageLabels } from '../../pages/public/HomePage/anatomyLabels'
import * as HomePageStories from '../../pages/public/HomePage/HomePage.stories'
import { anatomyLabels as newsOverviewPageLabels } from '../../pages/public/NewsOverviewPage/anatomyLabels'
import * as NewsOverviewPageStories from '../../pages/public/NewsOverviewPage/NewsOverviewPage.stories'
import { PageAnatomy } from './PageAnatomy'

const meta = {
  title: 'Components/Docs/Page Anatomy',
} satisfies Meta<typeof PageAnatomy>

export default meta

type Story = StoryObj<typeof meta>

/**
 * Four pages, between them covering everything the drawing can show: a Spotlight and a full-bleed Image on the
 * Article Page, an Overlap and a run of repeated Grid Cells on the Home Page, a Subgrid holding a Cell that spans
 * all of its columns on the News Overview Page, and Compact Mode, a Menu column, a row-spanning Cell and a
 * transparent one on the internal Navigation Page. The fifth is the Home Page again, in a container the width of a
 * phone, where the three drawings no longer fit beside one another and buttons choose between them.
 */
export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      <PageAnatomy labels={articlePageLabels} of={ArticlePageStories} />
      <PageAnatomy labels={homePageLabels} of={HomePageStories} />
      <PageAnatomy labels={newsOverviewPageLabels} of={NewsOverviewPageStories} />
      <PageAnatomy labels={internalNavigationPageLabels} menu mode="compact" of={InternalNavigationPageStories} />
      <div style={{ maxInlineSize: '24rem' }}>
        <PageAnatomy labels={homePageLabels} of={HomePageStories} />
      </div>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
