/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

/** Angles are in degrees, clockwise from twelve o’clock. Coordinates are relative to the centre of the wheel. */

export const CENTRE_RADIUS = 38
export const OUTER_RADIUS = 100
export const RING_COUNT = 5

const round = (value: number) => Math.round(value * 1000) / 1000

const pointAt = (radius: number, angle: number) => {
  const radians = (angle * Math.PI) / 180

  return `${round(radius * Math.sin(radians))} ${round(-radius * Math.cos(radians))}`
}

const largeArcFlag = (start: number, end: number) => (end - start > 180 ? 1 : 0)

/** A slice of a disc, from the centre outwards. */
export const pieSlice = (radius: number, start: number, end: number) =>
  `M 0 0 L ${pointAt(radius, start)} A ${radius} ${radius} 0 ${largeArcFlag(start, end)} 1 ${pointAt(radius, end)} Z`

/** A slice of a ring between two radii. */
export const ringSlice = (innerRadius: number, outerRadius: number, start: number, end: number) =>
  `M ${pointAt(outerRadius, start)} A ${outerRadius} ${outerRadius} 0 ${largeArcFlag(start, end)} 1 ${pointAt(outerRadius, end)} L ${pointAt(innerRadius, end)} A ${innerRadius} ${innerRadius} 0 ${largeArcFlag(start, end)} 0 ${pointAt(innerRadius, start)} Z`

/** The inner and outer radius of a ring, counting from the centre outwards. */
export const ringRadii = (ringIndex: number) => {
  const width = (OUTER_RADIUS - CENTRE_RADIUS) / RING_COUNT

  return [CENTRE_RADIUS + ringIndex * width, CENTRE_RADIUS + (ringIndex + 1) * width] as const
}

/** Divides a quarter of the wheel, starting at `quadrantStart`, over the given number of segments. */
export const segmentAngles = (quadrantStart: number, count: number, index: number) => {
  const span = 90 / count

  return [quadrantStart + index * span, quadrantStart + (index + 1) * span] as const
}
