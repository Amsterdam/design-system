import type { Map } from 'leaflet'
import { createContext, useContext } from 'react'

export const MapContext = createContext<{ mapInstance: Map | null }>({
  mapInstance: null,
})

export function useMapInstance() {
  const { mapInstance } = useContext(MapContext)

  if (mapInstance === null) {
    throw Error('Fout, geen mapinstance gevonden in context.')
  }

  return mapInstance
}
