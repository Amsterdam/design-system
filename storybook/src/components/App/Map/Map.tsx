import type { FunctionComponent } from 'react'
import 'leaflet/dist/leaflet.css'
import Controls from './Controls'
import MapProvider from './MapProvider'

const Map: FunctionComponent<{ scrollWheelZoom?: boolean }> = ({ scrollWheelZoom = false }) => (
  <MapProvider scrollWheelZoom={scrollWheelZoom}>
    <Controls />
  </MapProvider>
)

export default Map
