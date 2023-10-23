/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
import { GridCell, PageGrid } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import '../../../storybook-docs/src/stories.scss'

const meta = {
  title: 'Layout/Page Grid',
  component: PageGrid,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
} satisfies Meta<typeof PageGrid>

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
}

export const Cells: Story = {
  ...StoryTemplate,
  args: {
    children: Array.from(Array(3).keys()).map((i) => (
      <GridCell key={i} span={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src={`https://picsum.photos/1024/576?random=${i}`} />
        </figure>
      </GridCell>
    )),
  },
  parameters: {
    docs: {
      canvas: {
        sourceState: 'shown',
      },
    },
  },
}
