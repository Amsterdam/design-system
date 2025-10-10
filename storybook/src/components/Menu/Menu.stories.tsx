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

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
  globals: {
    theme: 'Compact',
  },
} satisfies Meta<typeof Menu>

export default meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const linkMeta = {
  component: Menu.Link,
} satisfies Meta<typeof Menu.Link>

type Story = StoryObj<typeof meta>
type LinkStory = StoryObj<typeof linkMeta>

const StoryTemplate: Story = {
  args: {
    children: menuItems.map(({ href, icon, text }) => (
      <Menu.Link href={href} icon={icon} key={text}>
        {text}
      </Menu.Link>
    )),
    inWideWindow: true,
    // Ensure visibility despite the media queries in this component.
    style: {
      display: 'block',
      marginInline: 'initial',
    },
  },
}

const LinkStoryTemplate: LinkStory = {
  args: {
    children: menuItems[0].text,
    href: '#',
    icon: 'PieChartFillIcon',
    // Ensure visibility despite the media queries in this component.
    style: { display: 'block' },
  },
  argTypes: {
    // @ts-expect-error Storybook displays this prop of Menu for Link – not sure why.
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
      <Menu>
        <Story />
      </Menu>
    ),
  ],
  render: ({ children, ...args }) => <Menu.Link {...args}>{children}</Menu.Link>,
}

export const Default: Story = {
  ...StoryTemplate,
}

export const Link: LinkStory = {
  ...LinkStoryTemplate,
}
