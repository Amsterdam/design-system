/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'

import { ZoomControls } from './ZoomControls'

import './object-information-map.css'

type ObjectInformationMapProps = {
  readonly geoJson: FeatureCollection<Geometry, GeoJsonProperties>
}

export const ObjectInformationMap = ({ geoJson }: ObjectInformationMapProps) => (
  <ZoomControls geoJson={geoJson} scrollWheelZoom={false} />
)
