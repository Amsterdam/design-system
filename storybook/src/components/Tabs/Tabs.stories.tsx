/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { Heading, Paragraph, Table } from '@amsterdam/design-system-react'
import { Tabs } from '@amsterdam/design-system-react/src'
import { Meta, StoryObj } from '@storybook/react'
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
  id: number
  label: string
}

const tabsContent: Array<TabContent> = [
  { body: exampleParagraph(), id: 0, label: 'Gegevens' },
  { body: exampleParagraph(), id: 1, label: 'Aanslagen' },
  {
    body: (
      <>
        (This tab panel simulates a load time of {slowPanelDelay} milliseconds.)
        <SlowPanel />
      </>
    ),
    id: 2,
    label: 'Documenten',
  },
  { body: exampleParagraph(), id: 3, label: 'Acties' },
]

const defaultTabs = [
  <Tabs.List key="tabsList">
    {tabsContent.map(({ id, label }) => (
      <Tabs.Button key={label} tab={id}>
        {label}
      </Tabs.Button>
    ))}
  </Tabs.List>,
  tabsContent.map(({ body, id, label }) => (
    <Tabs.Panel key={label} tab={id}>
      <Heading className="ams-mb--xs" level={3}>
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
    activeTab: {
      control: {
        max: tabsContent.length - 1,
        min: 0,
        type: 'number',
      },
    },
    onChange: {
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
    activeTab: 3,
  },
}

export const WithWideContent: Story = {
  args: {
    children: [
      <Tabs.List key="tabsList">
        {cityParts.map((name, index) => (
          <Tabs.Button key={name} tab={index}>
            {name}
          </Tabs.Button>
        ))}
      </Tabs.List>,
      cityParts.map((name, index) => (
        <Tabs.Panel key={name} tab={index}>
          <Table>
            <Table.Caption>
              Voorbeeld van een tabel voor {name === 'Weesp' ? 'stadsgebied' : 'stadsdeel'} {name}
            </Table.Caption>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell></Table.HeaderCell>
                {Array.from({ length: 12 }, (_, index) => (
                  <Table.HeaderCell key={index}>Kolom</Table.HeaderCell>
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
