/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { expect } from 'storybook/test'

import { ColorWheel } from './ColorWheel'

const meta = {
  title: 'Components/Docs/Color Wheel',
  component: ColorWheel,
  tags: ['!dev', '!autodocs', '!manifest'],
} satisfies Meta<typeof ColorWheel>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {}

export const SelectedGroup: Story = {
  args: { defaultGroup: 'red' },
}

export const SelectsAGroup: Story = {
  play: async ({ canvas, userEvent }) => {
    const blue = canvas.getByRole('button', { name: 'Blue' })
    const green = canvas.getByRole('button', { name: 'Green' })

    await expect(canvas.getAllByRole('button').filter((button) => button.ariaPressed === 'true')).toHaveLength(0)

    await userEvent.click(blue)

    await expect(blue).toHaveAttribute('aria-pressed', 'true')
    await expect(canvas.getByRole('heading', { name: 'Blue' })).toBeVisible()

    green.focus()
    await userEvent.keyboard('{Enter}')

    await expect(green).toHaveAttribute('aria-pressed', 'true')
    await expect(blue).toHaveAttribute('aria-pressed', 'false')
    await expect(canvas.getByRole('heading', { name: 'Green' })).toBeVisible()
  },
}

export const DeselectsOnClickOutside: Story = {
  args: { defaultGroup: 'blue' },
  play: async ({ canvas, userEvent }) => {
    const blue = canvas.getByRole('button', { name: 'Blue' })

    await expect(blue).toHaveAttribute('aria-pressed', 'true')

    await userEvent.click(canvas.getByRole('group', { name: 'Colour groups' }))

    await expect(blue).toHaveAttribute('aria-pressed', 'false')
    await expect(canvas.queryByRole('heading', { name: 'Blue' })).toBeNull()
  },
}
