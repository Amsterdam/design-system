/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Screen } from '@amsterdam/design-system-react'
import { GridCell, PageGrid } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import '../../../storybook-docs/src/stories.scss'

const meta = {
  title: 'Layout/Grid Cell',
  component: GridCell,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'hidden',
      },
    },
  },
} satisfies Meta<typeof GridCell>

export default meta

type Story = StoryObj<typeof meta>

const StoryTemplate: Story = {
  decorators: [
    (Story) => (
      <Screen>
        <PageGrid>
          <Story />
        </PageGrid>
      </Screen>
    ),
  ],
}

export const Default: Story = {
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel beslaat 4 kolommen.</p>,
    span: 4,
  },
}

export const StartPosition: Story = {
  ...StoryTemplate,
  args: {
    children: <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel start in kolom 2.</p>,
    start: 2,
    span: 2,
  },
}

export const MultipleSizes: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">Deze cel heeft 3 instellingen voor de breedte.</p>
    ),
    span: [4, 6, 8],
    fullWidth: true,
  },
}

export const FullWidth: Story = {
  ...StoryTemplate,
  args: {
    children: (
      <p className="amsterdam-docs-paragraph amsterdam-docs-pink-box">
        Deze cel beslaat de volledige breedte van het grid.
      </p>
    ),
    fullWidth: true,
  },
}
