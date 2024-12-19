/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Blockquote, Grid } from '@amsterdam/design-system-react'
import { Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  render: ({ as, color }) => (
    <Spotlight as={as} color={color}>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Blockquote inverseColor={!color || !['lime', 'yellow'].includes(color)}>{quote}</Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Azure: Story = {
  args: {
    color: 'azure',
  },
}

export const Green: Story = {
  args: {
    color: 'green',
  },
}

export const Lime: Story = {
  args: {
    color: 'lime',
  },
}

export const Magenta: Story = {
  args: {
    color: 'magenta',
  },
}

export const Orange: Story = {
  args: {
    color: 'orange',
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const ImproveSemantics: Story = {
  args: {
    as: 'section',
  },
}
