/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Meta, StoryObj } from '@storybook/react-vite'
import type { FeatureCollection } from 'geojson'

import {
  ActionGroup,
  Breadcrumb,
  Button,
  Card,
  Column,
  Field,
  Grid,
  Heading,
  IconButton,
  Label,
  LinkList,
  Metadata,
  Paragraph,
  Row,
  TableOfContents,
  TextArea,
  TextInput,
} from '@amsterdam/design-system-react'
import {
  ArrowForwardIcon,
  CheckMarkIcon,
  LinkExternalIcon,
  MagnifyingGlassWithEyeIcon,
  PencilIcon,
  SpeechBalloonIcon,
} from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { useState } from 'react'

import { commonMeta, pageParameters } from '../common/commonMeta'
import detailPageData from './detailPageData.json'
import { ObjectInformationDescriptionList } from './ObjectInformationDescriptionList'
import { ObjectInformationMap } from './ObjectInformationMap'
import { ObjectInformationTable } from './ObjectInformationTable'

// A JSON import widens the literal type names GeoJSON relies on to string.
const geoJson = detailPageData.geoJson as FeatureCollection

type ReviewSectionId = 'algemene-informatie' | 'geschiedenis' | 'kaart'

const highlightedReviewSectionParentAttribute = 'data-ams-detail-page-highlighted'
const reviewSectionHighlightTimeouts = new WeakMap<HTMLElement, number>()

const reviewSectionLabels: Record<ReviewSectionId, string> = {
  'algemene-informatie': 'Algemene informatie',
  geschiedenis: 'Geschiedenis',
  kaart: 'Kaart',
}

const highlightReviewElement = (sectionId: string) => {
  const sectionHeading = document.getElementById(sectionId)

  if (!(sectionHeading instanceof HTMLElement)) {
    return
  }

  window.location.hash = sectionId
  sectionHeading.scrollIntoView({ behavior: 'smooth', block: 'start' })

  const existingTimeoutId = reviewSectionHighlightTimeouts.get(sectionHeading)

  if (existingTimeoutId !== undefined) {
    window.clearTimeout(existingTimeoutId)
  }

  sectionHeading.setAttribute(highlightedReviewSectionParentAttribute, 'true')

  const timeoutId = window.setTimeout(() => {
    sectionHeading.removeAttribute(highlightedReviewSectionParentAttribute)
    reviewSectionHighlightTimeouts.delete(sectionHeading)
  }, 3000)

  reviewSectionHighlightTimeouts.set(sectionHeading, timeoutId)
}

const reviewSectionHighlightStyles = `
  [id]:not(.ams-table__row),
  .ams-table__row > .ams-table__header-cell,
  .ams-table__row > .ams-table__cell {
    transition: box-shadow 200ms ease-out;
  }

  [${highlightedReviewSectionParentAttribute}="true"]:not(.ams-table__row) {
    box-shadow: 0 0 0 var(--ams-border-width-l) var(--ams-color-interactive);
  }

  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__header-cell,
  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__cell {
    box-shadow:
      inset 0 var(--ams-border-width-l) 0 var(--ams-color-interactive),
      inset 0 calc(-1 * var(--ams-border-width-l)) 0 var(--ams-color-interactive);
  }

  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__header-cell:first-child,
  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__cell:first-child {
    box-shadow:
      inset var(--ams-border-width-l) 0 0 var(--ams-color-interactive),
      inset 0 var(--ams-border-width-l) 0 var(--ams-color-interactive),
      inset 0 calc(-1 * var(--ams-border-width-l)) 0 var(--ams-color-interactive);
  }

  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__header-cell:last-child,
  .ams-table__row[${highlightedReviewSectionParentAttribute}="true"] > .ams-table__cell:last-child {
    box-shadow:
      inset calc(-1 * var(--ams-border-width-l)) 0 0 var(--ams-color-interactive),
      inset 0 var(--ams-border-width-l) 0 var(--ams-color-interactive),
      inset 0 calc(-1 * var(--ams-border-width-l)) 0 var(--ams-color-interactive);
  }
`
const meta = {
  ...commonMeta,
  title: 'Pages/Internal/Detail Page',
  parameters: pageParameters(
    'Suits websites whose content is organised into a handful of main sections ' +
      'that each have their own subsections.',
  ),
} satisfies Meta

export default meta

export const Default: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because the `render` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: `
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance="transparent" span="all">
            <Breadcrumb>
              {detailPageData.breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Link href="#" key={breadcrumb}>
                  {breadcrumb}
                </Breadcrumb.Link>
              ))}
            </Breadcrumb>
            <Row align="between" wrap>
              <Heading level={1}>{detailPageData.name}</Heading>
              <ActionGroup>
                <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                  Review
                </Button>
                <Button icon={PencilIcon}>Bewerken</Button>
              </ActionGroup>
            </Row>
          </Grid.Cell>

          <Grid.Subgrid span={{ narrow: 4, medium: 2, wide: 3 }} start={{ narrow: 1, medium: 7, wide: 10 }}>
            <Grid.Cell span="all">
              <TableOfContents heading="Op deze pagina">
                <TableOfContents.List>
                  <TableOfContents.Link href="#algemene-informatie" label="Algemene informatie" />
                  <TableOfContents.Link href="#geschiedenis" label="Geschiedenis" />
                  <TableOfContents.Link href="#kaart" label="Kaart" />
                </TableOfContents.List>
              </TableOfContents>
            </Grid.Cell>
            <Grid.Cell span="all">
              <Heading className="ams-mb-xs" level={3}>
                Bronnen
              </Heading>
              <LinkList>
                {detailPageData.links.map(({ label, url }) => (
                  <LinkList.Link href={url} icon={LinkExternalIcon} key={url}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          </Grid.Subgrid>

          <Grid.Subgrid rowStart={{ narrow: 3, medium: 2, wide: 2 }} span={{ narrow: 4, medium: 6, wide: 9 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Heading id="algemene-informatie" level={2}>
                Algemene informatie
              </Heading>
              <Paragraph>{detailPageData.description}</Paragraph>
              <ObjectInformationDescriptionList items={detailPageData.basicInformation} />
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Heading id="geschiedenis" level={2}>
                Geschiedenis
              </Heading>
              <ObjectInformationTable events={detailPageData.history} />
            </Grid.Cell>
            <Grid.Cell span="all">
              <Heading className="ams-mb-s" id="kaart" level={2}>
                Kaart
              </Heading>
              <ObjectInformationMap geoJson={geoJson} />
            </Grid.Cell>
          </Grid.Subgrid>
        </Grid>
        `,
        language: 'tsx',
      },
    },
  },
  render: () => {
    return (
      <Grid paddingVertical="x-large">
        <Grid.Cell appearance="transparent" span="all">
          <Breadcrumb>
            {detailPageData.breadcrumbs.map((breadcrumb) => (
              <Breadcrumb.Link href="#" key={breadcrumb}>
                {breadcrumb}
              </Breadcrumb.Link>
            ))}
          </Breadcrumb>
          <Row align="between" wrap>
            <Heading level={1}>{detailPageData.name}</Heading>
            <ActionGroup>
              <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                Review
              </Button>
              <Button icon={PencilIcon}>Bewerken</Button>
            </ActionGroup>
          </Row>
        </Grid.Cell>

        <Grid.Subgrid span={{ narrow: 4, medium: 2, wide: 3 }} start={{ narrow: 1, medium: 7, wide: 10 }}>
          <Grid.Cell span="all">
            <TableOfContents heading="Op deze pagina">
              <TableOfContents.List>
                <TableOfContents.Link href="#algemene-informatie" label="Algemene informatie" />
                <TableOfContents.Link href="#geschiedenis" label="Geschiedenis" />
                <TableOfContents.Link href="#kaart" label="Kaart" />
              </TableOfContents.List>
            </TableOfContents>
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-xs" level={3}>
              Bronnen
            </Heading>
            <LinkList>
              {detailPageData.links.map(({ label, url }) => (
                <LinkList.Link href={url} icon={LinkExternalIcon} key={url}>
                  {label}
                </LinkList.Link>
              ))}
            </LinkList>
          </Grid.Cell>
        </Grid.Subgrid>

        <Grid.Subgrid rowStart={{ narrow: 3, medium: 2, wide: 2 }} span={{ narrow: 4, medium: 6, wide: 9 }}>
          <Grid.Cell className="ams-prose" span="all">
            <Heading id="algemene-informatie" level={2}>
              Algemene informatie
            </Heading>
            <Paragraph>{detailPageData.description}</Paragraph>
            <ObjectInformationDescriptionList items={detailPageData.basicInformation} />
          </Grid.Cell>
          <Grid.Cell className="ams-prose" span="all">
            <Heading id="geschiedenis" level={2}>
              Geschiedenis
            </Heading>
            <ObjectInformationTable events={detailPageData.history} />
          </Grid.Cell>
          <Grid.Cell span="all">
            <Heading className="ams-mb-s" id="kaart" level={2}>
              Kaart
            </Heading>
            <ObjectInformationMap geoJson={geoJson} />
          </Grid.Cell>
        </Grid.Subgrid>
      </Grid>
    )
  },
}

export const Review: StoryObj = {
  parameters: {
    docs: {
      source: {
        // Because the `render` of this story lives on the shared meta, its own source is nothing but these parameters,
        // and that is all the Code Panel would print. Provide the source by hand so the layout reads the way a
        // developer would write it, without the interactive state.
        code: `
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance="transparent" span="all">
            <Breadcrumb>
              {detailPageData.breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Link href="#" key={breadcrumb}>
                  {breadcrumb}
                </Breadcrumb.Link>
              ))}
            </Breadcrumb>
            <Row align="between" wrap>
              <Heading level={1}>{detailPageData.name}</Heading>
              <ActionGroup>
                <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                  Review
                </Button>
                <Button icon={PencilIcon}>Bewerken</Button>
              </ActionGroup>
            </Row>
          </Grid.Cell>

          <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 3 }}>
            <Grid.Cell span="all">
              <TableOfContents heading="Op deze pagina">
                <TableOfContents.List>
                  <TableOfContents.Link href="#algemene-informatie" label="Algemene informatie" />
                  <TableOfContents.Link href="#geschiedenis" label="Geschiedenis" />
                  <TableOfContents.Link href="#kaart" label="Kaart" />
                </TableOfContents.List>
              </TableOfContents>
            </Grid.Cell>
            <Grid.Cell span="all">
              <Heading className="ams-mb-xs" level={3}>
                Bronnen
              </Heading>
              <LinkList>
                {detailPageData.links.map(({ label, url }) => (
                  <LinkList.Link href={url} icon={LinkExternalIcon} key={url}>
                    {label}
                  </LinkList.Link>
                ))}
              </LinkList>
            </Grid.Cell>
          </Grid.Subgrid>

          <Grid.Subgrid span={{ narrow: 4, medium: 5, wide: 9 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
                <Heading id="algemene-informatie" level={2}>
                  Algemene informatie
                </Heading>
                <Button icon={MagnifyingGlassWithEyeIcon} iconOnly variant="secondary">
                  Voeg een opmerking toe bij Algemene informatie
                </Button>
              </Row>
              <Paragraph>{detailPageData.description}</Paragraph>
              <ObjectInformationDescriptionList items={detailPageData.basicInformation} />
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
                <Heading id="geschiedenis" level={2}>
                  Geschiedenis
                </Heading>
                <Button icon={MagnifyingGlassWithEyeIcon} iconOnly variant="secondary">
                  Voeg een opmerking toe bij Geschiedenis
                </Button>
              </Row>
              <ObjectInformationTable events={detailPageData.history} />
            </Grid.Cell>
            <Grid.Cell span="all">
              <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
                <Heading id="kaart" level={2}>
                  Kaart
                </Heading>
                <Button icon={MagnifyingGlassWithEyeIcon} iconOnly variant="secondary">
                  Voeg een opmerking toe bij Kaart
                </Button>
              </Row>
              <ObjectInformationMap geoJson={geoJson} />
            </Grid.Cell>
          </Grid.Subgrid>

          <ModalDialog
            aria-labelledby="detail-page-review-remark-dialog-heading"
            id="detail-page-review-remark-dialog"
          >
            <ModalDialog.Header>
              <Heading id="detail-page-review-remark-dialog-heading" level={1} size="level-2">
                Opmerking toevoegen
              </Heading>
            </ModalDialog.Header>
            <ModalDialog.Body>
              <Field>
                <Label htmlFor="detail-page-review-remarks">Opmerkingen</Label>
                <TextArea id="detail-page-review-remarks" rows={4} />
              </Field>
            </ModalDialog.Body>
            <ModalDialog.Footer>
              <Button>Sluiten</Button>
            </ModalDialog.Footer>
          </ModalDialog>
        </Grid>
      </>
        `,
        language: 'tsx',
      },
    },
  },
  render: () => {
    const [currentRemarkSectionId, setCurrentRemarkSectionId] = useState<ReviewSectionId | null>(null)
    const [remarks, setRemarks] = useState<Record<ReviewSectionId, string>>({
      'algemene-informatie': '',
      geschiedenis: '',
      kaart: '',
    })

    const dialogId = 'detail-page-review-remark-dialog'
    const currentRemarkSectionLabel = currentRemarkSectionId ? reviewSectionLabels[currentRemarkSectionId] : ''

    const openRemarkDialog = (sectionId: ReviewSectionId) => {
      setCurrentRemarkSectionId(sectionId)
      ModalDialog.open(`#${dialogId}`)
    }

    return (
      <>
        <style>{reviewSectionHighlightStyles}</style>
        <Grid paddingVertical="x-large">
          <Grid.Cell appearance="transparent" span="all">
            <Breadcrumb>
              {detailPageData.breadcrumbs.map((breadcrumb) => (
                <Breadcrumb.Link href="#" key={breadcrumb}>
                  {breadcrumb}
                </Breadcrumb.Link>
              ))}
            </Breadcrumb>
            <Row align="between" wrap>
              <Heading level={1}>{detailPageData.name}</Heading>
              <ActionGroup>
                <Button icon={MagnifyingGlassWithEyeIcon} variant="secondary">
                  Review
                </Button>
                <Button icon={PencilIcon}>Bewerken</Button>
              </ActionGroup>
            </Row>
          </Grid.Cell>

          <Grid.Subgrid span={{ narrow: 4, medium: 3, wide: 4 }} start={{ narrow: 1, medium: 6, wide: 9 }}>
            <Grid.Cell span="all">
              <Card>
                <Card.HeadingGroup key={1}>
                  <Card.Heading level={4}>L van de Akker</Card.Heading>
                  <Metadata size="small">12-08-2026 10:30</Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph key={2}>Hier zou je ook protesten bij kunnen vermelden.</Paragraph>
                  <Row alignVertical="center" gap="small">
                    <TextInput key={3} placeholder="Voeg een opmerking toe" />
                    <IconButton label="Voeg opmerking toe" size="large" svg={ArrowForwardIcon} />
                  </Row>
                  <Row align="between" alignVertical="center" gap="small">
                    <Row gap="small">
                      <IconButton
                        label="Bekijken"
                        onClick={() => highlightReviewElement('functie-5')}
                        svg={MagnifyingGlassWithEyeIcon}
                      />
                      <IconButton label="Bewerken" svg={PencilIcon} />
                    </Row>
                    <IconButton label="Opgelost" svg={CheckMarkIcon} />
                  </Row>
                </Column>
              </Card>
            </Grid.Cell>
            <Grid.Cell span="all">
              <Card>
                <Card.HeadingGroup key={1}>
                  <Card.Heading level={4}>L van de Akker</Card.Heading>
                  <Metadata size="small">12-08-2026 10:30</Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph key={2}>Jaar moet 1915 zijn.</Paragraph>
                  <Row alignVertical="center" gap="small">
                    <TextInput key={3} placeholder="Voeg een opmerking toe" />
                    <IconButton label="Voeg opmerking toe" size="large" svg={ArrowForwardIcon} />
                  </Row>
                  <Row align="between" alignVertical="center" gap="small">
                    <Row gap="small">
                      <IconButton
                        label="Bekijken"
                        onClick={() => highlightReviewElement('row-4')}
                        svg={MagnifyingGlassWithEyeIcon}
                      />
                      <IconButton label="Bewerken" svg={PencilIcon} />
                    </Row>
                    <IconButton label="Opgelost" svg={CheckMarkIcon} />
                  </Row>
                </Column>
              </Card>
            </Grid.Cell>
            <Grid.Cell span="all">
              <Card>
                <Card.HeadingGroup key={1}>
                  <Card.Heading level={4}>L van de Akker</Card.Heading>
                  <Metadata size="small">12-08-2026 10:30</Metadata>
                </Card.HeadingGroup>
                <Column gap="small">
                  <Paragraph key={2}>de Bijenkorf lijkt zo meer bij de Damrak te horen dan de Dam.</Paragraph>
                  <Row alignVertical="center" gap="small">
                    <TextInput key={3} placeholder="Voeg een opmerking toe" />
                    <IconButton label="Voeg opmerking toe" size="large" svg={ArrowForwardIcon} />
                  </Row>
                  <Row align="between" alignVertical="center" gap="small">
                    <Row gap="small">
                      <IconButton
                        label="Bekijken"
                        onClick={() => highlightReviewElement('kaart')}
                        svg={MagnifyingGlassWithEyeIcon}
                      />
                      <IconButton label="Bewerken" svg={PencilIcon} />
                    </Row>
                    <IconButton label="Opgelost" svg={CheckMarkIcon} />
                  </Row>
                </Column>
              </Card>
            </Grid.Cell>
          </Grid.Subgrid>

          <Grid.Subgrid rowStart={{ narrow: 3, medium: 2, wide: 2 }} span={{ narrow: 4, medium: 5, wide: 8 }}>
            <Grid.Cell className="ams-prose" span="all">
              <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
                <Heading id="algemene-informatie" level={2}>
                  Algemene informatie
                </Heading>
                <Button
                  icon={SpeechBalloonIcon}
                  onClick={() => openRemarkDialog('algemene-informatie')}
                  variant="secondary"
                >
                  Opmerkingen
                </Button>
              </Row>
              <Paragraph>{detailPageData.description}</Paragraph>
              <ObjectInformationDescriptionList items={detailPageData.basicInformation} review />
            </Grid.Cell>
            <Grid.Cell className="ams-prose" span="all">
              <Row align="between" alignVertical="center" className="ams-mb-m" wrap>
                <Heading id="geschiedenis" level={2}>
                  Geschiedenis
                </Heading>
                <Button icon={SpeechBalloonIcon} onClick={() => openRemarkDialog('geschiedenis')} variant="secondary">
                  Opmerkingen
                </Button>
              </Row>
              <ObjectInformationTable events={detailPageData.history} review />
            </Grid.Cell>
            <Grid.Cell span="all">
              <Row align="between" alignVertical="center" className="ams-mb-s" wrap>
                <Heading id="kaart" level={2}>
                  Kaart
                </Heading>
                <Button icon={SpeechBalloonIcon} onClick={() => openRemarkDialog('kaart')} variant="secondary">
                  Opmerkingen
                </Button>
              </Row>
              <ObjectInformationMap geoJson={geoJson} />
            </Grid.Cell>
          </Grid.Subgrid>

          <ModalDialog
            aria-labelledby={`${dialogId}-heading`}
            id={dialogId}
            onClose={() => setCurrentRemarkSectionId(null)}
          >
            <ModalDialog.Header>
              <Heading id={`${dialogId}-heading`} level={1} size="level-2">
                {currentRemarkSectionLabel
                  ? `Opmerking toevoegen bij ${currentRemarkSectionLabel}`
                  : 'Opmerking toevoegen'}
              </Heading>
            </ModalDialog.Header>
            <ModalDialog.Body>
              <Column gap="small">
                <Field>
                  <Label htmlFor="detail-page-review-remarks">Opmerkingen</Label>
                  <TextArea
                    id="detail-page-review-remarks"
                    onChange={(event) => {
                      if (!currentRemarkSectionId) {
                        return
                      }

                      const sectionId = currentRemarkSectionId
                      const value = event.currentTarget.value

                      setRemarks((currentRemarks) => ({
                        ...currentRemarks,
                        [sectionId]: value,
                      }))
                    }}
                    rows={4}
                    value={currentRemarkSectionId ? remarks[currentRemarkSectionId] : ''}
                  />
                </Field>
              </Column>
            </ModalDialog.Body>
            <ModalDialog.Footer>
              <Button onClick={ModalDialog.close}>Sluiten</Button>
            </ModalDialog.Footer>
          </ModalDialog>
        </Grid>
      </>
    )
  },
}
