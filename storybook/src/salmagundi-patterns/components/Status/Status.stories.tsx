import { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'
import { Status } from './Status'
import { StatusCaption } from './StatusCaption'
import { StatusItem } from './StatusItem'
import { StatusStep } from './StatusStep'

const meta = {
  title: 'Components/Status',
  component: Status,
  tags: ['autodocs'],
} satisfies Meta<typeof Status>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <StatusItem status="done" title="Aanmelding gezinsbezoek">
          <StatusStep>Gezinsbezoek aangemeld door Justin van der Meij (Noord) op 3 januari 2025</StatusStep>
          <StatusStep>notificatiebrief bijgesloten</StatusStep>
        </StatusItem>
        <StatusItem expanded status="active" title="Plan een gezinsbezoek in">
          <StatusStep>Afspraak gemaakt met Politie of wijkagent</StatusStep>
          <StatusStep>Gezinsbezoeker plant een gezinsbezoek in met alle partijen</StatusStep>
        </StatusItem>
        <StatusItem title="Gezinsbezoek" />
        <StatusItem title="Gespreksverslag">
          <StatusCaption>Uiterlijk ingevoerd op 12-12-2025</StatusCaption>
        </StatusItem>
      </>
    ),
    collapsible: true,
  },
}
