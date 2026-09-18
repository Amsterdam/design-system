/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'

import { LandmarkMap } from '../common/LandmarkMap/LandmarkMap'

type ObjectInformationMapProps = {
  readonly geoJson: FeatureCollection<Geometry, GeoJsonProperties>
}

export const ObjectInformationMap = ({ geoJson }: ObjectInformationMapProps) => <LandmarkMap geoJson={geoJson} />
