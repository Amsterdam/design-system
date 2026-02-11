/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ActionGroup,
  Button,
  DescriptionList,
  Grid,
  Heading,
  Pagination,
  Paragraph,
  Row,
  Table,
  Tabs,
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
          Subtitel
        </Heading>
        <DescriptionList className="ams-mb-l">
          <DescriptionList.Term>Term 1</DescriptionList.Term>
          <DescriptionList.Description>Description 1</DescriptionList.Description>
          <DescriptionList.Term>Term 2</DescriptionList.Term>
          <DescriptionList.Description>Description 2</DescriptionList.Description>
          <DescriptionList.Term>Term 3</DescriptionList.Term>
          <DescriptionList.Description>Description 3</DescriptionList.Description>
        </DescriptionList>
        <Heading className="ams-mb-m" level={2}>
          Subtitel
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
            <Tabs.Button aria-controls="Gegevens">Gegevens</Tabs.Button>
            <Tabs.Button aria-controls="Aanslagen">Aanslagen</Tabs.Button>
            <Tabs.Button aria-controls="Documenten">Documenten</Tabs.Button>
            <Tabs.Button aria-controls="Acties">Acties</Tabs.Button>
          </Tabs.List>
          <Tabs.Panel id="Gegevens">
            <Heading className="ams-mb-xs" level={3}>
              Gegevens
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
          </Tabs.Panel>
          <Tabs.Panel id="Aanslagen">
            <Heading className="ams-mb-xs" level={3}>
              Aanslagen
            </Heading>
            <Paragraph>
              De Zuidas Community Garden is 1 van de projecten van de Green Business Club Zuidas. Het doel van deze club
              is om ervoor te zorgen dat de Zuidas steeds duurzamer wordt. 70 bedrijven en organisaties werken daarvoor
              in verschillende projecten samen. De tuin aan de Domenico Scarlattilaan is elke dag open van 9.00 tot
              17.00 uur.
            </Paragraph>
          </Tabs.Panel>
          <Tabs.Panel id="Documenten">
            <Heading className="ams-mb-xs" level={3}>
              Documenten
            </Heading>
            <Paragraph>
              <Paragraph>
                We richten de rotonde bij de Bouhuijstunnel opnieuw in en maken het veiliger. We passen ook het fiets-
                en voetpad aan. De rotonde bij de Bouhuijstunnel verbindt de Korte Muiderweg, de Stationsweg en de
                Leeuwenveldseweg met elkaar.
              </Paragraph>
            </Paragraph>
          </Tabs.Panel>
          <Tabs.Panel id="Acties">
            <Heading className="ams-mb-xs" level={3}>
              Acties
            </Heading>
            <Paragraph>
              We richten de rotonde bij de Bouhuijstunnel opnieuw in en maken het veiliger. We passen ook het fiets- en
              voetpad aan. De rotonde bij de Bouhuijstunnel verbindt de Korte Muiderweg, de Stationsweg en de
              Leeuwenveldseweg met elkaar.
            </Paragraph>
          </Tabs.Panel>
        </Tabs>
      </Grid.Cell>
    </Grid>
  )
}
