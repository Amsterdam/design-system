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

export const WrapRows: Story = {
  args: {
    children: [
      <DescriptionList.Row key={1}>
        <DescriptionList.Term>Gebied</DescriptionList.Term>
        <DescriptionList.Details>Gemeente Amsterdam</DescriptionList.Details>
      </DescriptionList.Row>,
      <DescriptionList.Row key={2}>
        <DescriptionList.Term>Stadsdelen</DescriptionList.Term>
        <DescriptionList.Details>Noord</DescriptionList.Details>
        <DescriptionList.Details>Oost</DescriptionList.Details>
        <DescriptionList.Details>Zuid</DescriptionList.Details>
        <DescriptionList.Details>West</DescriptionList.Details>
      </DescriptionList.Row>,
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
