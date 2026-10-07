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

const renderMenuWithSubmenu = (args: Story['args']) => (
  <Menu {...args}>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Dashboard
    </Menu.Link>
    <Menu.Item href="#" icon={<SvgPieChartFill />} label="Projecten">
      <Menu.Link href="#">Overzicht</Menu.Link>
      <Menu.Link href="#">Planning</Menu.Link>
      <Menu.Link href="#">Team</Menu.Link>
    </Menu.Item>
    <Menu.Link href="#" icon={<SvgPieChartFill />}>
      Rapportages
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

export const WideExpandable: Story = {
  args: {
    expandable: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  play: async ({ canvas, userEvent }) => {
    const menu = canvas.getByRole('navigation', { name: 'Hoofdmenu' })
    // Check the link layout itself, because that is the behaviour users notice when the Menu expands.
    const firstLink = canvas.getByRole('link', { name: 'Dashboard' })
    const expandButton = canvas.getByRole('button', { name: 'Klap menu uit' })

    expect(getComputedStyle(firstLink).flexDirection).toBe('column')
    await expect(expandButton).toHaveAttribute('aria-expanded', 'false')

    await userEvent.click(expandButton)

    const collapseButton = canvas.getByRole('button', { name: 'Klap menu in' })

    await expect(menu).toHaveClass('ams-menu--expanded')
    await expect(collapseButton).toHaveAttribute('aria-expanded', 'true')
    await expect(collapseButton).toBeInTheDocument()
    expect(getComputedStyle(firstLink).flexDirection).toBe('row')

    // Return to the collapsed state, so this story keeps snapshotting it.
    await userEvent.click(collapseButton)

    await expect(menu).not.toHaveClass('ams-menu--expanded')
    await expect(canvas.getByRole('button', { name: 'Klap menu uit' })).toHaveAttribute('aria-expanded', 'false')
    expect(getComputedStyle(firstLink).flexDirection).toBe('column')
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideExpanded: Story = {
  args: {
    defaultExpanded: true,
    expandable: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideWithSubmenu: Story = {
  args: {
    expandable: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  play: async ({ canvas }) => {
    const hiddenSubmenuLink = canvas.getByRole('link', { hidden: true, name: 'Overzicht' })

    await expect(hiddenSubmenuLink).not.toBeVisible()
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideWithSubmenuExpanded: Story = {
  args: {
    defaultExpanded: true,
    expandable: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  play: async ({ canvas }) => {
    await expect(canvas.getAllByRole('list')).toHaveLength(2)
    await expect(canvas.getByRole('link', { name: 'Overzicht' })).toBeVisible()
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const NarrowWithSubmenu: Story = {
  parameters: {
    chromatic: { modes: { '400px': { viewport: 400 } } },
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}
