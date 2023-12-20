/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Screen, SkipLink } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Skip Link',
  component: SkipLink,
  args: {
    children: 'Direct naar inhoud',
    href: '#',
  },
  argTypes: {
    style: {
      table: {
        disable: true,
      },
    },
  },
  decorators: [
    (Story) => (
      <Screen>
        <Grid>
          <Grid.Cell span="all">
            <Story />
          </Grid.Cell>
        </Grid>
      </Screen>
    ),
  ],
} satisfies Meta<typeof SkipLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    style: {
      clip: 'auto',
      clipPath: 'none',
      height: 'auto',
      overflow: 'auto',
      position: 'static',
      whiteSpace: 'normal',
      width: 'auto',
    },
  },
}

export const OnFocus: Story = {}

export const MultipleLinks: Story = {
  render: () => (
    <>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar footer</SkipLink>
    </>
  ),
}
