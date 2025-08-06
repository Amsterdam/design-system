/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Icon } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react-vite'
import FemaleIcon from './Female'
import MaleIcon from './Male'
import NeutralIcon from './Neutral'

const meta = {
  title: 'Components/GenderIcon',
  component: Icon,
} satisfies Meta<typeof Icon>

export default meta

type Story = StoryObj<typeof meta>

export const Male: Story = {
  args: {
    svg: MaleIcon,
  },
}

export const Female: Story = {
  args: {
    svg: FemaleIcon,
  },
}

export const Neutral: Story = {
  args: {
    svg: NeutralIcon,
  },
}
