/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FormEvent } from 'react'

import {
  ActionGroup,
  Button,
  Column,
  Field,
  FieldSet,
  Heading,
  Label,
  Paragraph,
  TextInput,
} from '@amsterdam/design-system-react'
import { CrossHairIcon } from '@amsterdam/design-system-react-icons'
import { ModalDialog } from '@amsterdam/design-system-react/src'
import { useRef, useState } from 'react'

import detailPageData from './detailPageData.json'
import { DetailPageEditTable } from './DetailPageEditTable'

type DetailPageEditMapTabProps = {
  readonly hidden: boolean
}

type MapFeatureKind = 'landmark' | 'square'
type PointFeature = {
  readonly geometry: {
    readonly coordinates: readonly [number, number]
    readonly type: 'Point'
  }
  readonly properties: {
    readonly kind: MapFeatureKind
    readonly name: string
  }
}
type PolygonFeature = {
  readonly geometry: {
    readonly coordinates: readonly (readonly [number, number])[][]
    readonly type: 'Polygon'
  }
  readonly properties: {
    readonly kind: MapFeatureKind
    readonly name: string
  }
}
type EditableMapFeature = PointFeature | PolygonFeature

type MapPoint = {
  latitude: string
  longitude: string
  name: string
}

type PointDialogMode = 'map-point' | 'polygon-point'

const isCoordinatePair = (coordinates: unknown): coordinates is readonly [number, number] =>
  Array.isArray(coordinates) &&
  coordinates.length === 2 &&
  coordinates.every((coordinate) => typeof coordinate === 'number')

const isMapFeatureKind = (kind: unknown): kind is MapFeatureKind => kind === 'landmark' || kind === 'square'

const isPointFeature = (feature: unknown): feature is PointFeature => {
  if (!feature || typeof feature !== 'object') return false

  const { geometry, properties } = feature as {
    geometry?: { coordinates?: unknown; type?: unknown }
    properties?: { kind?: unknown; name?: unknown }
  }

  return (
    geometry?.type === 'Point' &&
    isCoordinatePair(geometry.coordinates) &&
    isMapFeatureKind(properties?.kind) &&
    typeof properties?.name === 'string'
  )
}

const isPolygonFeature = (feature: unknown): feature is PolygonFeature => {
  if (!feature || typeof feature !== 'object') return false

  const { geometry, properties } = feature as {
    geometry?: { coordinates?: unknown; type?: unknown }
    properties?: { kind?: unknown; name?: unknown }
  }

  return (
    geometry?.type === 'Polygon' &&
    Array.isArray(geometry.coordinates) &&
    geometry.coordinates.every((ring) => Array.isArray(ring) && ring.every(isCoordinatePair)) &&
    isMapFeatureKind(properties?.kind) &&
    typeof properties?.name === 'string'
  )
}

const isEditableMapFeature = (feature: unknown): feature is EditableMapFeature =>
  isPointFeature(feature) || isPolygonFeature(feature)

const getPolygonCoordinates = (feature: PolygonFeature) => feature.geometry.coordinates[0] ?? []

const editableMapFeatures = detailPageData.geoJson.features.reduce<EditableMapFeature[]>((features, feature) => {
  if (isEditableMapFeature(feature)) {
    features.push(feature)
  }

  return features
}, [])

const polygonFeatures = editableMapFeatures.reduce<PolygonFeature[]>((features, feature) => {
  if (isPolygonFeature(feature)) {
    features.push(feature)
  }

  return features
}, [])

const initialMapPoints = editableMapFeatures.reduce<MapPoint[]>((points, feature) => {
  if (isPointFeature(feature)) {
    points.push({
      latitude: `${feature.geometry.coordinates[1]}`,
      longitude: `${feature.geometry.coordinates[0]}`,
      name: feature.properties.name,
    })
  }

  return points
}, [])

const initialPolygonPoints = polygonFeatures[0]
  ? getPolygonCoordinates(polygonFeatures[0]).map(([longitude, latitude], index) => ({
      latitude: `${latitude}`,
      longitude: `${longitude}`,
      name: `Punt ${index + 1}`,
    }))
  : []

const emptyMapPoint: MapPoint = {
  latitude: '',
  longitude: '',
  name: '',
}

export const DetailPageEditMapTab = ({ hidden }: DetailPageEditMapTabProps) => {
  const [mapPoints, setMapPoints] = useState(initialMapPoints)
  const [polygonPoints, setPolygonPoints] = useState(initialPolygonPoints)
  const [dialogIndex, setDialogIndex] = useState<number | null>(null)
  const [dialogMode, setDialogMode] = useState<PointDialogMode>('map-point')
  const [formState, setFormState] = useState(emptyMapPoint)
  const [positionMessage, setPositionMessage] = useState('')

  const dialogRef = useRef<HTMLDialogElement>(null)

  const dialogId = 'detail-page-map-point-dialog'
  const dialogFormId = 'detail-page-map-point-form'
  const isEditing = dialogIndex !== null
  const isPolygonPointDialog = dialogMode === 'polygon-point'

  const openDialog = (mode: PointDialogMode, index: number | null) => {
    setDialogMode(mode)
    setDialogIndex(index)
    setPositionMessage('')
    setFormState(
      index === null
        ? emptyMapPoint
        : mode === 'polygon-point'
          ? (polygonPoints[index] ?? emptyMapPoint)
          : (mapPoints[index] ?? emptyMapPoint),
    )
    ModalDialog.open(`#${dialogId}`)
  }

  const handleDialogClose = () => {
    setDialogIndex(null)
    setFormState(emptyMapPoint)
    setPositionMessage('')
  }

  const handleDialogSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const fallbackName = `Punt ${(dialogIndex ?? (isPolygonPointDialog ? polygonPoints.length : mapPoints.length)) + 1}`
    const nextPoint = {
      latitude: formState.latitude,
      longitude: formState.longitude,
      name: formState.name.trim() || fallbackName,
    }

    if (isPolygonPointDialog) {
      setPolygonPoints((currentPoints) => {
        if (dialogIndex === null) {
          return [...currentPoints, nextPoint]
        }

        return currentPoints.map((point, index) => (index === dialogIndex ? nextPoint : point))
      })
    } else {
      setMapPoints((currentPoints) => {
        if (dialogIndex === null) {
          return [...currentPoints, nextPoint]
        }

        return currentPoints.map((point, index) => (index === dialogIndex ? nextPoint : point))
      })
    }

    dialogRef.current?.close()
  }

  const handleUseCurrentPosition = () => {
    if (!window.navigator.geolocation) {
      setPositionMessage('Uw huidige positie is niet beschikbaar in deze browser.')
      return
    }

    setPositionMessage('Uw huidige positie wordt opgehaald.')

    window.navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        setFormState((currentPoint) => ({
          ...currentPoint,
          latitude: `${coords.latitude}`,
          longitude: `${coords.longitude}`,
        }))
        setPositionMessage('Uw huidige positie is ingevuld.')
      },
      () => {
        setPositionMessage('Uw huidige positie kon niet worden opgehaald.')
      },
    )
  }

  return (
    <section aria-labelledby="kaart" hidden={hidden}>
      <Column gap="large">
        <Heading id="kaart" level={2}>
          Kaart
        </Heading>
        <Paragraph>Werk het gebied bij en beheer de kaartpunten in één herbruikbare dialoog.</Paragraph>
        {polygonFeatures.map((feature, featureIndex) => (
          <FieldSet key={`${feature.properties.name}-${featureIndex}`} legend={`Gebied ${featureIndex + 1}`}>
            <Field className="ams-mb-l">
              <Label htmlFor={`map-feature-name-${featureIndex}`} inFieldSet>
                Naam
              </Label>
              <TextInput defaultValue={feature.properties.name} id={`map-feature-name-${featureIndex}`} />
            </Field>
            {featureIndex === 0 && (
              <Column gap="large">
                <div className="ams-prose">
                  <Heading level={3}>Contourpunten</Heading>
                  <Paragraph size="small">
                    Bewerk bestaande contourpunten in de tabel of voeg een nieuw punt toe.
                  </Paragraph>
                </div>
                <DetailPageEditTable
                  addButtonLabel="Contourpunt toevoegen"
                  caption="Contourpunten van gebied 1"
                  columns={[
                    { header: 'Punt', isRowHeader: true, renderCell: ({ name }) => name },
                    { header: 'Lengtegraad', renderCell: ({ longitude }) => longitude },
                    { header: 'Breedtegraad', renderCell: ({ latitude }) => latitude },
                  ]}
                  getEditLabel={({ name }) => `Bewerk ${name}`}
                  getRowKey={({ name }, index) => `${name}-${index}`}
                  onAdd={() => openDialog('polygon-point', null)}
                  onEdit={(index) => openDialog('polygon-point', index)}
                  rows={polygonPoints}
                />
              </Column>
            )}
          </FieldSet>
        ))}
        <div className="ams-prose">
          <Heading level={3}>Kaartpunten</Heading>
          <Paragraph size="small">Bewerk bestaande punten in de tabel of voeg een nieuw punt toe.</Paragraph>
        </div>
        <DetailPageEditTable
          addButtonLabel="Punt toevoegen"
          caption="Kaartpunten"
          columns={[
            { header: 'Naam', isRowHeader: true, renderCell: ({ name }, index) => name || `Punt ${index + 1}` },
            { header: 'Lengtegraad', renderCell: ({ longitude }) => longitude },
            { header: 'Breedtegraad', renderCell: ({ latitude }) => latitude },
          ]}
          getEditLabel={({ name }, index) => `Bewerk ${name || `Punt ${index + 1}`}`}
          getRowKey={({ name }, index) => `${name || `Punt ${index + 1}`}-${index}`}
          onAdd={() => openDialog('map-point', null)}
          onEdit={(index) => openDialog('map-point', index)}
          rows={mapPoints}
        />
        <ModalDialog aria-labelledby={`${dialogId}-heading`} id={dialogId} onClose={handleDialogClose} ref={dialogRef}>
          <ModalDialog.Header>
            <Heading id={`${dialogId}-heading`} level={1} size="level-2">
              {isPolygonPointDialog
                ? isEditing
                  ? 'Contourpunt bewerken'
                  : 'Contourpunt toevoegen'
                : isEditing
                  ? 'Kaartpunt bewerken'
                  : 'Kaartpunt toevoegen'}
            </Heading>
          </ModalDialog.Header>
          <ModalDialog.Body>
            <form id={dialogFormId} onSubmit={handleDialogSubmit}>
              <Column gap="small">
                <Paragraph>Vul de naam en coördinaten van het kaartpunt in.</Paragraph>
                <Button icon={CrossHairIcon} onClick={handleUseCurrentPosition} type="button" variant="secondary">
                  Gebruik uw huidige positie
                </Button>
                {positionMessage && (
                  <Paragraph aria-live="polite" role="status">
                    {positionMessage}
                  </Paragraph>
                )}
                <Field>
                  <Label htmlFor="map-point-name">{isPolygonPointDialog ? 'Puntnaam' : 'Naam'}</Label>
                  <TextInput
                    id="map-point-name"
                    onChange={(event) => setFormState({ ...formState, name: event.currentTarget.value })}
                    value={formState.name}
                  />
                </Field>
                <Field>
                  <Label htmlFor="map-point-longitude">Lengtegraad</Label>
                  <TextInput
                    id="map-point-longitude"
                    inputMode="decimal"
                    onChange={(event) => setFormState({ ...formState, longitude: event.currentTarget.value })}
                    value={formState.longitude}
                  />
                </Field>
                <Field>
                  <Label htmlFor="map-point-latitude">Breedtegraad</Label>
                  <TextInput
                    id="map-point-latitude"
                    inputMode="decimal"
                    onChange={(event) => setFormState({ ...formState, latitude: event.currentTarget.value })}
                    value={formState.latitude}
                  />
                </Field>
              </Column>
            </form>
          </ModalDialog.Body>
          <ModalDialog.Footer>
            <ActionGroup>
              <Button form={dialogFormId} type="submit">
                {isEditing ? 'Opslaan' : isPolygonPointDialog ? 'Contourpunt toevoegen' : 'Punt toevoegen'}
              </Button>
              <Button onClick={ModalDialog.close} variant="secondary">
                Annuleren
              </Button>
            </ActionGroup>
          </ModalDialog.Footer>
        </ModalDialog>
      </Column>
    </section>
  )
}
