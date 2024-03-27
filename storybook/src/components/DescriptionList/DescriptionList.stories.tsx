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
  args: {
    children: [
      <DescriptionList.Term key={1}>Gebied</DescriptionList.Term>,
      <DescriptionList.Details key={2}>Gemeente Amsterdam</DescriptionList.Details>,
      <DescriptionList.Term key={3}>Stadsdeel</DescriptionList.Term>,
      <DescriptionList.Details key={4}>West</DescriptionList.Details>,
      <DescriptionList.Term key={5}>Opmerkingen</DescriptionList.Term>,
      <DescriptionList.Details key={6}>{paragraph}</DescriptionList.Details>,
    ],
    inverseColor: false,
  },
} satisfies Meta<typeof DescriptionList>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  decorators: [
    (Story, context) => (
      <div className={context.args['inverseColor'] ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}

export const MultipleDetails: Story = {
  args: {
    children: [
      <DescriptionList.Term key={1}>Gebied</DescriptionList.Term>,
      <DescriptionList.Details key={2}>Gemeente Amsterdam</DescriptionList.Details>,
      <DescriptionList.Term key={3}>Stadsdeel</DescriptionList.Term>,
      <DescriptionList.Details key={4}>Noord</DescriptionList.Details>,
      <DescriptionList.Details key={5}>Oost</DescriptionList.Details>,
      <DescriptionList.Details key={6}>Zuid</DescriptionList.Details>,
      <DescriptionList.Details key={7}>West</DescriptionList.Details>,
    ],
  },
}

export const InvertedColor: Story = {
  args: {
    inverseColor: true,
  },
  decorators: [
    (Story, context) => (
      <div className={context.args['inverseColor'] ? 'ams-docs-dark-background' : undefined}>
        <Story />
      </div>
    ),
  ],
}
