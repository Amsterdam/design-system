/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList } from '@amsterdam/design-system-react/src'

import { renderComponentVariants } from '../../_common/renderComponentVariants'
import { default as descriptionListMeta } from './DescriptionList.stories'

const meta = {
  ...descriptionListMeta,
  title: 'Components/Text/Description List',
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  args: {
    children: [
      <DescriptionList.Term key={1}>Het hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={2}>Het hbo en wo</DescriptionList.Description>,
      <DescriptionList.Term key={3}>Het mbo en hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Description key={4}>Het vervolgonderwijs</DescriptionList.Description>,
      <DescriptionList.Term key={5}>Laagopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={6}>Praktisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={7}>Hoogopgeleid</DescriptionList.Term>,
      <DescriptionList.Description key={8}>Theoretisch opgeleid</DescriptionList.Description>,
      <DescriptionList.Term key={9}>Opleidingsniveau</DescriptionList.Term>,
      <DescriptionList.Description key={10}>Onderwijsrichting</DescriptionList.Description>,
    ],
  },
  render: (args) =>
    renderComponentVariants(DescriptionList, {
      args,
    }),
  tags: ['!dev', '!autodocs'],
}
