import L from 'leaflet'
import { FunctionComponent, PropsWithChildren, useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'
import { MapContext } from './MapContext'
import styles from './map.module.css'
import getCrsRd from '../../common/utils/getCrsRd'

export type MapProps = {
  scrollWheelZoom: boolean
} & PropsWithChildren

const MapProvider: FunctionComponent<MapProps> = ({ children, scrollWheelZoom }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mapInstance, setMapInstance] = useState<L.Map | null>(null)
  const createdMapInstance = useRef(false)

  useEffect(() => {
    if (containerRef.current === null || createdMapInstance.current !== false) {
      return
    }

    const map = new L.Map(containerRef.current, {
      center: L.latLng([52.370216, 4.895168]),
      crs: getCrsRd(),
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
      minZoom: 6,
      scrollWheelZoom,
      zoom: 8,
      zoomControl: false,
    })

    // Remove Leaflet link from the map
    map.attributionControl.setPrefix(false)

    createdMapInstance.current = true
    setMapInstance(map)

    // eslint-disable-next-line consistent-return
    return () => {
      if (mapInstance) mapInstance.remove()
    }
  }, [mapInstance, containerRef, scrollWheelZoom])

  return (
    <>
      <div className={styles.container} ref={containerRef} />
      {!!mapInstance && <MapContext.Provider value={{ mapInstance }}>{children}</MapContext.Provider>}
    </>
  )
}

export default MapProvider
