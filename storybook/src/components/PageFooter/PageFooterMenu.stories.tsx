/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageFooter } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter.Menu,
  argTypes: {
    headingLevel: {
      control: { type: 'radio' },
      options: [2, 3, 4],
    },
  },
  decorators: [
    (Story) => (
      <PageFooter>
        <Story />
      </PageFooter>
    ),
  ],
} satisfies Meta<typeof PageFooter.Menu>

export default meta

type Story = StoryObj<typeof meta>

export const Menu: Story = {
  args: {
    children: [
      <PageFooter.MenuLink href="#" key="about">
        Over deze site
      </PageFooter.MenuLink>,
      <PageFooter.MenuLink href="#" key="privacy">
        Privacy
      </PageFooter.MenuLink>,
      <PageFooter.MenuLink href="#" key="cookies">
        Cookies op deze site
      </PageFooter.MenuLink>,
      <PageFooter.MenuLink href="#" key="archive">
        Webarchief
      </PageFooter.MenuLink>,
    ],
  },
}
