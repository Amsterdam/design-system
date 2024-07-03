/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FooterProps } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import type { ReactElement } from 'react'
import { ArticlePage } from './ArticlePage'
import * as FooterStories from '../../../components/Footer/Footer.stories'
import * as ImageStories from '../../../components/Image/Image.stories'

const meta = {
  title: 'Pages/Amsterdam.nl/Article Page',
  component: ArticlePage,
  args: {
    footer: FooterStories.Default.args?.children as ReactElement<FooterProps>,
    heading: 'Ontvang uw paspoort of ID-kaart in de zomer gratis thuis',
    imageSrc: ImageStories.LazyLoading.args?.src,
    lead: 'Niet meer naar het Stadsloket, maar thuis of op het werk uw nieuwe paspoort ontvangen. In juni en juli kan dat. Deze zomer bezorgt de gemeente reisdocumenten gratis aan huis. We doen dat om de drukte in de Stadsloketten te verminderen. En u hoeft maar 1 keer naar het Stadsloket.',
    paragraph1:
      'Van maandag 10 juni tot en met zaterdag 27 juli bezorgt de gemeente Amsterdam uw paspoort of ID-kaart gratis bij u thuis of op het werk. U moet wel naar het Stadsloket om uw reisdocument aan te vragen. Lees hier hoe het werkt.',
    spotlightHeading: 'Vraag een paspoort of ID-kaart aan',
    spotlightLinkLabel: 'Vraag nu een paspoort of ID-kaart aan',
  },
  argTypes: {
    footer: {
      table: { disable: true },
    },
  },
  parameters: {
    layout: 'fullscreen',
    themes: { themeOverride: 'Spacious' },
  },
} satisfies Meta<typeof ArticlePage>

export default meta

export const Default: StoryObj = {}
