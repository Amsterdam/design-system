/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Meta, StoryObj } from '@storybook/react-vite'

import type { NewsArticle } from './news-articles'

import { commonMeta } from '../common/config'
import { ArticlePage } from './ArticlePage'
import { newsArticles } from './news-articles'

const meta = {
  ...commonMeta,
  title: 'Pages/Amsterdam.nl/Article Page',
  component: ArticlePage,
} satisfies Meta<typeof ArticlePage>

export default meta

const getArgsFromNewsArticle = (id: number): NewsArticle | undefined => {
  return newsArticles.find((article) => article.id === id)
}

export const Default: StoryObj = {
  args: getArgsFromNewsArticle(1),
}
