/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph = exampleParagraph()

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList,
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <DescriptionList.Term key={3}>Gebied</DescriptionList.Term>,
      <DescriptionList.Details key={4}>Gemeente Amsterdam</DescriptionList.Details>,
      <DescriptionList.Term key={5}>Stadsdeel</DescriptionList.Term>,
      <DescriptionList.Details key={6}>West</DescriptionList.Details>,
      <DescriptionList.Term key={1}>Opmerkingen</DescriptionList.Term>,
      <DescriptionList.Details key={2}>{paragraph}</DescriptionList.Details>,
    ],
  },
}

export const WrapRows: Story = {
  render: () => (
    <DescriptionList>
      <DescriptionList.Row>
        <DescriptionList.Term>Gebied</DescriptionList.Term>
        <DescriptionList.Details>Gemeente Amsterdam</DescriptionList.Details>
      </DescriptionList.Row>
      <DescriptionList.Row>
        <DescriptionList.Term>Stadsdelen</DescriptionList.Term>
        <DescriptionList.Details>Noord</DescriptionList.Details>
        <DescriptionList.Details>Oost</DescriptionList.Details>
        <DescriptionList.Details>Zuid</DescriptionList.Details>
        <DescriptionList.Details>West</DescriptionList.Details>
      </DescriptionList.Row>
    </DescriptionList>
  ),
}
