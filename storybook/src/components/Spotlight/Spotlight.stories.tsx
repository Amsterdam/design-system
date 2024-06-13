/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Blockquote, Grid, Spotlight } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { Image } from '../../../../packages/react/src/Image'
import { exampleQuote } from '../shared/exampleContent'

const quote = exampleQuote()

const meta = {
  title: 'Components/Containers/Spotlight',
  component: Spotlight,
  render: ({ as, color, PopoutMedia }) => (
    <Spotlight as={as} color={color} PopoutMedia={PopoutMedia}>
      <Grid paddingVertical="medium">
        <Grid.Cell span="all">
          <Blockquote inverseColor={!color || !['green', 'yellow'].includes(color)}>{quote}</Blockquote>
        </Grid.Cell>
      </Grid>
    </Spotlight>
  ),
} satisfies Meta<typeof Spotlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithPopoutImage: Story = {
  args: {
    PopoutMedia: <Image src="https://picsum.photos/240/360" alt="" />,
  },
}

export const Blue: Story = {
  args: {
    color: 'blue',
  },
}

export const DarkBlue: Story = {
  args: {
    color: 'dark-blue',
  },
}

export const DarkGreen: Story = {
  args: {
    color: 'dark-green',
  },
}

export const Green: Story = {
  args: {
    color: 'green',
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

export const Purple: Story = {
  args: {
    color: 'purple',
  },
}

export const Yellow: Story = {
  args: {
    color: 'yellow',
  },
}

export const CustomTagName: Story = {
  args: {
    as: 'section',
  },
}
