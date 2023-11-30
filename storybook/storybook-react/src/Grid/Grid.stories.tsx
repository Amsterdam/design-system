/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Screen } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { paddingArgType } from '../shared/argTypes'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  argTypes: {
    paddingVertical: paddingArgType,
    paddingTop: paddingArgType,
    paddingBottom: paddingArgType,
  },
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <Screen>
        <Story />
      </Screen>
    ),
  ],
}

export const Default: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
  },
  name: 'Basis',
}

export const Compact: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: true,
  },
  name: 'Compact',
  parameters: {
    outline: 'visible',
  },
}

export const VerticalSpace: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(12).keys()).map((i) => <Grid.Cell className="amsterdam-docs-pink-box" key={i} />),
    compact: false,
    paddingVertical: 'medium',
  },
  name: 'Verticale marge',
}

export const VerticalGap: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(6).keys()).map((i) => (
      <Grid.Cell className="amsterdam-docs-pink-box" span={4} key={i} />
    )),
    gapVertical: 'small',
  },
  argTypes: {
    gapVertical: {
      control: {
        type: 'radio',
        labels: { small: 'small', undefined: 'medium', large: 'large' },
      },
      options: ['small', undefined, 'large'],
    },
  },
  name: 'Verticale witruimte',
}
