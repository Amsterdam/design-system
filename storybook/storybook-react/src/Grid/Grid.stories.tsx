/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
import { Grid, GridCell } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Layout/Grid',
  component: Grid,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
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
    children: Array.from(Array(12).keys()).map((i) => <GridCell className="amsterdam-docs-pink-box" key={i} />),
  },
  name: 'Basis',
}

export const Cells: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map((i) => (
      <GridCell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="" src={`https://picsum.photos/1024/576?random=${i}`} />
        </figure>
      </GridCell>
    )),
  },
  name: 'Cellen',
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
