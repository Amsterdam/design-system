/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { AppleTouchIcon } from './AppleTouchIcon'
import { Favicon } from './Favicon'
import { SvgIcon } from './SvgIcon'
import { WebAppIcons } from './WebAppIcons'

const meta = {
  title: 'Components/Docs/App Icons',
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: () => (
    <>
      <AppleTouchIcon />
      <Favicon />
      <SvgIcon />
      <WebAppIcons />
    </>
  ),
  tags: ['!dev', '!autodocs'],
}
