/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { ReactElement } from 'react'

import {
  BarChartFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  PieChartFillIcon,
  SettingsFillIcon,
} from '@amsterdam/design-system-react-icons'
import { Menu } from '@amsterdam/design-system-react/src'
import { BREAKPOINTS } from '@amsterdam/design-system-react/src/common/useViewportHasMinWidth'
import { useEffect } from 'react'
import { useArgs } from 'storybook/preview-api'

const menuItems = [
  {
    href: '#',
    icon: <PieChartFillIcon />,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: <FolderFillIcon />,
    text: 'Projecten',
  },
  {
    href: '#',
    icon: <DocumentsFillIcon />,
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: <BarChartFillIcon />,
    text: 'Analyses',
  },
  {
    href: '#',
    icon: <SettingsFillIcon />,
    text: 'Instellingen',
  },
]

const withInWideWindowArg = (StoryFn: () => ReactElement) => {
  const [, updateArgs] = useArgs()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.wide})`)

    // Initial set from media query
    updateArgs({ inWideWindow: mq.matches })

    // Listen for threshold crossings
    const onChange = (e: MediaQueryListEvent) => updateArgs({ inWideWindow: e.matches })
    mq.addEventListener('change', onChange)

    return () => mq.removeEventListener('change', onChange)
  }, [updateArgs])

  return <StoryFn />
}

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  args: {
    inWideWindow: false, // Initial value; will be overwritten when matchMedia runs.
  },
  argTypes: {
    inWideWindow: {
      control: false,
      description: `This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${BREAKPOINTS.wide}.`,
      table: { category: 'Derived' },
    },
  },
  decorators: [withInWideWindowArg],
  parameters: {
    themes: {
      themeOverride: 'Compact',
    },
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: menuItems.map(({ text, ...restProps }) => (
      <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>
    )),
  },
}
