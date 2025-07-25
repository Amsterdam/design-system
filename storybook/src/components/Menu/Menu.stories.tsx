/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Menu } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const menuItems = [
  {
    href: '#',
    icon: Icons.PieChartIcon,
    text: 'Dashboard',
  },
  {
    href: '#',
    icon: Icons.FolderIcon,
    text: 'Projecten',
  },
  {
    href: '#',
    icon: Icons.DocumentsIcon,
    text: 'Rapportages',
  },
  {
    href: '#',
    icon: Icons.BarChartIcon,
    text: 'Analyses',
  },
  {
    href: '#',
    icon: Icons.CogwheelIcon,
    text: 'Instellingen',
  },
]

const meta = {
  title: 'Components/Navigation/Menu',
  component: Menu,
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
  },
}

const LinkStoryTemplate: LinkStory = {
  args: {
    children: menuItems[0].text,
    href: '#',
    icon: Icons.PieChartIcon,
  },
  argTypes: {
    color: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'contrast', 'inverse'],
    },
    icon: {
      control: {
        labels: { undefined: 'none' },
        type: 'select',
      },
      mapping: Icons,
      options: [undefined, ...Object.keys(Icons)],
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
export const ContrastColour: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'contrast',
    icon: Icons.PieChartFillIcon,
  },
}

export const InverseColour: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
    icon: Icons.PieChartFillIcon,
  },
}
