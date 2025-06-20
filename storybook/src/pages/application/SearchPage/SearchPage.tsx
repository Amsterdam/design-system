/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import {
  ActionGroup,
  Button,
  Checkbox,
  Column,
  DateInput,
  Field,
  FieldSet,
  Grid,
  Heading,
  Label,
  Pagination,
  Row,
  SearchField,
  Select,
  Table,
} from '@amsterdam/design-system-react'
import { CloseIcon, FilterIcon } from '@amsterdam/design-system-react-icons'
import React, { useEffect, useState } from 'react'
import styles from './styles.module.css'

type SubsidyProps = {
  aanvrager: string
  bedragAangevraagd: number
  dossiernummer: string
  id: string
  projectnaam: string
  publicatiedatumVerleningsbesluit: string
}

export const SearchPage = () => {
  const [Subsidies, setSubsidies] = useState<SubsidyProps[]>([])

  useEffect(() => {
    const fetchSubsidies = async () => {
      try {
        const response = await fetch('https://api.data.amsterdam.nl/v1/subsidies/openbaar_subsidieregister/')
        const data = await response.json()
        const formattedSubsidies = data._embedded.openbaar_subsidieregister.map(
          (item: SubsidyProps, index: number) => ({
            aanvrager: item.aanvrager || '-',
            bedragAangevraagd:
              Intl.NumberFormat('nl-NL', { currency: 'EUR', style: 'currency' }).format(item.bedragAangevraagd) || 0,
            dossiernummer: item.dossiernummer || index,
            id: item.id || '#',
            projectnaam: item.projectnaam || '-',
            publicatiedatum: item.publicatiedatumVerleningsbesluit || '-',
          }),
        )
        setSubsidies(formattedSubsidies)
      } catch (error) {
        console.error('Error fetching Subsidies:', error)
      }
    }

    fetchSubsidies()
  }, [])

  const uniqueAanvragers = Array.from(new Set(Subsidies.map((subsidy) => subsidy.aanvrager)))

  return (
    <main className="ams-app-content" id="main">
      <Grid paddingBottom="x-large" paddingTop="large">
        <Grid.Cell as="aside" className={styles.filters} span={{ narrow: 4, medium: 3, wide: 3 }}>
          <Column gap="large">
            <FieldSet legend="Filters">
              <Column gap="small">
                <div>
                  <Button icon={CloseIcon} type="button" variant="secondary">
                    Filter 1
                  </Button>
                </div>
                <div>
                  <Button icon={CloseIcon} type="button" variant="secondary">
                    Actief Filter
                  </Button>
                </div>
                <div>
                  <Button type="button" variant="tertiary">
                    Alle filters wissen
                  </Button>
                </div>
              </Column>
            </FieldSet>
            <FieldSet legend="Datum">
              <Row wrap>
                <Field>
                  <Label htmlFor="input-b1">Van</Label>
                  <DateInput />
                </Field>
                <Field>
                  <Label htmlFor="input-b1">Tot</Label>
                  <DateInput />
                </Field>
              </Row>
            </FieldSet>
            <FieldSet legend="Aanvragers">
              <Column gap="x-small">
                {uniqueAanvragers.map((aanvrager) => (
                  <Checkbox key={aanvrager} name="aanvrager" value={aanvrager}>
                    {aanvrager}
                  </Checkbox>
                ))}
              </Column>
            </FieldSet>
          </Column>
        </Grid.Cell>
        <Grid.Cell span={{ narrow: 4, medium: 5, wide: 9 }}>
          <Column gap="large">
            <Heading level={2}>Zoeken</Heading>
            <Row align="between" className="ams-mb-m" wrap>
              <SearchField className={styles.search_field}>
                <SearchField.Input name="search-box" onChange={function () {}} size={42} value="" />
                <SearchField.Button />
              </SearchField>
              <Select className={styles.select}>
                <Select.Option>Sorteren</Select.Option>
                <Select.Option value="option1">Optie 1</Select.Option>
                <Select.Option value="option2">Optie 2</Select.Option>
                <Select.Option value="option3">Optie 3</Select.Option>
              </Select>
              <Button
                className={styles.toggle_filters}
                icon={FilterIcon}
                popoverTarget="filters"
                type="button"
                variant="secondary"
              >
                Filters
              </Button>
            </Row>
            <Table className="ams-mb-m" width={'100%'}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Projectnaam</Table.HeaderCell>
                  <Table.HeaderCell>Dossiernummer</Table.HeaderCell>
                  <Table.HeaderCell>Aanvrager</Table.HeaderCell>
                  <Table.HeaderCell>Bedrag</Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {Subsidies.map((subsidy: SubsidyProps) => (
                  <Table.Row key={subsidy.id}>
                    <Table.Cell>{subsidy.projectnaam}</Table.Cell>
                    <Table.Cell>{subsidy.dossiernummer}</Table.Cell>
                    <Table.Cell>{subsidy.aanvrager}</Table.Cell>
                    <Table.Cell>{subsidy.bedragAangevraagd}</Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
            <Row align="center">
              <Pagination linkTemplate={() => `#`} maxVisiblePages={7} page={1} totalPages={10} />
            </Row>
          </Column>
        </Grid.Cell>
      </Grid>
      <div className={styles.filters_menu} id="filters" popover="auto">
        <Column gap="large">
          <FieldSet legend="Filters">
            <Column gap="small">
              <div>
                <Button icon={CloseIcon} type="button" variant="secondary">
                  Filter 1
                </Button>
              </div>
              <div>
                <Button icon={CloseIcon} type="button" variant="secondary">
                  Actief Filter
                </Button>
              </div>
              <div>
                <Button type="button" variant="tertiary">
                  Alle filters wissen
                </Button>
              </div>
            </Column>
          </FieldSet>
          <FieldSet legend="Datum">
            <Row wrap>
              <Field>
                <Label htmlFor="input-b1">Van</Label>
                <DateInput />
              </Field>
              <Field>
                <Label htmlFor="input-b1">Tot</Label>
                <DateInput />
              </Field>
            </Row>
          </FieldSet>
          <FieldSet legend="Aanvragers">
            <Column gap="x-small">
              {uniqueAanvragers.map((aanvrager) => (
                <Checkbox key={aanvrager} name="aanvrager" value={aanvrager}>
                  {aanvrager}
                </Checkbox>
              ))}
            </Column>
          </FieldSet>
        </Column>
        <ActionGroup className={styles.filters_menu_actions}>
          <Button>Opslaan</Button>
        </ActionGroup>
      </div>
    </main>
  )
}
