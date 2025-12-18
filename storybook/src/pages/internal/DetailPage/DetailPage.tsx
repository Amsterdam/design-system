/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  Accordion,
  Breadcrumb,
  Button,
  Column,
  FileInput,
  Grid,
  Heading,
  Icon,
  Paragraph,
  Row,
  StandaloneLink,
  Table,
  Tabs,
} from '@amsterdam/design-system-react'
import { CheckMarkIcon, ClockIcon, PencilIcon, SuccessFillIcon } from '@amsterdam/design-system-react-icons'
import { DescriptionList } from '@amsterdam/design-system-react/dist/DescriptionList/DescriptionList'
import { ActionGroup } from '@amsterdam/design-system-react/src'

export const DetailPage = () => (
  <Grid paddingBottom="x-large" paddingTop="large" style={{ backgroundColor: '#E8E8E8' }}>
    <Grid.Cell span="all">
      <Breadcrumb>
        <Breadcrumb.Link href="#">Home</Breadcrumb.Link>
        <Breadcrumb.Link href="#">Intake</Breadcrumb.Link>
      </Breadcrumb>
    </Grid.Cell>
    <Grid.Cell span="all">
      <Row align="between">
        <Heading level={1}>Intake</Heading>
        <StandaloneLink href="#" icon={''}>
          Opslaan en later verder
        </StandaloneLink>
      </Row>
    </Grid.Cell>

    <Grid.Cell span={{ narrow: 3, medium: 3, wide: 3 }}>
      <div style={{ backgroundColor: '#fff' }}>
        <Button
          icon={SuccessFillIcon}
          iconBefore
          style={{ inlineSize: '100%', justifyContent: 'flex-start' }}
          variant="secondary"
        >
          Intake
        </Button>
        <Button
          icon={SuccessFillIcon}
          iconBefore
          style={{ inlineSize: '100%', justifyContent: 'flex-start' }}
          variant="secondary"
        >
          Ontwerp
        </Button>
        <Button
          icon={SuccessFillIcon}
          iconBefore
          style={{ inlineSize: '100%', justifyContent: 'flex-start' }}
          variant="secondary"
        >
          Projectaanpak
        </Button>
        <Button
          icon={SuccessFillIcon}
          iconBefore
          style={{ inlineSize: '100%', justifyContent: 'flex-start' }}
          variant="secondary"
        >
          Uitvoering
        </Button>
        <Button
          icon={ClockIcon}
          iconBefore
          style={{ inlineSize: '100%', justifyContent: 'flex-start' }}
          variant="secondary"
        >
          Geschiedenis
        </Button>
      </div>
    </Grid.Cell>
    <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
      <Tabs>
        <Tabs.List style={{ backgroundColor: '#fff' }}>
          <Tabs.Button aria-controls="gegevens">
            <Icon svg={SuccessFillIcon} /> Gegevens
          </Tabs.Button>
          <Tabs.Button aria-controls="aanslagen">
            <Icon svg={SuccessFillIcon} /> Locatie
          </Tabs.Button>
          <Tabs.Button aria-controls="documenten">
            <Icon svg={SuccessFillIcon} /> Werk
          </Tabs.Button>
          <Tabs.Button aria-controls="acties">
            <Icon svg={SuccessFillIcon} /> Planning
          </Tabs.Button>
        </Tabs.List>
        <Tabs.Panel id="gegevens">
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--ams-space-m)' }}>
            <div style={{ backgroundColor: '#fff', flex: '1 1 50%', padding: 'var(--ams-space-l)' }}>
              <Column gap="large">
                <Accordion headingLevel={2}>
                  <Accordion.Section expanded label="Controleer stap 1">
                    <DescriptionList>
                      <DescriptionList.Term key={1}>Het hoger onderwijs</DescriptionList.Term>
                      <DescriptionList.Description key={2}>Het hbo en wo</DescriptionList.Description>
                      <DescriptionList.Term key={3}>Het mbo en hoger onderwijs</DescriptionList.Term>
                      <DescriptionList.Description key={4}>Het vervolgonderwijs</DescriptionList.Description>
                      <DescriptionList.Term key={5}>Laagopgeleid</DescriptionList.Term>
                      <DescriptionList.Description key={6}>Praktisch opgeleid</DescriptionList.Description>
                      <DescriptionList.Term key={7}>Hoogopgeleid</DescriptionList.Term>
                      <DescriptionList.Description key={8}>Theoretisch opgeleid</DescriptionList.Description>
                      <DescriptionList.Term key={9}>Opleidingsniveau</DescriptionList.Term>
                      <DescriptionList.Description key={10}>Onderwijsrichting</DescriptionList.Description>
                    </DescriptionList>
                  </Accordion.Section>
                  <Accordion.Section label="Adresgegevens">
                    <div>
                      <Table>
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
                    </div>
                  </Accordion.Section>
                  <Accordion.Section label="Contactgegevens">
                    <Paragraph>Inhoud van de sectie Contactgegevens.</Paragraph>
                  </Accordion.Section>
                </Accordion>

                <div>
                  <Heading className="ams-mb-xs" level={2}>
                    Akkoord Voorwaarden
                  </Heading>
                  <Paragraph>
                    Indiener is bekend met de Amsterdamse Verordening en Nadere Regels Werken in de Openbare Ruimte
                    (WIOR) waarin de regels, uitvoeringsvoorschriften, procesbeschrijving, financiële regelingen en de
                    handhaving hierop, zijn vastgelegd.
                  </Paragraph>
                  <StandaloneLink href="#">zoek.officielebekendmakingen.nl/gmb-2001-108217.html</StandaloneLink>
                </div>

                <div>
                  <ActionGroup>
                    <Button icon={PencilIcon} variant="secondary">
                      Wijzigen
                    </Button>
                    <Button icon={CheckMarkIcon} variant="primary">
                      Indienen
                    </Button>
                  </ActionGroup>
                </div>
              </Column>
            </div>
            <div style={{ backgroundColor: '#fff', flex: '1 0 450px', padding: 'var(--ams-space-l)' }}>
              <Column gap="large">
                <div>
                  <Heading className="ams-mb-xs" level={2}>
                    Ontwerpvoorstel
                  </Heading>
                  <Paragraph>
                    Indiener is bekend met de Amsterdamse Verordening en Nadere Regels Werken in de Openbare Ruimte
                    (WIOR) waarin de regels, uitvoeringsvoorschriften, procesbeschrijving, financiële regelingen en de
                    handhaving hierop, zijn vastgelegd.
                  </Paragraph>
                  <StandaloneLink href="#">zoek.officielebekendmakingen.nl/gmb-2001-108217.html</StandaloneLink>
                </div>
                <FileInput />
              </Column>
            </div>
          </div>
        </Tabs.Panel>
        <Tabs.Panel id="aanslagen">
          <Heading className="ams-mb-xs" level={3}>
            Aanslagen
          </Heading>
          Inhoud van het tabblad Aanslagen.
        </Tabs.Panel>
        <Tabs.Panel id="documenten">
          <Heading className="ams-mb-xs" level={3}>
            Documenten
          </Heading>
          Inhoud van het tabblad Documenten.
        </Tabs.Panel>
        <Tabs.Panel id="acties">
          <Heading className="ams-mb-xs" level={3}>
            Acties
          </Heading>
          Inhoud van het tabblad Acties.
        </Tabs.Panel>
      </Tabs>
    </Grid.Cell>
  </Grid>
)
