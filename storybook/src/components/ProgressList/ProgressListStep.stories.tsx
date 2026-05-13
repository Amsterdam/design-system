/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'

import { Paragraph } from '@amsterdam/design-system-react'
import { ProgressList } from '@amsterdam/design-system-react/src'
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

export const Step: Story = {
  args: {
    children: <Paragraph>{exampleParagraph()}</Paragraph>,
    collapsed: false,
    heading: 'Aanpassing ontwerp fietspad Entreegebied',
    status: 'current',
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
