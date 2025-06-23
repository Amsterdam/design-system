/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ActionGroup,
  Button,
  Column,
  DescriptionList,
  Grid,
  Heading,
  Link,
  Paragraph,
  Table,
  Tabs,
} from '@amsterdam/design-system-react'
import { action } from '@storybook/addon-actions'
import { useEffect, useState } from 'react'
import { FileInputWithFileList } from './FileUploadDemo'

type SubsidyProps = {
  aanvrager: string
  bedragAangevraagd: string
  bedragVastgesteld: string
  bedragVerleend: string
  beleidsterrein: string
  datumOverzicht: string
  dossiernummer: string
  id: string
  organisatieonderdeel: string
  projectnaam: string
  publicatiedatumVaststellingsbesluit: string
  publicatiedatumVerleningsbesluit: string
  regelingnaam: string
  subsidiejaar: string
  typePeriodiciteit: string
}

export const DetailsPage = () => {
  const [subsidy, setSubsidy] = useState<SubsidyProps | null>(null)

  useEffect(() => {
    const fetchSubsidy = async () => {
      try {
        const randomId = Math.floor(Math.random() * 50) // Simulate a random ID for the subsidy
        const response = await fetch(`https://api.data.amsterdam.nl/v1/subsidies/openbaar_subsidieregister/${randomId}`)
        const data = await response.json()
        const item = data
        console.log('Fetched Subsidy:', item)
        const formattedSubsidy: SubsidyProps = {
          aanvrager: item.aanvrager || '-',
          bedragAangevraagd:
            Intl.NumberFormat('nl-NL', { currency: 'EUR', style: 'currency' }).format(item.bedragAangevraagd) || '-',
          bedragVastgesteld:
            Intl.NumberFormat('nl-NL', { currency: 'EUR', style: 'currency' }).format(item.bedragVastgesteld) || '-',
          bedragVerleend:
            Intl.NumberFormat('nl-NL', { currency: 'EUR', style: 'currency' }).format(item.bedragVerleend) || '-',
          beleidsterrein: item.beleidsterrein || '-',
          datumOverzicht: item.datumOverzicht || '-',
          dossiernummer: item.dossiernummer || '-',
          id: item.id || '#',
          organisatieonderdeel: item.organisatieonderdeel || '-',
          projectnaam: item.projectnaam || '-',
          publicatiedatumVaststellingsbesluit: item.publicatiedatumVaststellingsbesluit || '-',
          publicatiedatumVerleningsbesluit: item.publicatiedatumVerleningsbesluit || '-',
          regelingnaam: item.regelingnaam || '-',
          subsidiejaar: item.subsidiejaar || 0,
          typePeriodiciteit: item.typePeriodiciteit || '-',
        }
        setSubsidy(formattedSubsidy)
      } catch (error) {
        console.error('Error fetching Subsidy:', error)
      }
    }

    fetchSubsidy()
  }, [])

  const Files = [
    {
      date: '11-01-2025',
      downloadURL: '#',
      filename: 'Projectspecificatie.pdf',
      id: 1,
      kind: 'Document',
    },
    {
      date: '11-01-2025',
      downloadURL: '#',
      filename: 'Aanmeldingsformulier.docx',
      id: 2,
      kind: 'Document',
    },
    {
      date: '11-01-2025',
      downloadURL: '#',
      filename: 'Overzicht.xlsx',
      id: 3,
      kind: 'Spreadsheet',
    },
  ]

  return (
    <>
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 12 }}>
          <Heading level={1}>{subsidy?.projectnaam ?? 'Laden...'}</Heading>
          <Paragraph size="large">{subsidy?.dossiernummer}</Paragraph>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 8, wide: 12 }}>
          <Tabs onTabChange={function Xs() {}}>
            <Tabs.List>
              <Tabs.Button aria-controls="Gegevens">Gegevens</Tabs.Button>
              <Tabs.Button aria-controls="Documenten">Documenten</Tabs.Button>
              <Tabs.Button aria-controls="Acties">Acties</Tabs.Button>
            </Tabs.List>
            <Tabs.Panel id="Gegevens">
              <DescriptionList termsWidth="medium">
                {subsidy &&
                  Object.entries(subsidy).map(([key, value]) => {
                    // Convert camelCase to "Camel Case"
                    const formattedKey = key
                      .replace(/([A-Z])/g, ' $1') // insert space before capital letters
                      .replace(/^./, (str) => str.toUpperCase()) // capitalize first letter
                    return (
                      <>
                        <DescriptionList.Term>{formattedKey}</DescriptionList.Term>
                        <DescriptionList.Description>{value}</DescriptionList.Description>
                      </>
                    )
                  })}
              </DescriptionList>
            </Tabs.Panel>
            <Tabs.Panel id="Documenten">
              <Table className="ams-mb-m" width={'100%'}>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell>Bestandsnaam</Table.HeaderCell>
                    <Table.HeaderCell>Datum</Table.HeaderCell>
                    <Table.HeaderCell>Soort</Table.HeaderCell>
                    <Table.HeaderCell>Acties</Table.HeaderCell>
                  </Table.Row>
                </Table.Header>
                <Table.Body>
                  {Files.map((File) => (
                    <Table.Row key={File.id}>
                      <Table.Cell>{File.filename}</Table.Cell>
                      <Table.Cell>{File.date}</Table.Cell>
                      <Table.Cell>{File.kind}</Table.Cell>
                      <Table.Cell>
                        <Link href={File.downloadURL}>Download</Link>
                      </Table.Cell>
                    </Table.Row>
                  ))}
                </Table.Body>
              </Table>
            </Tabs.Panel>
            <Tabs.Panel id="Acties">
              <Column gap="large">
                <Heading level={2}>Object Acties</Heading>
                <ActionGroup>
                  <Button onClick={action('Actie 1 uitgevoerd')} variant="primary">
                    Actie 1
                  </Button>
                  <Button onClick={action('Actie 1 uitgevoerd')} variant="secondary">
                    Actie 2
                  </Button>
                  <Button disabled onClick={action('Actie 1 uitgevoerd')} variant="secondary">
                    Actie 3
                  </Button>
                </ActionGroup>
                <Heading level={2}>Upload</Heading>
                <FileInputWithFileList />
              </Column>
            </Tabs.Panel>
          </Tabs>
        </Grid.Cell>
      </Grid>
    </>
  )
}
