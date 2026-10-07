/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Decorator, Meta, StoryObj } from '@storybook/react-vite'

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

import { derivedArgType } from '#storybook/_common/argTypes'

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

const defaultMenuChildren = menuItems.map(({ text, ...restProps }) => (
  <Menu.Link {...restProps} key={text}>
    {text}
  </Menu.Link>
))

const menuWithSubmenuChildren = [
  <Menu.Link href="#" icon={<PieChartFillIcon />} key="Dashboard">
    Dashboard
  </Menu.Link>,
  <Menu.Item defaultExpanded href="#" icon={<FolderFillIcon />} key="Projecten" label="Projecten">
    <Menu.Link href="#" key="Overzicht">
      Overzicht
    </Menu.Link>
    <Menu.Link href="#" key="Planning">
      Planning
    </Menu.Link>
    <Menu.Link href="#" key="Team">
      Team
    </Menu.Link>
  </Menu.Item>,
  <Menu.Link href="#" icon={<DocumentsFillIcon />} key="Rapportages">
    Rapportages
  </Menu.Link>,
  <Menu.Link href="#" icon={<BarChartFillIcon />} key="Analyses">
    Analyses
  </Menu.Link>,
  <Menu.Link href="#" icon={<SettingsFillIcon />} key="Instellingen">
    Instellingen
  </Menu.Link>,
]

const menuWithMultipleLevelsChildren = [
  <Menu.Link href="#" icon={<PieChartFillIcon />} key="Dashboard">
    Dashboard
  </Menu.Link>,
  <Menu.Item defaultExpanded href="#" icon={<FolderFillIcon />} key="Projecten" label="Projecten">
    <Menu.Link href="#" key="Overzicht">
      Overzicht
    </Menu.Link>
    <Menu.Item defaultExpanded href="#" key="Planning" label="Planning">
      <Menu.Link href="#" key="Mijlpalen">
        Mijlpalen
      </Menu.Link>
      <Menu.Link href="#" key="Capaciteit">
        Capaciteit
      </Menu.Link>
    </Menu.Item>
    <Menu.Link href="#" key="Team">
      Team
    </Menu.Link>
  </Menu.Item>,
  <Menu.Item href="#" icon={<DocumentsFillIcon />} key="Rapportages" label="Rapportages">
    <Menu.Link href="#" key="Maandrapportages">
      Maandrapportages
    </Menu.Link>
    <Menu.Link href="#" key="Jaarrapportages">
      Jaarrapportages
    </Menu.Link>
  </Menu.Item>,
  <Menu.Link href="#" icon={<SettingsFillIcon />} key="Instellingen">
    Instellingen
  </Menu.Link>,
]

const withInWideWindowArg: Decorator = (StoryFn, context) => {
  const [, updateArgs] = useArgs()
  const isFixed = Boolean(context.parameters['fixedInWideWindow'])

  useEffect(() => {
    if (isFixed) return undefined

    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.wide})`)

    // Initial set from media query
    updateArgs({ inWideWindow: mq.matches })

    // Listen for threshold crossings
    const onChange = (e: MediaQueryListEvent) => updateArgs({ inWideWindow: e.matches })
    mq.addEventListener('change', onChange)

    return () => mq.removeEventListener('change', onChange)
  }, [isFixed, updateArgs])

  return <StoryFn />
}

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  args: {
    inWideWindow: false, // Initial value; will be overwritten when matchMedia runs.
  },
  argTypes: {
    inWideWindow: derivedArgType(
      `This prop gets automatically updated in Storybook. It is \`true\` when the viewport is wider than ${BREAKPOINTS.wide}.`,
    ),
  },
  decorators: [withInWideWindowArg],
  parameters: {
    themes: {
      options: ['Compact', 'Compact Lo-fi'],
    },
  },
  subcomponents: {
    'Menu.Item': Menu.Item,
    'Menu.Link': Menu.Link,
  },
} satisfies Meta<typeof Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: defaultMenuChildren,
  },
}

export const WithSubmenu: Story = {
  args: {
    children: menuWithSubmenuChildren,
    collapsible: true,
  },
}

export const WithMultipleLevels: Story = {
  args: {
    children: menuWithMultipleLevelsChildren,
    collapsible: true,
  },
}
