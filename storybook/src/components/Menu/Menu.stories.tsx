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
import useViewportHasMinWidth, { BREAKPOINTS } from '@amsterdam/design-system-react/src/common/useViewportHasMinWidth'
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

const withInWideWindowArg: Decorator = (StoryFn, context) => {
  const [, updateArgs] = useArgs()
  const isFixed = Boolean(context.parameters['fixedInWideWindow'])
  const inWideWindow = useViewportHasMinWidth('wide')

  const effectiveInWideWindow = isFixed ? context.args['inWideWindow'] : inWideWindow

  useEffect(() => {
    if (!isFixed) updateArgs({ inWideWindow })
  }, [inWideWindow, isFixed, updateArgs])

  return <StoryFn args={{ ...context.args, inWideWindow: effectiveInWideWindow }} />
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
    'Menu.Link': Menu.Link,
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

export const Expandable: Story = {
  args: {
    children: Default.args?.children,
    expandable: true,
  },
}

export const AlwaysWide: Story = {
  args: {
    children: Default.args?.children,
    expanded: true,
  },
}
