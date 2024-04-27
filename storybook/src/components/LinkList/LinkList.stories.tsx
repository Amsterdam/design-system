/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { LinkList } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleLinkList } from '../shared/exampleContent'

const links = exampleLinkList()

const meta = {
  title: 'Components/Navigation/Link List',
  component: LinkList,
  args: {
    children: links.map((text, index) => (
      <LinkList.Link href="#" key={index}>
        {text}
      </LinkList.Link>
    )),
  },
} satisfies Meta<typeof LinkList>

export default meta

const linkMeta = {
  title: 'Components/Navigation/Link List Link',
  component: LinkList.Link,
  argTypes: {
    icon: {
      control: { type: 'select' },
      options: Object.keys(Icons),
      mapping: Icons,
      defaultValue: Icons.ChevronRightIcon,
    },
    onBackground: {
      control: {
        type: 'radio',
        labels: { undefined: '(not set)', light: 'light', dark: 'dark' },
      },
      options: [undefined, 'light', 'dark'],
    },
    size: {
      control: {
        type: 'radio',
        labels: { small: 'small', undefined: 'medium', large: 'large' },
      },
      options: ['small', undefined, 'large'],
    },
  },
} satisfies Meta<typeof LinkList.Link>

type Story = StoryObj<typeof meta>
type LinkStory = StoryObj<typeof linkMeta>

const LinkTemplate: Story = {}

const LinkStoryTemplate: LinkStory = {
  args: {
    href: '#',
  },
  argTypes: linkMeta.argTypes,
  decorators: [
    (Story) => (
      <LinkList>
        <Story />
      </LinkList>
    ),
  ],
  render: ({ children, ...args }) => <LinkList.Link {...args}>{children}</LinkList.Link>,
}

export const Default: Story = {
  ...LinkTemplate,
}

export const CustomIcons: Story = {
  args: {
    children: [
      <LinkList.Link key="form" href="#" icon={Icons.ChattingIcon}>
        Contactformulier
      </LinkList.Link>,
      <LinkList.Link key="address" href="#" icon={Icons.HousingIcon}>
        Adressen en openingstijden
      </LinkList.Link>,
      <LinkList.Link key="phone" href="#" icon={Icons.PhoneIcon}>
        Bel 14 020
      </LinkList.Link>,
    ],
  },
}

export const SmallText: Story = {
  args: {
    children: [
      <LinkList.Link key="about" href="#" size="small">
        Over deze website
      </LinkList.Link>,
      <LinkList.Link key="newsletter" href="#" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>,
      <LinkList.Link key="jobs" href="#" size="small">
        Werken bij de gemeente Amsterdam
      </LinkList.Link>,
    ],
  },
}

export const Link: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    children: 'Alles over openbare orde en veiligheid',
    href: '#',
    onBackground: undefined,
    size: undefined,
  },
}

export const OnDarkBackground: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    children: links[0],
    href: '#',
    onBackground: 'dark',
  },
  decorators: [
    ...LinkStoryTemplate.decorators,
    (Story) => (
      <div style={{ background: '#004699', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}

export const OnLightBackground: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    children: links[0],
    href: '#',
    onBackground: 'light',
  },
  decorators: [
    ...LinkStoryTemplate.decorators,
    (Story) => (
      <div style={{ background: '#FFE600', padding: '1rem' }}>
        <Story />
      </div>
    ),
  ],
}
