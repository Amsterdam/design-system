/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { SkipLink } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Navigation/Skip Link',
  component: SkipLink,
  args: {
    children: 'Direct naar inhoud',
    href: '#',
  },
  argTypes: {
    children: {
      description: 'The text to attach the link to.',
      table: { disable: false },
    },
    href: {
      description: 'The url for the link. References an anchor on the current page.',
    },
  },
} satisfies Meta<typeof SkipLink>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // This resets the default behaviour of only showing the link
    // on focus, in order to always show the link in Storybook
    style: {
      clip: 'initial',
      clipPath: 'initial',
      height: 'initial',
      overflow: 'initial',
      position: 'initial',
      whiteSpace: 'initial',
      width: 'initial',
    },
  },
}

export const OnFocus: Story = {
  decorators: [
    (Story) => (
      <>
        <Paragraph style={{ marginBottom: '2rem' }}>
          (Click this text, then press the ‘Tab’ key to make the Skip Link appear.)
        </Paragraph>
        <Story />
      </>
    ),
  ],
}

export const MultipleLinks: Story = {
  render: () => (
    <>
      <Paragraph style={{ marginBottom: '2rem' }}>
        (Click this text, then press the ‘Tab’ key twice to make the Skip Links appear.)
      </Paragraph>
      <SkipLink href="#">Direct naar inhoud</SkipLink>
      <SkipLink href="#">Direct naar contactgegevens</SkipLink>
    </>
  ),
}
