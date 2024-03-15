/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { DescriptionList } from '@amsterdam/design-system-react'
import { Meta, StoryObj } from '@storybook/react'
import { exampleParagraph } from '../shared/exampleContent'

const paragraph1 = exampleParagraph()
const paragraph2 = exampleParagraph()
const paragraph3 = exampleParagraph()

const meta = {
  title: 'Components/Text/Description List',
  component: DescriptionList,
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: [
      <DescriptionList.Term key={1}>Eerste term</DescriptionList.Term>,
      <DescriptionList.Details key={2}>{paragraph1}</DescriptionList.Details>,
      <DescriptionList.Term key={3}>Tweede term</DescriptionList.Term>,
      <DescriptionList.Details key={4}>{paragraph2}</DescriptionList.Details>,
      <DescriptionList.Term key={5}>Derde term</DescriptionList.Term>,
      <DescriptionList.Details key={6}>{paragraph3}</DescriptionList.Details>,
    ],
  },
}
