/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Heading, StandaloneLink } from '@amsterdam/design-system-react'
import { HouseIcon, PhoneIcon, SpeechBalloonEllipsisIcon } from '@amsterdam/design-system-react-icons'
import { LinkList } from '@amsterdam/design-system-react/src'

import { exampleLinkList } from '#storybook/_common/exampleContent'

const linkList = exampleLinkList()

const meta = {
  title: 'Components/Navigation/Link List',
  component: LinkList,
} satisfies Meta<typeof LinkList>

export default meta

type Story = StoryObj<typeof meta>

const StoryTemplate: Story = {
  args: {
    children: linkList.map((text) => (
      <LinkList.Link href="#" key={text}>
        {text}
      </LinkList.Link>
    )),
  },
}

export const Default: Story = {
  ...StoryTemplate,
}

export const WithHeading: Story = {
  ...StoryTemplate,
  render: ({ children, ...args }) => (
    // ams-prose sets the vertical rhythm between the heading and the list.
    <div className="ams-prose">
      <Heading level={3}>Adres en inschrijving</Heading>
      <LinkList {...args}>{children}</LinkList>
    </div>
  ),
}
export const LinkToTheWiderSet: Story = {
  ...StoryTemplate,
  render: ({ children, ...args }) => (
    // ams-prose sets the medium the vertical space guidance asks for between the list and the link below it.
    <div className="ams-prose">
      <LinkList {...args}>{children}</LinkList>
      <StandaloneLink href="#">Alle onderwerpen</StandaloneLink>
    </div>
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
