/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph } from '@amsterdam/design-system-react'
import { StandaloneLink } from '@amsterdam/design-system-react/src'
import { DownloadIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react-vite'

const meta = {
  title: 'Components/Navigation/Standalone Link',
  component: StandaloneLink,
  args: {
    children: 'Bekijk alle onderwerpen',
    href: '#',
  },
  argTypes: {
    children: {
      description: 'The link text.',
      table: { disable: false },
    },
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    href: {
      description: 'The url for the link.',
      name: 'href',
      type: { name: 'string', required: false },
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
      table: {
        defaultValue: {
          summary: 'ChevronForwardIcon',
        },
      },
    },
  },
} satisfies Meta<typeof StandaloneLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const ContrastColour: Story = {
  args: {
    color: 'contrast',
  },
}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}

export const WithHeadingAndParagraph: Story = {
  args: {
    children: 'Bekijk alle werkzaamheden',
  },
  decorators: [
    (Story) => (
      <article style={{ maxWidth: '32rem' }}>
        <Story />
      </article>
    ),
  ],
  render: ({ children, ...args }) => (
    <article>
      <Heading className="ams-mb-s" level={2} size="level-3">
        Werkzaamheden
      </Heading>
      <Paragraph className="ams-mb-m">
        Lees waar en wanneer we werken aan nieuwbouw, groot onderhoud, herinrichting van straten en wegen, aanpak van
        parken of ontwikkeling van hele gebieden.
      </Paragraph>
      <StandaloneLink {...args}>{children}</StandaloneLink>
    </article>
  ),
}

export const WithCustomIcon: Story = {
  args: {
    children: 'Downloaden',
    icon: <DownloadIcon />,
  },
}
