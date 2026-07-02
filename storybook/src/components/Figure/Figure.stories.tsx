/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'

import { maximiseInlineSize } from '#storybook/_common/decorators'
import { exampleCaption } from '#storybook/_common/exampleContent'

const caption = exampleCaption()

const meta = {
  title: 'Components/Media/Figure',
  component: Figure,
  decorators: [maximiseInlineSize('vi-medium')],
  render: (args) => (
    <Figure {...args}>
      <Image
        alt=""
        aspectRatio="16:5"
        sizes="(max-width: 37.5rem) 640px, (max-width: 72.5rem) 1280px, 1440px"
        src="https://picsum.photos/1440/450"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w"
      />
      <Figure.Caption>{caption}</Figure.Caption>
    </Figure>
  ),
} satisfies Meta<typeof Figure>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const InverseColour: Story = {
  render: (args) => (
    <Figure {...args}>
      <Image
        alt=""
        aspectRatio="16:5"
        sizes="(max-width: 37.5rem) 640px, (max-width: 72.5rem) 1280px, 1440px"
        src="https://picsum.photos/1440/450"
        srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1440/450 1440w"
      />
      <Figure.Caption color="inverse">{caption}</Figure.Caption>
    </Figure>
  ),
}
