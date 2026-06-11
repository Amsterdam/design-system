/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'

import { default as progressListMeta } from './ProgressList.stories'

const meta = {
  ...progressListMeta,
  title: 'Components/Containers/Progress List',
} satisfies Meta<typeof ProgressList>

export default meta

type Story = StoryObj<typeof meta>

export const Test: Story = {
  play: async ({ canvas, userEvent }) => {
    const button = canvas.getByRole('button', { name: /Toggled/ })

    await userEvent.click(button)
  },
  render: () => (
    <div style={{ display: 'grid', gap: 'var(--ams-space-l)', gridTemplateColumns: 'repeat(3, 24rem)' }}>
      {/* Default (not collapsible): no buttons, no chevrons, all content visible */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>This completed step is always visible.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This current step is always visible.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>This upcoming step is always visible.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Not collapsible with substeps */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>Content for completed step.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="Current" status="current">
          <Paragraph>Content for current step.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Substep one</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <Paragraph>Substep two</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Substep three</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>Content for upcoming step.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible: mix of collapsed (completed) and expanded steps */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <Paragraph>This step is collapsed by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, all collapsed: connector hiding, heading spacing, :has() negative margin */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2024" status="completed">
          <Paragraph>Content for 2024.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="2025" status="completed">
          <Paragraph>Content for 2025.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="2026">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, defaultCollapsed overrides: completed forced open, upcoming forced closed */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step defaultCollapsed={false} heading="Forced open" status="completed">
          <Paragraph>This completed step is forced open.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Default" status="completed">
          <Paragraph>This completed step is collapsed by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This current step is expanded by default.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="Forced closed">
          <Paragraph>This upcoming step is forced closed.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible with expanded substeps: indicators not clipped by overflow-y: clip */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <Paragraph>Content for 2027.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Februari: De Clercqstraat</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <Paragraph>Juni: Raadhuisstraat</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Oktober: Nieuwezijds Voorburgwal</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="2028">
          <Paragraph>Content for 2028.</Paragraph>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible, collapsed last step with substeps: connector hidden */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <Paragraph>Content for 2026.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed hasSubsteps heading="2027" status="current">
          <Paragraph>Content for 2027.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <Paragraph>Substep one</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Substep two</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed hasSubsteps heading="2028">
          <Paragraph>Content for 2028.</Paragraph>
          <ProgressList.Substeps>
            <ProgressList.Substep>
              <Paragraph>Substep one</Paragraph>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <Paragraph>Substep two</Paragraph>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsible toggle: Chromatic captures the final state after clicking open */}
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step heading="Toggled" status="completed">
          <Paragraph>This step was collapsed, then clicked open.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <Paragraph>This step is expanded by default.</Paragraph>
        </ProgressList.Step>
      </ProgressList>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
