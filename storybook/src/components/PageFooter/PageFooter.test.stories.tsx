/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { PageFooter } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '#storybook/_common/renderComponentVariants'

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
        <Paragraph color="inverse">Adressen en openingstijden</Paragraph>
      </PageFooter.Spotlight>,
      <PageFooter.Menu key={2}>
        <PageFooter.MenuLink href="#">Over deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Privacy</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Cookies op deze site</PageFooter.MenuLink>
        <PageFooter.MenuLink href="#">Webarchief</PageFooter.MenuLink>
      </PageFooter.Menu>,
    ],
  },
  render: (args, context) => renderComponentVariants(PageFooter, { args }, context),
  tags: ['!dev', '!autodocs'],
}
