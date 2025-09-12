/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading } from '@amsterdam/design-system-react'
import { HouseIcon, PhoneIcon, SpeechBalloonEllipsisIcon } from '@amsterdam/design-system-react-icons'
import * as Icons from '@amsterdam/design-system-react-icons'
import { LinkList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'

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
    children: linkList.map((text) => (
      <LinkList.Link href="#" key={text}>
        {text}
      </LinkList.Link>
    )),
  },
}

const LinkStoryTemplate: LinkStory = {
  args: {
    children: linkList[0],
    href: '#',
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

export const WithHeading: Story = {
  ...StoryTemplate,
  render: ({ children, ...args }) => (
    <>
      <Heading className="ams-mb-s" level={3}>
        Adres en inschrijving
      </Heading>
      <LinkList {...args}>{children}</LinkList>
    </>
  ),
}
export const CustomIcons: Story = {
  ...StoryTemplate,
  args: {
    children: [
      <LinkList.Link href="#" icon={<SpeechBalloonEllipsisIcon />} key="form">
        Contactformulier
      </LinkList.Link>,
      <LinkList.Link href="#" icon={<HouseIcon />} key="address">
        Adressen en openingstijden
      </LinkList.Link>,
      <LinkList.Link href="#" icon={<PhoneIcon />} key="phone">
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
