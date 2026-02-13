/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ActionGroup,
  Button,
  Column,
  DescriptionList,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Pagination,
  Paragraph,
  Row,
  Table,
  Tabs,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
import { DeleteIcon, SaveIcon } from '@amsterdam/design-system-react-icons'
import { lazy, Suspense, useEffect, useState } from 'react'

const BrugTable = lazy(() =>
  Promise.resolve({
    default: ({
      brugData,
      columns,
      currentPage,
      error,
      loading,
    }: {
      brugData: any[]
      columns: string[]
      currentPage: number
      error: string | null
      loading: boolean
    }) => (
      <>
        {loading ? (
          <Paragraph>Bezig met laden...</Paragraph>
        ) : error ? (
          <Paragraph>Fout bij laden: {error}</Paragraph>
        ) : (
          <Table className="ams-mb-l" style={{ inlineSize: '100%' }}>
            <Table.Header>
              <Table.Row>
                {columns.map((col) => (
                  <Table.HeaderCell key={col}>{col}</Table.HeaderCell>
                ))}
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {brugData.map((row, i) => (
                <Table.Row key={i} style={{ whiteSpace: 'nowrap' }}>
                  {columns.map((col) => (
                    <Table.Cell key={col}>
                      {typeof row[col] === 'object' && row[col] !== null ? JSON.stringify(row[col]) : String(row[col])}
                    </Table.Cell>
                  ))}
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        )}
        <Pagination
          linkTemplate={(page) => `#page=${page}`}
          maxVisiblePages={7}
          page={currentPage}
          totalPages={500 / 20}
        />
      </>
    ),
  }),
)

export const TabsPage = () => {
  const [brugData, setBrugData] = useState<any[]>([])
  const [columns, setColumns] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)

  // Get page from URL hash and update on hash change
  useEffect(() => {
    const getPageFromHash = () => {
      const hash = window.location.hash
      const match = hash.match(/page=(\d+)/)
      const page = match ? parseInt(match[1], 10) : 1
      setCurrentPage(page)
    }
    getPageFromHash()
    window.addEventListener('hashchange', getPageFromHash)
    return () => window.removeEventListener('hashchange', getPageFromHash)
  }, [])

  useEffect(() => {
    setLoading(true)
    setError(null)
    fetch(`https://api.data.amsterdam.nl/v1/civieleconstructies/v1/brug?_pageSize=20&page=${currentPage}&_count=500`)
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        // The API returns an object with a 'results' array
        const items = data._embedded.brug || []
        // Remove 'geometrie' from each item
        const filtered = items.map(
          /* eslint-disable @typescript-eslint/no-unused-vars */
          ({
            _links,
            beheerafspraak,
            beheerder,
            beheerderGedetailleerd,
            fundering,
            geometrie,
            nenTypeBeheerobject,
            ...rest
          }: any) => rest,
        )
        /* eslint-enable @typescript-eslint/no-unused-vars */
        setBrugData(filtered)
        // Set columns from the first item
        if (items.length > 0) {
          setColumns(Object.keys(filtered[0]))
        }
        setLoading(false)
      })
      .catch((err) => {
        setError(err.message)
        setLoading(false)
      })
  }, [currentPage])

  return (
    <Grid paddingVertical="x-large">
      <Grid.Cell appearance="transparent" span="all">
        <Row align="between" wrap>
          <Heading level={1}>Titel van de pagina</Heading>
          <ActionGroup>
            <Button icon={DeleteIcon} variant="secondary">
              Verwijderen
            </Button>
            <Button icon={SaveIcon}>Opslaan</Button>
          </ActionGroup>
        </Row>
      </Grid.Cell>

      <Grid.Cell span={{ narrow: 4, medium: 3, wide: 3 }}>
        <Heading className="ams-mb-m" level={2}>
          Informatie
        </Heading>
        <DescriptionList className="ams-mb-l">
          <DescriptionList.Term>Term 1</DescriptionList.Term>
          <DescriptionList.Description>Description 1</DescriptionList.Description>
          <DescriptionList.Term>Term 2</DescriptionList.Term>
          <DescriptionList.Description>Description 2</DescriptionList.Description>
          <DescriptionList.Term>Term 3</DescriptionList.Term>
          <DescriptionList.Description>Description 3</DescriptionList.Description>
        </DescriptionList>
        <Heading className="ams-mb-m" level={3}>
          Extra informatie
        </Heading>
        <DescriptionList>
          <DescriptionList.Term>Term 1</DescriptionList.Term>
          <DescriptionList.Description>Description 1</DescriptionList.Description>
          <DescriptionList.Term>Term 2</DescriptionList.Term>
          <DescriptionList.Description>Description 2</DescriptionList.Description>
          <DescriptionList.Term>Term 3</DescriptionList.Term>
          <DescriptionList.Description>Description 3</DescriptionList.Description>
        </DescriptionList>
      </Grid.Cell>
      <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
        <Tabs>
          <Tabs.List>
            <Tabs.Button aria-controls="Table">Table</Tabs.Button>
            <Tabs.Button aria-controls="Form">Form</Tabs.Button>
            <Tabs.Button aria-controls="Map">Map</Tabs.Button>
          </Tabs.List>
          <Tabs.Panel id="Table">
            <Column>
              <Heading className="ams-mb-xs" level={3}>
                Table
              </Heading>
              <Suspense fallback={<Paragraph>Bezig met laden...</Paragraph>}>
                <BrugTable
                  brugData={brugData}
                  columns={columns}
                  currentPage={currentPage}
                  error={error}
                  loading={loading}
                />
              </Suspense>
            </Column>
          </Tabs.Panel>
          <Tabs.Panel id="Form">
            <form noValidate onSubmit={(e) => e.preventDefault()}>
              <FieldSet className="ams-mb-l" legend="Contactgegevens">
                <Field>
                  <Label htmlFor="email-input" inFieldSet optional>
                    E-mailadres
                  </Label>
                  <TextInput
                    autoComplete="email"
                    autoCorrect="off"
                    id="email-input"
                    name="email"
                    size={30} // Based on this recommendation: https://design-system.service.gov.uk/patterns/email-addresses/#help-users-to-enter-a-valid-email-address
                    spellCheck="false"
                    type="email"
                  />
                </Field>
                <Field>
                  <Label htmlFor="tel-input" inFieldSet optional>
                    Telefoonnummer
                  </Label>
                  <TextInput
                    autoComplete="tel"
                    id="tel-input"
                    name="phone"
                    size={15} // Phone numbers have a maximum length of 15 characters, as per E.164 standard: https://en.wikipedia.org/wiki/E.164
                    type="tel"
                  />
                </Field>
              </FieldSet>
              <FieldSet className="ams-mb-l" legend="Adresgegevens">
                <Field>
                  <Label htmlFor="street-input" inFieldSet>
                    Straatnaam
                  </Label>
                  <TextInput id="street-input" name="street" size={30} />
                </Field>
                <Field>
                  <Label htmlFor="postal-input" inFieldSet>
                    Postcode
                  </Label>
                  <TextInput id="postal-input" name="postal" size={10} />
                </Field>
              </FieldSet>
              <FieldSet className="ams-mb-l" legend="Overige gegevens">
                <Field>
                  <Label htmlFor="notes-input" inFieldSet optional>
                    Opmerkingen
                  </Label>
                  <TextArea id="notes-input" name="notes" rows={14} />
                </Field>
              </FieldSet>
              <Button icon={SaveIcon} type="submit">
                Opslaan
              </Button>
            </form>
          </Tabs.Panel>
          <Tabs.Panel id="Map">
            <Heading className="ams-mb-xs" level={3}>
              Map
            </Heading>
          </Tabs.Panel>
        </Tabs>
      </Grid.Cell>
    </Grid>
  )
}
