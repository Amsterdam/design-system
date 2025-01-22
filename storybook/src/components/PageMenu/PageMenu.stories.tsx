/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { PageMenu } from '@amsterdam/design-system-react/src'
import { SearchIcon } from '@amsterdam/design-system-react-icons'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  title: 'Components/Navigation/Page Menu',
  component: PageMenu,
  args: {
    alignEnd: false,
    wrap: undefined,
  },
} satisfies Meta<typeof PageMenu>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <PageMenu.Link key={1} href="#">
        Over deze site
      </PageMenu.Link>,
      <PageMenu.Link key={2} href="#">
        Privacy
      </PageMenu.Link>,
      <PageMenu.Link key={3} href="#">
        Cookies
      </PageMenu.Link>,
    ],
  },
}

export const Alignment: Story = {
  args: {
    alignEnd: true,
    children: [
      <PageMenu.Link key={1} href="#" lang="en">
        English
      </PageMenu.Link>,
      <PageMenu.Link key={2} href="#">
        Contact
      </PageMenu.Link>,
      <PageMenu.Link key={3} href="#" icon={SearchIcon}>
        Zoeken
      </PageMenu.Link>,
    ],
  },
}

export const Wrapping: Story = {
  args: {
    children: [
      <PageMenu.Link key={1} href="#">
        Onderzoeken
      </PageMenu.Link>,
      <PageMenu.Link key={2} href="#">
        Bezoeken
      </PageMenu.Link>,
      <PageMenu.Link key={3} href="#">
        Archiveren
      </PageMenu.Link>,
      <PageMenu.Link key={4} href="#">
        Nieuws
      </PageMenu.Link>,
      <PageMenu.Link key={5} href="#">
        Themasites
      </PageMenu.Link>,
      <PageMenu.Link key={6} href="#">
        Onderwijs
      </PageMenu.Link>,
      <PageMenu.Link key={7} href="#">
        Steun ons
      </PageMenu.Link>,
      <PageMenu.Link key={8} href="#">
        Organisatie
      </PageMenu.Link>,
      <PageMenu.Link key={9} href="#">
        Contact
      </PageMenu.Link>,
    ],
  },
}
