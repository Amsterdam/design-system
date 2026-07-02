/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageFooter } from '@amsterdam/design-system-react/src'

import { headingLevelArgType } from '#storybook/_common/argTypes'

const meta = {
  title: 'Components/Containers/Page Footer',
  component: PageFooter.Menu,
  argTypes: {
    // A level 1 heading never belongs in the footer, so this offers a subset of the allowed levels.
    headingLevel: headingLevelArgType([2, 3, 4], 2),
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
