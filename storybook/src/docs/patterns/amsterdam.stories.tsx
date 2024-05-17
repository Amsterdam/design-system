/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react'
import { AmsterdamArticlePage } from './AmsterdamArticlePage'
import { AmsterdamPage } from './AmsterdamPage'
import * as BreadcrumbStories from '../../components/Breadcrumb/Breadcrumb.stories'
import * as FooterStories from '../../components/Footer/Footer.stories'
import * as ImageStories from '../../components/Image/Image.stories'

const meta = {
  title: 'Docs/Patterns/Amsterdam',
  component: AmsterdamArticlePage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof AmsterdamArticlePage>

export default meta

export const Homepage: StoryObj = {
  render: () => <AmsterdamPage />,
}

export const Article: StoryObj = {
  args: {
    articleImage: ImageStories.LazyLoading.args?.src,
    articleImageAlt: ImageStories.LazyLoading.args?.alt,
    breadcrumbs: BreadcrumbStories.Default.args?.children,
    footer: FooterStories.Default.args?.children,
  },
  // render: () => <AmsterdamArticlePage />,
}
