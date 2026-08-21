/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Feature, Geometry } from 'geojson'

import { Controls } from './Controls'
import { MapProvider } from './MapProvider'

type ZoomControlsProps = {
  readonly feature: Feature<Geometry>
  readonly scrollWheelZoom?: boolean
}

export const ZoomControls = ({ feature, scrollWheelZoom = true }: ZoomControlsProps) => (
  <MapProvider feature={feature} scrollWheelZoom={scrollWheelZoom}>
    <Controls />
  </MapProvider>
)
