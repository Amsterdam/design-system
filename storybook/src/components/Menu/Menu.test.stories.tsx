/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import SvgPieChartFill from '@amsterdam/design-system-react-icons/src/PieChartFill'
import { Menu } from '@amsterdam/design-system-react/src'
import { BREAKPOINTS } from '@amsterdam/design-system-react/src/common/useViewportHasMinWidth'
import { useState } from 'react'
import { expect } from 'storybook/test'

import menuMeta from './Menu.stories'

const meta = {
  ...menuMeta,
  title: 'Components/Navigation/Menu',
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvas, step, userEvent }) => {
    await step('Menu', async () => {
      await step('Keeps links full-width and their content inside the gutters', async () => {
        const links = canvas.getAllByRole('link')
        const menu = links[0].closest('.ams-menu')

        await expect(menu).not.toBeNull()
        if (!menu) return

        const menuBounds = menu.getBoundingClientRect()
        const menuStyle = getComputedStyle(menu)
        const inWideWindow = window.matchMedia(`(min-width: ${BREAKPOINTS.wide})`).matches

        for (const link of links) {
          const linkBounds = link.getBoundingClientRect()

          await expect(linkBounds.left).toBeCloseTo(menuBounds.left)
          await expect(linkBounds.right).toBeCloseTo(menuBounds.right)

          if (!inWideWindow) {
            const linkStyle = getComputedStyle(link)

            await expect(parseFloat(linkStyle.paddingInlineStart)).toBeGreaterThanOrEqual(
              -parseFloat(menuStyle.marginInlineStart),
            )
            await expect(parseFloat(linkStyle.paddingInlineEnd)).toBeGreaterThanOrEqual(
              -parseFloat(menuStyle.marginInlineEnd),
            )
          }
        }
      })

      await step('Sets the clicked link to current', async () => {
        const dashboard = canvas.getByRole('link', { name: 'Dashboard' })
        const projects = canvas.getByRole('link', { name: 'Projecten' })

        await expect(dashboard).toHaveAttribute('aria-current', 'page')
        await expect(projects).not.toHaveAttribute('aria-current')

        await userEvent.click(projects)

        await expect(projects).toHaveAttribute('aria-current', 'page')
        await expect(dashboard).not.toHaveAttribute('aria-current')
      })
    })
  },
  render: (args) => {
    const [current, setCurrent] = useState('Dashboard')

    return (
      <Menu {...args}>
        {['Dashboard', 'Projecten', 'Rapportages', 'Analyses', 'Instellingen'].map((text) => (
          <Menu.Link
            aria-current={current === text ? 'page' : undefined}
            className={text === 'Instellingen' ? 'hover' : undefined}
            href="#"
            icon={<SvgPieChartFill />}
            key={text}
            onClick={(event) => {
              event.preventDefault()
              setCurrent(text)
            }}
          >
            {text}
          </Menu.Link>
        ))}
      </Menu>
    )
  },
  tags: ['!dev', '!autodocs', '!manifest'],
}
