/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { BreadcrumbProps, FooterProps } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { ReactElement } from 'react'
import { Article } from './Article'
import * as BreadcrumbStories from '../../../components/Breadcrumb/Breadcrumb.stories'
import * as FooterStories from '../../../components/Footer/Footer.stories'
import * as HeadingStories from '../../../components/Heading/Heading.stories'
import * as ImageStories from '../../../components/Image/Image.stories'

const meta = {
  title: 'Pages/Amsterdam.nl/Article',
  component: Article,
  args: {
    breadcrumb: BreadcrumbStories.Default.args?.children as ReactElement<BreadcrumbProps>,
    footer: FooterStories.Default.args?.children as ReactElement<FooterProps>,
    heading: HeadingStories.Default.args?.children as string,
    imageSrc: ImageStories.LazyLoading.args?.src,
  },
  argTypes: {
    breadcrumb: {
      table: { disable: true },
    },
    footer: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof Article>

export default meta

export const Default: StoryObj = {}
