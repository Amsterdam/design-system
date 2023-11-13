/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Grid, Image, Screen } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
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

export const Cells: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map((i) => (
      <Grid.Cell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <Image alt="" src={`https://picsum.photos/640/360?random=${i}`} />
        </figure>
      </Grid.Cell>
    )),
  },
  name: 'Cellen',
}
