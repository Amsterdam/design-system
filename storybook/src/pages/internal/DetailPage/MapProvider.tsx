/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type { Feature, FeatureCollection, GeoJsonProperties, Geometry } from 'geojson'
import type { Map as LeafletMap } from 'leaflet'
import type { PropsWithChildren } from 'react'

import L from 'leaflet'
import { useEffect, useRef, useState } from 'react'

import { getCrsRd } from './getCrsRd'
import { MapContext } from './MapContext'

type MapProviderProps = PropsWithChildren<{
  readonly geoJson: FeatureCollection<Geometry, GeoJsonProperties>
  readonly scrollWheelZoom: boolean
}>

const isLandmarkFeature = (feature?: Feature<Geometry, GeoJsonProperties> | null) =>
  feature?.properties?.['kind'] === 'landmark'

const getFeatureName = (feature?: Feature<Geometry, GeoJsonProperties> | null) => {
  const value = feature?.properties?.['name']

  return typeof value === 'string' ? value : undefined
}

export const MapProvider = ({ children, geoJson, scrollWheelZoom }: MapProviderProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const createdMapInstance = useRef(false)
  const initialScrollWheelZoomRef = useRef(scrollWheelZoom)
  const [mapInstance, setMapInstance] = useState<LeafletMap | null>(null)

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current) {
      return undefined
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      crs: getCrsRd(L),
      layers: [
        L.tileLayer('https://{s}.data.amsterdam.nl/topo_rd/{z}/{x}/{y}.png', {
          attribution: '',
          subdomains: ['t1', 't2', 't3', 't4'],
          tms: true,
        }),
      ],
      maxBounds: [
        [52.25168, 4.64034],
        [52.50536, 5.10737],
      ],
      maxZoom: 16,
      minZoom: 7,
      scrollWheelZoom: initialScrollWheelZoomRef.current,
      zoom: 12,
      zoomControl: false,
    })

    map.attributionControl.setPrefix(false)
    createdMapInstance.current = true
    setMapInstance(map)

    requestAnimationFrame(() => {
      map.invalidateSize()
    })

    return () => {
      createdMapInstance.current = false
      map.remove()
    }
  }, [])

  useEffect(() => {
    if (mapInstance === null) {
      return undefined
    }

    if (scrollWheelZoom) {
      mapInstance.scrollWheelZoom.enable()

      return undefined
    }

    mapInstance.scrollWheelZoom.disable()

    return undefined
  }, [mapInstance, scrollWheelZoom])

  useEffect(() => {
    if (mapInstance === null) {
      return undefined
    }

    const layer = L.geoJSON(geoJson, {
      onEachFeature: (feature, featureLayer) => {
        const name = getFeatureName(feature)

        if (name) {
          featureLayer.bindTooltip(name)
        }
      },
      pointToLayer: (feature, latLng) =>
        L.marker(latLng, {
          title: getFeatureName(feature),
          icon: L.divIcon({
            className: '_ams-object-information-map__landmark-marker',
            html: '<span aria-hidden="true" class="_ams-object-information-map__landmark-pin"></span>',
          }),
        }),
      style: (feature) => ({
        className: isLandmarkFeature(feature) ? '' : '_ams-object-information-map__geometry',
      }),
    })

    layer.addTo(mapInstance)

    const bounds = layer.getBounds()

    if (bounds.isValid()) {
      mapInstance.fitBounds(bounds.pad(0.2))
    }

    return () => {
      layer.removeFrom(mapInstance)
    }
  }, [geoJson, mapInstance])

  return (
    <div className="_ams-object-information-map">
      <div className="_ams-object-information-map__container" ref={containerRef} />
      {mapInstance !== null ? <MapContext.Provider value={{ mapInstance }}>{children}</MapContext.Provider> : null}
    </div>
  )
}
