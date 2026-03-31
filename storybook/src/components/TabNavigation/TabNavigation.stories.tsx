/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { MouseEvent } from 'react'

import { TabNavigation } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

import { cityParts } from '../../_common/exampleContent'

function useTabNavigation(labels: Array<string>, initialLabel?: string) {
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
  render: () => {
    const { current, handleClick } = useTabNavigation(labels)

    return (
      <TabNavigation>
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
  decorators: [(Story) => <div style={{ maxWidth: '16rem' }}>{Story()}</div>],
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
  render: () => {
    const { current, handleClick } = useTabNavigation(labels)

    return (
      <TabNavigation orientation="vertical">
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

export const WithManyLinks: Story = {
  parameters: {
    docs: {
      source: {
        code: `<TabNavigation>
  <TabNavigation.List>
    <TabNavigation.Link aria-current="page" href="/centrum">Centrum</TabNavigation.Link>
    <TabNavigation.Link href="/westpoort">Westpoort</TabNavigation.Link>
    <TabNavigation.Link href="/west">West</TabNavigation.Link>
    {/* … */}
  </TabNavigation.List>
</TabNavigation>`,
        language: 'tsx',
      },
    },
  },
  render: () => {
    const { current, handleClick } = useTabNavigation(cityParts)

    return (
      <TabNavigation>
        <TabNavigation.List>
          {cityParts.map((name) => (
            <TabNavigation.Link
              aria-current={current === name ? 'page' : undefined}
              href={`#${name.toLowerCase()}`}
              key={name}
              onClick={(e) => handleClick(e, name)}
            >
              {name}
            </TabNavigation.Link>
          ))}
        </TabNavigation.List>
      </TabNavigation>
    )
  },
}
