/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  BarChartFillIcon,
  DocumentsFillIcon,
  FolderFillIcon,
  PieChartFillIcon,
  SettingsFillIcon,
} from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Menu } from '@amsterdam/design-system-react/src'
import { BREAKPOINTS } from '@amsterdam/design-system-react/src/common/useIsAfterBreakpoint'
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

const withInWideWindowArg = (StoryFn: any) => {
  const [, updateArgs] = useArgs()

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined

    const mq = window.matchMedia(`(min-width: ${BREAKPOINTS.medium})`)

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
      control: { disable: true },
      description: `This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${BREAKPOINTS.medium}.`,
      table: { category: 'Derived' },
    },
  },
  decorators: [withInWideWindowArg],
} satisfies Meta<typeof Menu>

export default meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const linkMeta = {
  component: Menu.Link,
} satisfies Meta<typeof Menu.Link>

type Story = StoryObj<typeof meta>
type LinkStory = StoryObj<typeof linkMeta>

export const Default: Story = {
  args: {
    children: menuItems.map(({ text, ...restProps }) => (
      <Menu.Link {...restProps} key={text}>
        {text}
      </Menu.Link>
    )),
  },
}

export const Link: LinkStory = {
  args: {
    children: menuItems[0].text,
    href: '#',
    icon: 'PieChartFillIcon',
  },
  argTypes: {
    // @ts-expect-error Storybook displays this prop of Menu for Link because the meta for Menu is the default export.
    accessibleName: {
      table: { disable: true },
    },
    children: {
      control: 'text',
      table: { disable: false },
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
    },
    // Storybook displays this prop of Menu for Link because the meta for Menu is the default export.
    inWideWindow: {
      table: { disable: true },
    },
  },
  decorators: [
    (Story) => (
      <Menu
        inWideWindow
        style={{
          display: 'inline-flex',
          margin: 0,
          paddingBlock: 'var(--ams-menu-padding-block)',
          paddingInline: 'var(--ams-menu-padding-block)',
        }}
      >
        <Story />
      </Menu>
    ),
  ],
  render: ({ children, ...args }) => {
    /* eslint-disable @typescript-eslint/no-unused-vars */
    // @ts-expect-error Typescript does not infer the correct type here
    const { accessibleName, inWideWindow, ...linkArgs } = args
    return <Menu.Link {...linkArgs}>{children}</Menu.Link>
    /* eslint-enable @typescript-eslint/no-unused-vars */
  },
}
