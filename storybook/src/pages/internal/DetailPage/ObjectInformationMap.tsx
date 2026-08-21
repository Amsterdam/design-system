/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Feature, Geometry } from 'geojson'

import { Paragraph } from '@amsterdam/design-system-react'
import { Suspense, useMemo } from 'react'

import type { ObjectInformation } from './objectInformation'

import { getObjectInformationResource, ObjectInformationErrorBoundary } from './objectInformation'
import { ZoomControls } from './ZoomControls'

import './object-information-map.css'

type ObjectInformationMapProps = {
  readonly url: string
}

const createGeometryFeature = (objectInformation: ObjectInformation): Feature<Geometry> => {
  const geometry = objectInformation['geometrie'] ?? objectInformation['geometry']

  if (geometry === null || typeof geometry !== 'object' || !('type' in geometry)) {
    throw new Error('Geen geldige geometrie gevonden in de objectinformatie.')
  }

  return {
    geometry: geometry as Geometry,
    properties: {},
    type: 'Feature',
  }
}

const ObjectGeometryMap = ({ feature }: { readonly feature: Feature<Geometry> }) => (
  <ZoomControls feature={feature} scrollWheelZoom={false} />
)

const ObjectInformationMapContent = ({ url }: ObjectInformationMapProps) => {
  const objectInformation = getObjectInformationResource(url).read()
  const feature = useMemo(() => createGeometryFeature(objectInformation), [objectInformation])

  return <ObjectGeometryMap feature={feature} />
}

const ObjectInformationMapFallback = () => (
  <div aria-busy="true" className="_ams-object-information-map _ams-object-information-map__fallback">
    <p className="ams-visually-hidden" role="status">
      Kaart wordt geladen
    </p>
    <Paragraph>Kaart wordt geladen…</Paragraph>
  </div>
)

export const ObjectInformationMap = ({ url }: ObjectInformationMapProps) => (
  <ObjectInformationErrorBoundary fallback={<Paragraph>Er is iets mis gegaan</Paragraph>}>
    <Suspense fallback={<ObjectInformationMapFallback />}>
      <ObjectInformationMapContent url={url} />
    </Suspense>
  </ObjectInformationErrorBoundary>
)
