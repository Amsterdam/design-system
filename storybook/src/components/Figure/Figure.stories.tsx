/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Image } from '@amsterdam/design-system-react'
import { Figure } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'

const ExampleImage = () => (
  <Image
    alt=""
    aspectRatio="2x-wide"
    sizes="(max-width: 36rem) 640px, (max-width: 68rem) 1280px, 1600px"
    src="https://picsum.photos/1600/500"
    srcSet="https://picsum.photos/640/200 640w, https://picsum.photos/1280/400 1280w, https://picsum.photos/1600/500 1600w"
  />
)

const exampleCaption =
  'Een rustige Amsterdamse gracht met eeuwenoude gevels die weerspiegelen in het water, terwijl fietsen nonchalant tegen de brugleuning rusten – een alledaags tafereel vol historie en charme.'

const meta = {
  title: 'Components/Media/Figure',
  component: Figure,
} satisfies Meta<typeof Figure>

export default meta

const captionMeta = {
  component: Figure.Caption,
} satisfies Meta<typeof Figure.Caption>

type Story = StoryObj<typeof meta>
type CaptionStory = StoryObj<typeof captionMeta>

const CaptionStoryTemplate: CaptionStory = {
  decorators: [
    (Story) => (
      <Figure>
        <ExampleImage />
        <Story />
      </Figure>
    ),
  ],
  render: ({ children, ...args }) => <Figure.Caption {...args}>{children}</Figure.Caption>,
}
export const Default: Story = {
  args: {
    children: [<ExampleImage />, <Figure.Caption>{exampleCaption}</Figure.Caption>],
  },
}

export const InverseColour: CaptionStory = {
  ...CaptionStoryTemplate,
  args: {
    children: exampleCaption,
    inverseColor: true,
  },
}
