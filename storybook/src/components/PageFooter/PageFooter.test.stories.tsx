/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { PageFooter } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as pageFooterMeta } from './PageFooter.stories'

const meta = {
  ...pageFooterMeta,
  title: 'Components/Containers/Page Footer',
} satisfies Meta<typeof PageFooter>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <PageFooter.Spotlight key={1}>
        <ul>
          <li>Contactformulier</li>
          <li>Adressen en openingstijden</li>
        </ul>
      </PageFooter.Spotlight>,
      <PageFooter.Menu key={2}>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Webarchief</PageFooter.MenuLink>
      </PageFooter.Menu>,
    ],
  },
  render: (args) =>
    getVariants({
      component: PageFooter,
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
