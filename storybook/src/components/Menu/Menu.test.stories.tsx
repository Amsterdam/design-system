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
    <Menu.Item defaultExpanded href="#" icon={<SvgPieChartFill />} label="Rapportages">
      <Menu.Link href="#">Maandrapportages</Menu.Link>
      <Menu.Item defaultExpanded href="#" label="Jaarrapportages">
        <Menu.Link href="#">Financieel jaarverslag</Menu.Link>
        <Menu.Link href="#">Duurzaamheidsverslag</Menu.Link>
      </Menu.Item>
    </Menu.Item>
    <Menu.Link className="hover" href="#" icon={<SvgPieChartFill />}>
      Instellingen
    </Menu.Link>
  </Menu>
)

export const Test: Story = {
  render: renderMenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const WideWithSubmenu: Story = {
  args: {
    collapsible: true,
    inWideWindow: true,
  },
  parameters: {
    fixedInWideWindow: true,
  },
  play: async ({ canvas, userEvent }) => {
    const toggleButton = canvas.getByRole('button', { name: 'Toon submenu van Projecten' })
    const hiddenSubmenuLink = canvas.getByRole('link', { hidden: true, name: 'Overzicht' })

    await expect(hiddenSubmenuLink).not.toBeVisible()

    await userEvent.click(toggleButton)

    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true')
    await expect(canvas.getByRole('link', { name: 'Overzicht' })).toBeVisible()
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}

export const NarrowWithSubmenu: Story = {
  args: {
    collapsible: true,
  },
  parameters: {
    chromatic: { modes: { '400px': { viewport: 400 } } },
  },
  render: renderMenuWithSubmenu,
  tags: ['!dev', '!autodocs', '!manifest'],
}
