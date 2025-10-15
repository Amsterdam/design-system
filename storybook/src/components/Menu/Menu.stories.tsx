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
import { useEffect, useRef } from 'react'
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

const MIN_WIDTH_REM = 72.5

const withInWideWindowArg = (StoryFn: any) => {
  const [, updateArgs] = useArgs()
  const lastValueRef = useRef<boolean | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return

    const mq = window.matchMedia(`(min-width: ${MIN_WIDTH_REM}rem)`)
    const setIfChanged = (next: boolean) => {
      if (lastValueRef.current !== next) {
        lastValueRef.current = next
        updateArgs({ inWideWindow: next })
      }
    }

    // Initial set from media query
    setIfChanged(mq.matches)

    // Listen for threshold crossings
    const onChange = (e: MediaQueryListEvent) => setIfChanged(e.matches)
    mq.addEventListener('change', onChange)

    // Hide warning against calling a method that might not exist (older Safari only has .removeListener)
    // because the MediaQueryList type in TypeScript still exposes both the old and the new API.
    // eslint-disable-next-line consistent-return
    return () => mq.removeEventListener('change', onChange)
  }, [updateArgs])

  return <StoryFn />
}

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  args: {
    inWideWindow: false, // Seed value; will be overwritten when matchMedia runs.
  },
  argTypes: {
    inWideWindow: {
      control: { disable: true },
      description: `This props gets automatically updated in Storybook. Is \`true\` when the viewport is wider than ${MIN_WIDTH_REM}rem.`,
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
    // Storybook displays this prop of Menu for Link – not sure why.
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
  render: ({ children, ...args }) => <Menu.Link {...args}>{children}</Menu.Link>,
}
