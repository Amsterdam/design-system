/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'
import type { AspectRatioProps } from './AspectRatio'

const render = ({ aspectRatio }: AspectRatioProps) => (
  <div className={`ams-aspect-ratio--${aspectRatio}`}>
    <Paragraph
      style={{
        alignItems: 'center',
        backgroundColor: 'gray',
        blockSize: '100%',
        color: 'white',
        display: 'inline-flex',
        inlineSize: '100%',
        justifyContent: 'center',
      }}
    >
      This gray block has two dimensions with fixed proportions.
    </Paragraph>
  </div>
)

const meta = {
  title: 'Utilities/CSS/Aspect Ratio',
  component: AspectRatio,
  args: {
    aspectRatio: 'wide',
  },
} satisfies Meta<typeof AspectRatio>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render,
}
