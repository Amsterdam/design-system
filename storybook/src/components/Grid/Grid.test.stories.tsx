/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Grid } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../utils/renderComponentVariants/renderComponentVariants'
import { default as gridMeta } from './Grid.stories'

const meta = {
  ...gridMeta,
  title: 'Components/Layout/Grid',
} satisfies Meta<typeof Grid>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [<Grid.Cell key={1} span="all" />, <Grid.Cell key={2} span="all" />],
  },
  render: (args) =>
    renderComponentVariants(Grid, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
