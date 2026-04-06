/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

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
      {/* Default: mix of collapsed (completed) and expanded steps */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <p>This step is collapsed by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* All collapsed: connector hiding, heading spacing, :has() negative margin */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2024" status="completed">
          <p>Content for 2024.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="2025" status="completed">
          <p>Content for 2025.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="2026">
          <p>Content for 2026.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* defaultCollapsed overrides: completed forced open, upcoming forced closed */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step defaultCollapsed={false} heading="Forced open" status="completed">
          <p>This completed step is forced open.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Default" status="completed">
          <p>This completed step is collapsed by default.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This current step is expanded by default.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed heading="Forced closed">
          <p>This upcoming step is forced closed.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Expanded substeps: indicators not clipped by overflow-y: clip */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <p>Content for 2026.</p>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="2027" status="current">
          <p>Content for 2027.</p>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <p>Februari: De Clercqstraat</p>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <p>Juni: Raadhuisstraat</p>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <p>Oktober: Nieuwezijds Voorburgwal</p>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="2028">
          <p>Content for 2028.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Collapsed last step with substeps: connector hidden */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="2026" status="completed">
          <p>Content for 2026.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="2027" status="current">
          <p>Content for 2027.</p>
        </ProgressList.Step>
        <ProgressList.Step defaultCollapsed hasSubsteps heading="2028">
          <p>Content for 2028.</p>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <p>Substep one</p>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <p>Substep two</p>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
      </ProgressList>

      {/* Toggle: Chromatic captures the final state after clicking open */}
      <ProgressList headingLevel={3}>
        <ProgressList.Step heading="Toggled" status="completed">
          <p>This step was collapsed, then clicked open.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This step is expanded by default.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Not collapsible: no buttons, no chevrons, all content visible */}
      <ProgressList collapsible={false} headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <p>This completed step is always visible.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Current" status="current">
          <p>This current step is always visible.</p>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <p>This upcoming step is always visible.</p>
        </ProgressList.Step>
      </ProgressList>

      {/* Not collapsible with substeps */}
      <ProgressList collapsible={false} headingLevel={3}>
        <ProgressList.Step heading="Completed" status="completed">
          <p>Content for completed step.</p>
        </ProgressList.Step>
        <ProgressList.Step hasSubsteps heading="Current" status="current">
          <p>Content for current step.</p>
          <ProgressList.Substeps>
            <ProgressList.Substep status="completed">
              <p>Substep one</p>
            </ProgressList.Substep>
            <ProgressList.Substep status="current">
              <p>Substep two</p>
            </ProgressList.Substep>
            <ProgressList.Substep>
              <p>Substep three</p>
            </ProgressList.Substep>
          </ProgressList.Substeps>
        </ProgressList.Step>
        <ProgressList.Step heading="Upcoming">
          <p>Content for upcoming step.</p>
        </ProgressList.Step>
      </ProgressList>
    </div>
  ),
  tags: ['!dev', '!autodocs'],
}
