/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { exampleCaption } from '../shared/exampleContent'

const caption = exampleCaption()

const meta = {
  title: 'Components/Media/Figure',
  component: Figure,
} satisfies Meta<typeof Figure>

export default meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const captionMeta = {
  component: Figure.Caption,
} satisfies Meta<typeof Figure.Caption>

type Story = StoryObj<typeof meta>
type CaptionStory = StoryObj<typeof captionMeta>

export const Default: Story = {
  args: {
    children: [
      <Image
        alt=""
        aspectRatio="2x-wide"
        sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
        src="https://picsum.photos/1600/500"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
      />,
      <Figure.Caption>{caption}</Figure.Caption>,
    ],
  },
}

export const InverseColour: CaptionStory = {
  args: {
    children: caption,
    inverseColor: true,
  },
  render: ({ children, ...args }) => (
    <Figure>
      <Image
        alt=""
        aspectRatio="2x-wide"
        sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
        src="https://picsum.photos/1600/500"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
      />
      <Figure.Caption {...args}>{children}</Figure.Caption>
    </Figure>
  ),
}
