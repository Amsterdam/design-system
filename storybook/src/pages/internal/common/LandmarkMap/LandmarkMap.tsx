/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'

import { ZoomControls } from './ZoomControls'

import './object-information-map.css'

type LandmarkMapProps = {
  readonly geoJson: FeatureCollection<Geometry, GeoJsonProperties>
}

export const LandmarkMap = ({ geoJson }: LandmarkMapProps) => <ZoomControls geoJson={geoJson} scrollWheelZoom={false} />
