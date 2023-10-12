/**
 * @license EUPL-1.2+
 * Copyright (c) 2023 Gemeente Amsterdam
 */

import { Highlight, PageGrid, Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Containers/Highlight',
  component: Highlight,
  argTypes: {
    color: {
      control: {
        type: 'color',
        presetColors: [
          { color: '#ff9100', title: 'Oranje' },
          { color: '#a00078"', title: 'Paars' },
          { color: '#00a03c', title: 'Groen' },
        ],
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
} satisfies Meta<typeof Highlight>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'orange',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 2, span: 10 }} inverseColor>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur
          at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat
          temporibus ut voluptate.
        </Paragraph>
      </PageGrid>,
    ],
  },
}

export const Purple: Story = {
  args: {
    color: 'purple',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 2, span: 10 }} inverseColor>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur
          at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat
          temporibus ut voluptate.
        </Paragraph>
      </PageGrid>,
    ],
  },
}

export const Green: Story = {
  args: {
    color: 'green',
    children: [
      <PageGrid key={1}>
        <Paragraph key={1} gridColumns={{ start: 2, span: 10 }} inverseColor>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi id quibusdam soluta. Architecto aspernatur
          at debitis, deserunt ea error ex impedit magnam nihil odio perferendis placeat porro quidem repellat
          temporibus ut voluptate.
        </Paragraph>
      </PageGrid>,
    ],
  },
}
