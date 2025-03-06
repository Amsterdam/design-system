/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Alert,
  Button,
  Column,
  Field,
  FieldSet,
  Heading,
  Label,
  Paragraph,
  Radio,
  Row,
  Select,
  Table,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
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

export const WithForm: Story = {
  args: {
    children: [
      <Tabs.List key="tabsList">
        <Tabs.Button key="form" tab={0}>
          Form
        </Tabs.Button>
      </Tabs.List>,
      <Tabs.Panel key="form" tab={0}>
        <form>
          <form className="ams-gap--md" id="main" onSubmit={(e) => e.preventDefault()}>
            <Field>
              <Label htmlFor="body">Wat wilt u aan de gemeente vragen?</Label>
              <Paragraph id="bodyDescription" size="small">
                Een duidelijke beschrijving van uw vraag helpt ons bij het behandelen.
              </Paragraph>
              <TextArea aria-describedby="bodyDescription" id="body" rows={4} />
            </Field>
            <FieldSet aria-describedby="contactDetailsDescription" legend="Wat zijn uw gegevens?">
              <Column gap="small">
                <Paragraph id="contactDetailsDescription">
                  Wij hebben uw gegevens nodig om contact met u te kunnen opnemen.
                </Paragraph>
                <Field>
                  <Label htmlFor="initials">Voorletters</Label>
                  <TextInput id="initials" name="initials" />
                </Field>
                <Field>
                  <Label htmlFor="familyName">Achternaam</Label>
                  <TextInput autoComplete="family-name" id="familyName" name="familyName" />
                </Field>
                <FieldSet legend="Woonplaats">
                  <Radio name="city" value="amsterdam">
                    Amsterdam
                  </Radio>
                  <Radio name="city" value="weesp">
                    Weesp
                  </Radio>
                  <Radio name="city" value="anders">
                    Anders
                  </Radio>
                </FieldSet>
                <Field>
                  <Label htmlFor="email">E-mail</Label>
                  <TextInput autoComplete="email" id="email" name="email" />
                </Field>
                <Row wrap>
                  <Field>
                    <Label htmlFor="countryCode">Landnummer</Label>
                    <Select id="countryCode" name="countryCode">
                      <Select.Option value="+31">Nederland +31</Select.Option>
                      <Select.Option value="+32">België +32</Select.Option>
                      <Select.Option value="+33">Frankrijk +33</Select.Option>
                    </Select>
                  </Field>
                  <Field>
                    <Label htmlFor="phone">Telefoonnummer</Label>
                    <TextInput autoComplete="tel" id="phone" name="phone" />
                  </Field>
                </Row>
              </Column>
            </FieldSet>
            <Alert heading="Waarom vragen we om deze gegevens?" headingLevel={2}>
              <Paragraph>
                We bewaren uw contactgegevens voor het afhandelen van uw vraag of klacht en het verbeteren van onze
                dienstverlening.
              </Paragraph>
            </Alert>
            <div>
              <Button type="submit">Versturen</Button>
            </div>
          </form>
        </form>
      </Tabs.Panel>,
    ],
  },
}
