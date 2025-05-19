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
    href: '#',
    icon: Icons.ChevronForwardIcon,
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
    size: {
      control: {
        labels: { undefined: 'medium' },
        type: 'radio',
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
      <LinkList.Link href="#" icon={Icons.ChattingIcon} key="form">
        Contactformulier
      </LinkList.Link>,
      <LinkList.Link href="#" icon={Icons.HousingIcon} key="address">
        Adressen en openingstijden
      </LinkList.Link>,
      <LinkList.Link href="#" icon={Icons.PhoneIcon} key="phone">
        Bel 14 020
      </LinkList.Link>,
    ],
  },
}

export const SmallText: Story = {
  ...StoryTemplate,
  args: {
    children: [
      <LinkList.Link href="#" key="about" size="small">
        Over deze website
      </LinkList.Link>,
      <LinkList.Link href="#" key="newsletter" size="small">
        Abonneer u op de nieuwsbrief
      </LinkList.Link>,
      <LinkList.Link href="#" key="jobs" size="small">
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
    color: 'contrast',
  },
}

export const InverseColour: LinkStory = {
  ...LinkStoryTemplate,
  args: {
    ...LinkStoryTemplate.args,
    color: 'inverse',
  },
}
