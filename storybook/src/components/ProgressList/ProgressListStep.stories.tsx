/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'
import { useArgs } from 'storybook/preview-api'

import { exampleParagraph } from '#storybook/_common/exampleContent'

const meta = {
  title: 'Components/Containers/Progress List',
  component: ProgressList.Step,
  argTypes: {
    collapsed: {
      control: {
        labels: { undefined: 'undefined (uncontrolled)' },
        type: 'radio',
      },
      options: [undefined, true, false],
    },
    defaultCollapsed: { table: { disable: true } },
    onToggle: { action: 'toggled' },
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
  render: ({ children, ...args }) => {
    const [{ collapsed }, setArgs] = useArgs()

    return (
      <ProgressList.Step
        key={`${String(collapsed === undefined)}-${String(args.status)}`}
        {...args}
        onToggle={(expanded) => {
          if (collapsed !== undefined) setArgs({ collapsed: !expanded })
          args.onToggle?.(expanded)
        }}
      >
        {children}
      </ProgressList.Step>
    )
  },
} satisfies Meta<typeof ProgressList.Step>

export default meta

type Story = StoryObj<typeof meta>

export const Step: Story = {
  args: {
    children: <Paragraph>{exampleParagraph()}</Paragraph>,
    collapsed: false,
    heading: 'Aanpassing ontwerp fietspad Entreegebied',
    status: 'current',
  },
}
