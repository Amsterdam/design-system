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
  args: {
    children: [
      <Menu.Link className="hover" href="#" icon={<SvgPieChartFill />} key={1}>
        Instellingen
      </Menu.Link>,
      <Menu.Link href="#" icon={<SvgPieChartFill />} key={2}>
        Dashboard
      </Menu.Link>,
      <Menu.Link href="#" icon={<SvgPieChartFill />} key={3}>
        Projecten
      </Menu.Link>,
      <Menu.Link href="#" icon={<SvgPieChartFill />} key={4}>
        Rapportages
      </Menu.Link>,
      <Menu.Link href="#" icon={<SvgPieChartFill />} key={5}>
        Analyses
      </Menu.Link>,
    ],
  },
  parameters: {
    delay: 500,
  },
  render: (args) => <Menu {...args} />,
  tags: ['!dev', '!autodocs'],
}
