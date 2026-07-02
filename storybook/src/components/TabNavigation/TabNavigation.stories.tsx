/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { DocumentIcon, EuroIcon, MegaphoneIcon, PersonIcon } from '@amsterdam/design-system-react-icons'
import { TabNavigation } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

const useTabNavigation = (labels: Array<string>, initialLabel?: string) => {
  const [current, setCurrent] = useState(initialLabel ?? labels[0])

  const handleClick = (event: MouseEvent<HTMLAnchorElement>, label: string) => {
    event.preventDefault()
    setCurrent(label)
  }

  return { current, handleClick }
}

const meta = {
  title: 'Components/Navigation/Tab Navigation',
  component: TabNavigation,
  argTypes: {
    orientation: {
      control: {
        labels: { undefined: 'horizontal (default)' },
        type: 'inline-radio',
      },
      options: [undefined, 'vertical'],
    },
  },
} satisfies Meta<typeof TabNavigation>

export default meta

type Story = StoryObj<typeof meta>

const labels = ['Gegevens', 'Aanslagen', 'Documenten', 'Acties']

export const Default: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => {
    const { current, handleClick } = useTabNavigation(labels)

    return (
      <TabNavigation {...args}>
        <TabNavigation.List>
          {labels.map((label) => (
            <TabNavigation.Link
              aria-current={current === label ? 'page' : undefined}
              href={`#${label.toLowerCase()}`}
              key={label}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    )
  },
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  parameters: {
    docs: {
      source: {
        code: `<TabNavigation orientation="vertical">
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens">Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen">Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten">Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties">Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => {
    const { current, handleClick } = useTabNavigation(labels)

    return (
      <TabNavigation {...args}>
        <TabNavigation.List>
          {labels.map((label) => (
            <TabNavigation.Link
              aria-current={current === label ? 'page' : undefined}
              href={`#${label.toLowerCase()}`}
              key={label}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    )
  },
}

const labelsWithIcons = [
  { icon: PersonIcon, label: 'Gegevens' },
  { icon: EuroIcon, label: 'Aanslagen' },
  { icon: DocumentIcon, label: 'Documenten' },
  { icon: MegaphoneIcon, label: 'Acties' },
]

export const WithIcons: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/gegevens" icon={PersonIcon}>Gegevens</TabNavigation.Link>
    <TabNavigation.Link href="/aanslagen" icon={EuroIcon}>Aanslagen</TabNavigation.Link>
    <TabNavigation.Link href="/documenten" icon={DocumentIcon}>Documenten</TabNavigation.Link>
    <TabNavigation.Link href="/acties" icon={MegaphoneIcon}>Acties</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => {
    const { current, handleClick } = useTabNavigation(labelsWithIcons.map(({ label }) => label))

    return (
      <TabNavigation {...args}>
        <TabNavigation.List>
          {labelsWithIcons.map(({ icon, label }) => (
            <TabNavigation.Link
              aria-current={current === label ? 'page' : undefined}
              href={`#${label.toLowerCase()}`}
              icon={icon}
              key={label}
              onClick={(e) => handleClick(e, label)}
            >
              {label}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    )
  },
}

const twelve = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve']

export const WithManyLinks: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/one">Tab one</TabNavigation.Link>
    <TabNavigation.Link href="/two">Tab two</TabNavigation.Link>
    <TabNavigation.Link href="/three">Tab three</TabNavigation.Link>
    {/* … */}
    <TabNavigation.Link href="/twelve">Tab twelvs</TabNavigation.Link>
  </TabNavigation.List>
</TabNavigation>`,
        language: 'tsx',
      },
    },
  },
  render: (args) => {
    const { current, handleClick } = useTabNavigation(twelve)

    return (
      <TabNavigation {...args}>
        <TabNavigation.List>
          {twelve.map((name) => (
            <TabNavigation.Link
              aria-current={current === name ? 'page' : undefined}
              href={`#${name.toLowerCase()}`}
              key={name}
              onClick={(e) => handleClick(e, name)}
            >
              Tab {name}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    )
  },
}
