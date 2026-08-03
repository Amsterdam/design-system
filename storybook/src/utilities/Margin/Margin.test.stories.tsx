/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, Paragraph } from '@amsterdam/design-system-react'

import type { Margin } from './Margin'

import { default as marginMeta } from './Margin.stories'

/** Mirrors the list in packages/css/src/components/margin/margin.scss, which does offer a 2xl margin. */
const sizes = ['xs', 's', 'm', 'l', 'xl', '2xl'] as const

const meta = {
  ...marginMeta,
  title: 'Utilities/CSS/Margin',
} satisfies Meta<typeof Margin>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      {sizes.map((size) => (
        <div key={size}>
          <Heading className={`ams-mb-${size}`} level={2}>{`ams-mb-${size}`}</Heading>
          <Paragraph>It introduces white space between itself and this paragraph.</Paragraph>
        </div>
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs', '!manifest'],
}
