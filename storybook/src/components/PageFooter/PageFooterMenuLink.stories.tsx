/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageFooter } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter.MenuLink,
  argTypes: {
    children: {
      control: 'text',
      description: 'The link text.',
      table: { disable: false },
    },
  },
  decorators: [
    (Story) => (
      <PageFooter>
        <PageFooter.Menu>
          <Story />
        </PageFooter.Menu>
      </PageFooter>
    ),
  ],
} satisfies Meta<typeof PageFooter.MenuLink>

export default meta

type Story = StoryObj<typeof meta>

export const MenuLink: Story = {
  args: {
    children: 'Over deze site',
    href: '#',
  },
}
