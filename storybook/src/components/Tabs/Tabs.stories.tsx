/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph, Table } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react-vite'
import { PropsWithChildren, ReactNode } from 'react'
import { cityParts, exampleParagraph } from '../shared/exampleContent'

const slowPanelDelay = 1000

const SlowPanel = ({ children }: PropsWithChildren) => {
  console.log(`[ARTIFICIALLY SLOW] Adding a ${slowPanelDelay}ms delay…`)

  let startTime = performance.now()
  while (performance.now() - startTime < slowPanelDelay) {
    /* Emulate slow code. */
  }

  return children
}

type TabContent = {
  body: ReactNode
  label: string
}

const tabsContent: Array<TabContent> = [
  { body: exampleParagraph(), label: 'Gegevens' },
  { body: exampleParagraph(), label: 'Aanslagen' },
  {
    body: (
      <>
        (This tab panel simulates a load time of {slowPanelDelay} milliseconds.)
        <SlowPanel />
      </>
    ),
    label: 'Documenten',
  },
  { body: exampleParagraph(), label: 'Acties' },
]

const defaultTabs = [
  <Tabs.List key="tabsList">
    {tabsContent.map(({ label }) => (
      <Tabs.Button aria-controls={label} key={label}>
        {label}
      </Tabs.Button>
    ))}
  </Tabs.List>,
  tabsContent.map(({ body, label }) => (
    <Tabs.Panel id={label} key={label}>
      <Heading className="ams-mb-xs" level={3}>
        {label}
      </Heading>
      <Paragraph>{body}</Paragraph>
    </Tabs.Panel>
  )),
]

const meta = {
  title: 'Components/Containers/Tabs',
  component: Tabs,
  args: {
    children: defaultTabs,
  },
  argTypes: {
    onTabChange: {
      action: 'clicked',
      description: 'Provides the id of the activated tab.',
    },
  },
} satisfies Meta<typeof Tabs>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithInitialTab: Story = {
  args: {
    activeTab: 'Acties',
  },
}

export const WithWideContent: Story = {
  args: {
    children: [
      <Tabs.List key="tabsList">
        {cityParts.map((name) => (
          <Tabs.Button aria-controls={name} key={name}>
            {name}
          </Tabs.Button>
        ))}
      </Tabs.List>,
      cityParts.map((name) => (
        <Tabs.Panel id={name} key={name}>
          <Table>
            <Table.Caption>
              Voorbeeld van een tabel voor {name === 'Weesp' ? 'stadsgebied' : 'stadsdeel'} {name}
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                {Array.from({ length: 12 }, (_, index) => (
                  <Table.HeaderCell key={`headercell-${index}`}>Kolom</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {Array.from({ length: 3 }, (_, rowIndex) => (
                <Table.Row key={rowIndex}>
                  <Table.HeaderCell scope="row">Rij</Table.HeaderCell>
                  {Array.from({ length: 12 }, (_, columnIndex) => (
                    <Table.Cell key={columnIndex} style={{ textAlign: 'end' }}>
                      {(rowIndex + 1) * (columnIndex + 1)}.000
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </Tabs.Panel>
      )),
    ],
  },
}

const tabsContentWithoutSlowPanel = tabsContent.filter(({ label }) => label !== 'Documenten')

export const PreventTabsFromChanging: Story = {
  args: {
    children: [
      <Tabs.List key="tabsList">
        {tabsContentWithoutSlowPanel.map(({ label }) => (
          <Tabs.Button
            aria-controls={label}
            key={label}
            onClick={(e) => {
              // eslint-disable-next-line no-alert
              const confirmLeave = window.confirm('You have unsaved changes. Do you want to leave?')
              if (!confirmLeave) {
                e.preventDefault()
              }
            }}
          >
            {label}
          </Tabs.Button>
        ))}
      </Tabs.List>,
      tabsContentWithoutSlowPanel.map(({ body, label }) => (
        <Tabs.Panel id={label} key={label}>
          <Heading className="ams-mb-xs" level={3}>
            {label}
          </Heading>
          <Paragraph>{body}</Paragraph>
        </Tabs.Panel>
      )),
    ],
  },
}
