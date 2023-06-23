/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Heading, Icon } from '@amsterdam/design-system-react/src'
import { Alert, Building, Camera, Email } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

import '@amsterdam/design-system-css/src/icon/icon.scss'
import '@amsterdam/design-system-css/src/heading/heading.scss'

const icons = { Email, Alert, Building, Camera }

const meta = {
  title: 'Icon',
  component: Icon,
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    svg: {
      options: Object.keys(icons),
      mapping: icons,
    },
  },
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    svg: Email,
  },
}

export const WithText: Story = {
  render: (args) => (
    <span style={{ display: 'flex', gap: '1rem' }}>
      <Icon {...args} size="level-3" />
      <Heading size="level-3">Inline text</Heading>
    </span>
  ),
  args: {
    svg: Email,
  },
}

export const Level3: Story = {
  args: {
    svg: Email,
    size: 'level-3',
  },
}

export const Level4: Story = {
  args: {
    svg: Email,
    size: 'level-4',
  },
}

export const Level5: Story = {
  args: {
    svg: Email,
    size: 'level-5',
  },
}

export const Level6: Story = {
  args: {
    svg: Email,
    size: 'level-6',
  },
}

export const Level7: Story = {
  args: {
    svg: Email,
    size: 'level-7',
  },
}
