/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'
import { useState } from 'react'
import { useArgs } from 'storybook/preview-api'

import { exampleParagraph } from '../../_common/exampleContent'

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList.Step,
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
        <Story />
      </ProgressList>
    ),
  ],
  render: ({ children, ...args }) => (
    <ProgressList.Step key={`${String(args.defaultCollapsed)}-${String(args.status)}`} {...args}>
      {children}
    </ProgressList.Step>
  ),
} satisfies Meta<typeof ProgressList.Step>

export default meta

type Story = StoryObj<typeof meta>

export const Controlled: Story = {
  decorators: [],
  parameters: {
    controls: { disable: true },
  },
  render: () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(1)

    return (
      <ProgressList collapsible headingLevel={3}>
        <ProgressList.Step
          collapsed={expandedIndex !== 0}
          heading="Aanvraag ingediend"
          onToggle={(expanded) => setExpandedIndex(expanded ? 0 : null)}
          status="completed"
        >
          <Paragraph>Uw aanvraag is op 2 januari 2026 ontvangen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step
          collapsed={expandedIndex !== 1}
          heading="In behandeling"
          onToggle={(expanded) => setExpandedIndex(expanded ? 1 : null)}
          status="current"
        >
          <Paragraph>Een medewerker beoordeelt uw aanvraag en neemt contact met u op bij vragen.</Paragraph>
        </ProgressList.Step>
        <ProgressList.Step
          collapsed={expandedIndex !== 2}
          heading="Besluit"
          onToggle={(expanded) => setExpandedIndex(expanded ? 2 : null)}
        >
          <Paragraph>U ontvangt het besluit binnen 8 weken na uw aanvraag.</Paragraph>
        </ProgressList.Step>
      </ProgressList>
    )
  },
}

export const Step: Story = {
  args: {
    children: <Paragraph>{exampleParagraph()}</Paragraph>,
    collapsed: false,
    heading: 'Aanpassing ontwerp fietspad Entreegebied',
    status: 'current',
  },
  argTypes: {
    defaultCollapsed: { table: { disable: true } },
  },
  render: ({ children, ...args }) => {
    const [, setArgs] = useArgs()

    return (
      <ProgressList.Step
        {...args}
        onToggle={(expanded) => {
          setArgs({ collapsed: !expanded })
        }}
      >
        {children}
      </ProgressList.Step>
    )
  },
}
