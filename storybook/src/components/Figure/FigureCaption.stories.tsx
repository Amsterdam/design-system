/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'

import { childrenArgType, inverseColorArgType } from '#storybook/_common/argTypes'
import { exampleCaption } from '#storybook/_common/exampleContent'
import examplePhoto14 from '#storybook/_common/images/example-photo-14.jpg'

const meta = {
  title: 'Components/Media/Figure',
  component: Figure.Caption,
  argTypes: {
    children: childrenArgType('The text for the caption.'),
    color: inverseColorArgType,
  },
  render: ({ children, ...args }) => (
    <Figure>
      <Image
        alt=""
        aspectRatio="16:5"
        sizes="(max-width: 37.5rem) 640px, (max-width: 72.5rem) 1280px, 1440px"
        src={examplePhoto14}
        srcSet={`${examplePhoto14} 640w, ${examplePhoto14} 1280w, ${examplePhoto14} 1440w`}
      />
      <Figure.Caption {...args}>{children}</Figure.Caption>
    </Figure>
  ),
  tags: ['!manifest'],
} satisfies Meta<typeof Figure.Caption>

export default meta

type Story = StoryObj<typeof meta>

export const Caption: Story = {
  args: {
    children: exampleCaption(),
  },
}
