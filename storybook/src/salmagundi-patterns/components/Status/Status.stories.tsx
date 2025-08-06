import React from 'react'

import { Meta, StoryObj } from '@storybook/react'

import { Status } from './Status'
import { StatusItem } from './StatusItem'
import { StatusStep } from './StatusStep'
import { StatusCaption } from './StatusCaption'

const meta = {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    collapsible: true,
    children: (
      <>
        <StatusItem title="Aanmelding gezinsbezoek" status="done">
          <StatusStep>Gezinsbezoek aangemeld door Justin van der Meij (Noord) op 3 januari 2025</StatusStep>
          <StatusStep>notificatiebrief bijgesloten</StatusStep>
        </StatusItem>
        <StatusItem title="Plan een gezinsbezoek in" status="active" expanded>
          <StatusStep>Afspraak gemaakt met Politie of wijkagent</StatusStep>
          <StatusStep>Gezinsbezoeker plant een gezinsbezoek in met alle partijen</StatusStep>
        </StatusItem>
        <StatusItem title="Gezinsbezoek" />
        <StatusItem title="Gespreksverslag">
          <StatusCaption>Uiterlijk ingevoerd op 12-12-2025</StatusCaption>
        </StatusItem>
      </>
    ),
  },
}
