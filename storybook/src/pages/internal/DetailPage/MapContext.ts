/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Map } from 'leaflet'

import { createContext, useContext } from 'react'

type MapContextValue = {
  readonly mapInstance: Map | null
}

export const MapContext = createContext<MapContextValue>({
  mapInstance: null,
})

export const useMapInstance = () => {
  const { mapInstance } = useContext(MapContext)

  if (mapInstance === null) {
    throw new Error('Fout, geen mapinstance gevonden in context.')
  }

  return mapInstance
}
