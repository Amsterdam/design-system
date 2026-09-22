/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import SvgPieChartFill from '@amsterdam/design-system-react-icons/src/PieChartFill'
import { Menu } from '@amsterdam/design-system-react/src'
import { expect } from 'storybook/test'

import { default as menuMeta } from './Menu.stories'

const meta = {
  ...menuMeta,
  title: 'Components/Navigation/Menu',
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

const renderMenu = (args: Story['args']) => (
  <Menu {...args}>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Dashboard
    </Menu.Link>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Projecten
    </Menu.Link>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Rapportages
    </Menu.Link>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Analyses
    </Menu.Link>
    <Menu.Link className="hover" href="#" icon={<SvgPieChartFill />}>
      Instellingen
    </Menu.Link>
  </Menu>
)

export const Test: Story = {
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideCollapsible: Story = {
  args: {
    collapsible: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  play: async ({ canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button', { name: 'Klap menu uit' }))

    const collapseButton = canvas.getByRole('button', { name: 'Klap menu in' })

    await expect(collapseButton).toHaveAttribute('aria-pressed', 'true')

    // Return to the collapsed state, so this story keeps snapshotting it.
    await userEvent.click(collapseButton)

    await expect(canvas.getByRole('button', { name: 'Klap menu uit' })).toHaveAttribute('aria-pressed', 'false')
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideCollapsibleExpanded: Story = {
  args: {
    collapsible: true,
    defaultExpanded: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}
