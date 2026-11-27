/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'

import { maximiseInlineSize } from '#storybook/_common/decorators'
import { exampleCaption } from '#storybook/_common/exampleContent'
import examplePhoto12 from '#storybook/_common/images/example-photo-12.jpg'
import examplePhoto13 from '#storybook/_common/images/example-photo-13.jpg'

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
        src={examplePhoto12}
        srcSet={`${examplePhoto12} 640w, ${examplePhoto12} 1280w, ${examplePhoto12} 1440w`}
      />
      <Figure.Caption>{caption}</Figure.Caption>
    </Figure>
  ),
  subcomponents: {
    'Figure.Caption': Figure.Caption,
  },
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
        src={examplePhoto13}
        srcSet={`${examplePhoto13} 640w, ${examplePhoto13} 1280w, ${examplePhoto13} 1440w`}
      />
      <Figure.Caption color="inverse">{caption}</Figure.Caption>
    </Figure>
  ),
}
