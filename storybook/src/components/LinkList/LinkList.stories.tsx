/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { LinkList } from '@amsterdam/design-system-react/src'
import * as Icons from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'
import { exampleLinkList } from '../shared/exampleContent'

const linkList = exampleLinkList()

const meta = {
  title: 'Components/Navigation/Link List',
  component: LinkList,
} satisfies Meta<typeof LinkList>

export default meta

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const linkMeta = {
  component: LinkList.Link,
} satisfies Meta<typeof LinkList.Link>

type Story = StoryObj<typeof meta>
type LinkStory = StoryObj<typeof linkMeta>

const StoryTemplate: Story = {
  args: {
    children: linkList.map((text, index) => (
      <LinkList.Link href="#" key={index}>
        {text}
      </LinkList.Link>
    )),
  },
}

const LinkStoryTemplate: LinkStory = {
  args: {
    children: linkList[0],
    contrastColor: false,
    href: '#',
    icon: Icons.ChevronRightIcon,
    inverseColor: false,
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        labels: { undefined: 'none' },
      },
      options: [undefined, ...Object.keys(Icons)],
      mapping: Icons,
    },
    size: {
      control: {
        type: 'radio',
        labels: { undefined: 'medium' },
      },
      options: ['small', undefined, 'large'],
    },
  },
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
  ...StoryTemplate,
}

export const CustomIcons: Story = {
  ...StoryTemplate,
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
  ...StoryTemplate,
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
}

export const ContrastColour: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    contrastColor: true,
  },
}

export const InverseColour: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    inverseColor: true,
  },
}
