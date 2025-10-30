/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import SvgPieChartFill from '@amsterdam/design-system-react-icons/src/PieChartFill'
import { Menu } from '@amsterdam/design-system-react/src'

import { default as menuMeta } from './Menu.stories'

const meta = {
  ...menuMeta,
  title: 'Components/Navigation/Menu',
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) => (
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
  ),
  tags: ['!dev', '!autodocs'],
}
