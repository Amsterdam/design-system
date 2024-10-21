/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
import { inverseColorDecorator } from '../shared/decorators'

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList,
  decorators: [inverseColorDecorator],
  args: {
    children: [
      <DescriptionList.Term key={1}>het hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Details key={2}>het hbo en wo</DescriptionList.Details>,
      <DescriptionList.Term key={3}>het mbo en hoger onderwijs</DescriptionList.Term>,
      <DescriptionList.Details key={4}>het vervolgonderwijs</DescriptionList.Details>,
      <DescriptionList.Term key={5}>laagopgeleid</DescriptionList.Term>,
      <DescriptionList.Details key={6}>praktisch opgeleid</DescriptionList.Details>,
      <DescriptionList.Term key={7}>hoogopgeleid</DescriptionList.Term>,
      <DescriptionList.Details key={8}>theoretisch opgeleid</DescriptionList.Details>,
      <DescriptionList.Term key={9}>opleidingsniveau</DescriptionList.Term>,
      <DescriptionList.Details key={10}>onderwijsrichting</DescriptionList.Details>,
    ],
    inverseColor: false,
  },
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleDescriptions: Story = {
  args: {
    children: [
      <DescriptionList.Term key={1}>blinde, slechtziende</DescriptionList.Term>,
      <DescriptionList.Details key={2}>persoon met een visuele beperking</DescriptionList.Details>,
      <DescriptionList.Details key={3}>persoon met een visuele handicap</DescriptionList.Details>,
      <DescriptionList.Details key={4}>persoon die blind is</DescriptionList.Details>,
      <DescriptionList.Details key={5}>persoon die slechtziend is</DescriptionList.Details>,
    ],
  },
}

export const InverseColour: Story = {
  args: {
    inverseColor: true,
  },
}
