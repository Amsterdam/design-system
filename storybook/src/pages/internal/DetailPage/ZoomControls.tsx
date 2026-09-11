/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'

import { Controls } from './Controls'
import { MapProvider } from './MapProvider'

type ZoomControlsProps = {
  readonly geoJson: FeatureCollection<Geometry, GeoJsonProperties>
  readonly scrollWheelZoom?: boolean
}

export const ZoomControls = ({ geoJson, scrollWheelZoom = true }: ZoomControlsProps) => (
  <MapProvider geoJson={geoJson} scrollWheelZoom={scrollWheelZoom}>
    <Controls />
  </MapProvider>
)
