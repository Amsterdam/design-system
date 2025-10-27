/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { DescriptionList } from '@amsterdam/design-system-react/src'

import { getVariants } from '../../utils/getVariants'
import { default as descriptionListMeta } from './DescriptionList.stories'

const meta = {
  ...descriptionListMeta,
  title: 'Components/Text/Description List',
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  render: (args) =>
    getVariants({
      component: DescriptionList,
      args,
      children: (
        <>
          <DescriptionList.Term>Het hoger onderwijs</DescriptionList.Term>
          <DescriptionList.Description>Het hbo en wo</DescriptionList.Description>
          <DescriptionList.Term>Het mbo en hoger onderwijs</DescriptionList.Term>
          <DescriptionList.Description>Het vervolgonderwijs</DescriptionList.Description>
          <DescriptionList.Term>Laagopgeleid</DescriptionList.Term>
          <DescriptionList.Description>Praktisch opgeleid</DescriptionList.Description>
          <DescriptionList.Term>Hoogopgeleid</DescriptionList.Term>
          <DescriptionList.Description>Theoretisch opgeleid</DescriptionList.Description>
          <DescriptionList.Term>Opleidingsniveau</DescriptionList.Term>
          <DescriptionList.Description>Onderwijsrichting</DescriptionList.Description>
        </>
      ),
    }),
  tags: ['!dev', '!autodocs'],
}
