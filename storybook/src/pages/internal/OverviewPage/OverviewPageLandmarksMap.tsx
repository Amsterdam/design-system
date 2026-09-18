/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { FeatureCollection, Point } from 'geojson'

import type overviewPageData from './overviewPageData.json'

import { LandmarkMap } from '../common/LandmarkMap/LandmarkMap'

type Landmark = (typeof overviewPageData.landmarks)[number]

type LandmarkMapProperties = {
  readonly district: string
  readonly kind: 'landmark'
  readonly name: string
  readonly sourceLabel: string
  readonly sourceUrl: string
  readonly type: string
  readonly year: string
}

type OverviewPageLandmarksMapProps = {
  readonly landmarks: readonly Landmark[]
}

const createGeoJson = (items: readonly Landmark[]): FeatureCollection<Point, LandmarkMapProperties> => ({
  features: items.map(({ coordinates, district, name, sourceLabel, sourceUrl, type, year }) => ({
    geometry: {
      coordinates: [coordinates.longitude, coordinates.latitude],
      type: 'Point',
    },
    properties: {
      district,
      kind: 'landmark',
      name,
      sourceLabel,
      sourceUrl,
      type,
      year,
    },
    type: 'Feature',
  })),
  type: 'FeatureCollection',
})

export const OverviewPageLandmarksMap = ({ landmarks }: OverviewPageLandmarksMapProps) => (
  <LandmarkMap geoJson={createGeoJson(landmarks)} />
)
