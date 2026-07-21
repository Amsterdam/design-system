/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'

import type { Gap } from './Gap'

import { default as gapMeta } from './Gap.stories'

/** Mirrors the list in packages/css/src/components/gap/gap.scss. There is deliberately no 2xl gap. */
const sizes = ['xs', 's', 'm', 'l', 'xl'] as const

const meta = {
  ...gapMeta,
  title: 'Utilities/CSS/Gap',
} satisfies Meta<typeof Gap>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <div className="_ams-tests-stack">
      {sizes.map((size) => (
        <div className={`ams-gap-${size}`} key={size}>
          <Paragraph>{`ams-gap-${size}`}</Paragraph>
          <Paragraph>{`ams-gap-${size}`}</Paragraph>
        </div>
      ))}
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
