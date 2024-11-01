/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Paragraph } from '@amsterdam/design-system-react'
import tokens from '@amsterdam/design-system-tokens/dist/index.json'
import { Meta, StoryObj } from '@storybook/react'
import { AspectRatio } from './AspectRatio'
import type { AspectRatioProps } from './AspectRatio'

const render = ({ aspectRatio }: AspectRatioProps) => (
  <div className={`ams-aspect-ratio--${aspectRatio}`}>
    <Paragraph
      style={{
        alignItems: 'center',
        backgroundColor: tokens.ams.color['neutral-grey2'],
        blockSize: '100%',
        color: tokens.ams.color['primary-white'],
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
