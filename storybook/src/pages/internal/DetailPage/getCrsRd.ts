/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import type * as Leaflet from 'leaflet'
import type { CRS, LatLng, Point, PointExpression } from 'leaflet'

import proj4 from 'proj4'

const crsConfig = {
  earthRadius: 6378137,
  rd: {
    code: 'EPSG:28992',
    projection:
      '+proj=sterea +lat_0=52.15616055555555 +lon_0=5.38763888888889 +k=0.9999079 +x_0=155000 +' +
      'y_0=463000 +ellps=bessel +units=m +towgs84=565.2369,50.0087,465.658,-0.406857330322398,0.3507326' +
      '76542563,-1.8703473836068,4.0812 +no_defs',
    transformation: {
      bounds: {
        bottomRight: [595401.92, 22598.08] as PointExpression,
        topLeft: [-285401, 903401] as PointExpression,
      },
    },
  },
  wgs84: {
    code: 'EPSG:4326',
  },
}

const proj4Rd = proj4(crsConfig.wgs84.code, crsConfig.rd.projection)

export const getCrsRd = (L: typeof Leaflet, maxZoom = 16, zeroScale = 3440.64, scales: number[] = []): CRS => {
  for (let index = 0; index <= maxZoom; index += 1) {
    scales.push(1 / (zeroScale * 0.5 ** index))
  }

  return {
    ...L.CRS.Simple,
    code: crsConfig.rd.code,
    distance: L.CRS.Earth.distance,
    infinite: false,
    projection: {
      bounds: L.bounds(crsConfig.rd.transformation.bounds.topLeft, crsConfig.rd.transformation.bounds.bottomRight),
      project: (latlng: LatLng) => {
        const [x, y] = proj4Rd.forward([latlng.lng, latlng.lat])

        return new L.Point(x, y)
      },
      unproject: (point: Point) => {
        const [lng, lat] = proj4Rd.inverse([point.x, point.y])

        return L.latLng(lat, lng)
      },
    },
    R: crsConfig.earthRadius,
    scale: (zoom: number) => scales[zoom] ?? 1 / (zeroScale * 0.5 ** zoom),
    transformation: new L.Transformation(1, 285401.92, -1, 903401.92),
    zoom: (scale: number) => Math.log(1 / scale / zeroScale) / Math.log(0.5),
  }
}
