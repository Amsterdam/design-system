/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

import { exampleCaption } from '../shared/exampleContent'

const caption = exampleCaption()

const meta = {
  title: 'Components/Media/Figure',
  component: Figure.Caption,
  args: {
    children: caption,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'inverse'],
    },
  },
  render: ({ children, ...args }) => (
    <Figure>
      <Image
        alt=""
        aspectRatio="16:5"
        sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1440px"
        src="https://picsum.photos/1440/450"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w"
      />
      <Figure.Caption {...args}>{children}</Figure.Caption>
    </Figure>
  ),
} satisfies Meta<typeof Figure.Caption>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InverseColour: Story = {
  args: {
    color: 'inverse',
  },
}
