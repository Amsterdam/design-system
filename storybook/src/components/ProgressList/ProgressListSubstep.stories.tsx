/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList.Substep,
  argTypes: {
    status: {
      control: {
        labels: { undefined: 'default' },
        type: 'radio',
      },
      options: [undefined, 'current', 'completed'],
    },
  },
  decorators: [
    (Story) => (
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <ProgressList.Substeps>
            <Story />
          </ProgressList.Substeps>
        </ProgressList.Step>
      </ProgressList>
    ),
  ],
} satisfies Meta<typeof ProgressList.Substep>

export default meta

type Story = StoryObj<typeof meta>

export const Substep: Story = {
  args: {
    children: <Paragraph>Juni: Raadhuisstraat, Westermarkt en Rozengracht</Paragraph>,
    status: 'current',
  },
}
