/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList.Substeps,
  decorators: [
    (Story) => (
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <Story />
        </ProgressList.Step>
      </ProgressList>
    ),
  ],
} satisfies Meta<typeof ProgressList.Substeps>

export default meta

type Story = StoryObj<typeof meta>

export const Substeps: Story = {
  args: {
    children: [
      <ProgressList.Substep key={0} status="completed">
        <Paragraph>Februari: De Clercqstraat en Jan Evertsenstraat</Paragraph>
      </ProgressList.Substep>,
      <ProgressList.Substep key={1} status="current">
        <Paragraph>Juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>
      </ProgressList.Substep>,
      <ProgressList.Substep key={2}>
        <Paragraph>Augustus: Kruispunt Marnixstraat-Rozengracht</Paragraph>
      </ProgressList.Substep>,
    ],
  },
}
