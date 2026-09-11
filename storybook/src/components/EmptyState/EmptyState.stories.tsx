/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ComponentProps } from 'react'

import { Paragraph } from '@amsterdam/design-system-react'
import { WarningIcon } from '@amsterdam/design-system-react-icons'
import { EmptyState } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Feedback/Empty State',
  component: EmptyState,
  subcomponents: {
    'EmptyState.Heading': EmptyState.Heading,
    'EmptyState.Icon': EmptyState.Icon,
  },
} satisfies Meta<typeof EmptyState>

export default meta

type DefaultProps = {
  description: string
  heading: string
} & Readonly<ComponentProps<typeof EmptyState>>

type DefaultStory = StoryObj<DefaultProps>

export const Default: DefaultStory = {
  args: {
    description: 'Er zijn geen resultaten gevonden voor uw zoekopdracht. Probeer alstublieft een andere zin.',
    heading: 'Er zijn geen resultaten gevonden',
  },
  argTypes: {
    description: { control: 'text' },
    heading: { control: 'text' },
  },
  render: ({ description, heading, ...args }) => (
    <EmptyState {...args}>
      <EmptyState.Icon size="heading-1" svg={WarningIcon} />
      <EmptyState.Heading level={2}>{heading}</EmptyState.Heading>
      <Paragraph>{description}</Paragraph>
    </EmptyState>
  ),
}
