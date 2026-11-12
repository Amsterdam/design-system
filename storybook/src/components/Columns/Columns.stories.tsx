/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { LinkList, Paragraph, UnorderedList } from '@amsterdam/design-system-react'
import { Columns } from '@amsterdam/design-system-react/src'
import { columnsCounts } from '@amsterdam/design-system-react/src/Columns/Columns'

import { childrenArgType } from '#storybook/_common/argTypes'
import { exampleParagraph, topics } from '#storybook/_common/exampleContent'

const paragraphs = Array.from({ length: 3 }, exampleParagraph)

const meta = {
  title: 'Components/Layout/Columns',
  component: Columns,
  argTypes: {
    children: childrenArgType('The content to flow into columns.'),
    count: {
      control: {
        labels: { undefined: '2 (default)' },
        type: 'radio',
      },
      options: [undefined, ...columnsCounts],
    },
  },
} satisfies Meta<typeof Columns>

export default meta

type Story = StoryObj<typeof meta>

const topicLinks = (
  <LinkList>
    {topics.map((topic) => (
      <LinkList.Link href="#" key={topic}>
        {topic}
      </LinkList.Link>
    ))}
  </LinkList>
)

export const Default: Story = {
  args: {
    children: topicLinks,
  },
}

export const ResponsiveCount: Story = {
  args: {
    children: topicLinks,
    count: { narrow: 1, medium: 2, wide: 3 },
  },
}

export const WithUnorderedList: Story = {
  args: {
    children: (
      <UnorderedList>
        <UnorderedList.Item>3 x FIFA-gecertificeerde kunstgrasvelden naast elkaar</UnorderedList.Item>
        <UnorderedList.Item>
          Twee van de velden kunnen worden gekoppeld tot één groot veld voor cricket
        </UnorderedList.Item>
        <UnorderedList.Item>Veld drie is tevens een jeugdhonkbalveld met blauwe honkbalbelijning</UnorderedList.Item>
        <UnorderedList.Item>Beachvolleybal</UnorderedList.Item>
        <UnorderedList.Item>Cricketveld en -pitch</UnorderedList.Item>
        <UnorderedList.Item>Verenigingsgebouw</UnorderedList.Item>
        <UnorderedList.Item>
          400 meter lange atletiekbaan, in het midden ligt een veld voor uiteenlopende sporten en spellen
        </UnorderedList.Item>
        <UnorderedList.Item>
          Atletiekgebouw met ruimte voor vergaderen, wedstrijdsecretariaat, 2 kleedkamers, invalidentoilet en ruimte
          voor scheidsrechters en EHBO
        </UnorderedList.Item>
        <UnorderedList.Item>Multifunctioneel verenigingsgebouw met 8 kleedkamers en sportkantine</UnorderedList.Item>
      </UnorderedList>
    ),
  },
}

export const WithProse: Story = {
  args: {
    children: paragraphs.map((paragraph, index) => <Paragraph key={index}>{paragraph}</Paragraph>),
    className: 'ams-prose',
  },
}
