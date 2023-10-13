/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
import { GridCell, PageGrid, Paragraph } from '@amsterdam/design-system-react'
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
    children: Array.from(Array(12).keys()).map((i) => (
      <Paragraph className="amsterdam-docs-pink-box" key={i}>
        {i + 1}
      </Paragraph>
    )),
  },
}

export const ThreeColumns: Story = {
  ...StoryTemplate,
  args: {
    children: [
      <GridCell key={1} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=1" />
        </figure>
      </GridCell>,
      <GridCell key={2} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=2" />
        </figure>
      </GridCell>,
      <GridCell key={3} gridColumns={4}>
        <figure className="amsterdam-docs-figure">
          <img alt="Voorbeeld van een afbeelding" src="https://picsum.photos/1024/576?random=3" />
        </figure>
      </GridCell>,
    ],
    title: 'Drie afbeeldingen',
  },
}

export const MiddleBlock: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <GridCell gridColumns={{ start: 2, span: 10 }}>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Blok: kolom 2 t/m 11</Paragraph>
        </div>
      </GridCell>
    ),
    title: 'Een blok in het midden',
  },
}

export const FullWidth: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <GridCell fullWidth>
        <div className="amsterdam-docs-pink-box">
          <Paragraph>Full width</Paragraph>
        </div>
      </GridCell>
    ),
  },
}
