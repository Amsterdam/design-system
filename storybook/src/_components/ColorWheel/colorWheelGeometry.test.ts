/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { CENTRE_RADIUS, OUTER_RADIUS, pieSlice, ringRadii, ringSlice, segmentAngles } from './colorWheelGeometry'

describe('pieSlice', () => {
  it('draws a quarter disc clockwise from twelve to three o’clock', () => {
    expect(pieSlice(10, 0, 90)).toBe('M 0 0 L 0 -10 A 10 10 0 0 1 10 0 Z')
  })

  it('uses the large arc for a slice of more than half a disc', () => {
    expect(pieSlice(10, 90, 360)).toBe('M 0 0 L 10 0 A 10 10 0 1 1 0 -10 Z')
  })
})

describe('ringSlice', () => {
  it('draws the outer arc clockwise and the inner arc back', () => {
    expect(ringSlice(5, 10, 90, 180)).toBe('M 10 0 A 10 10 0 0 1 0 10 L 0 5 A 5 5 0 0 0 5 0 Z')
  })
})

describe('ringRadii', () => {
  it('starts at the centre disc and ends at the outer edge', () => {
    expect(ringRadii(0)[0]).toBe(CENTRE_RADIUS)
    expect(ringRadii(4)[1]).toBe(OUTER_RADIUS)
  })

  it('lets each ring start where the previous one ends', () => {
    expect(ringRadii(1)[0]).toBe(ringRadii(0)[1])
    expect(ringRadii(3)[0]).toBe(ringRadii(2)[1])
  })

  it('gives the ring of main colours more than three times the width of a tint ring', () => {
    const width = (ringIndex: number) => ringRadii(ringIndex)[1] - ringRadii(ringIndex)[0]

    expect(width(2)).toBeGreaterThan(3 * width(1))
    expect(width(0)).toBeCloseTo(width(1), 0)
    expect(width(3)).toBeCloseTo(width(4), 0)
  })
})

describe('segmentAngles', () => {
  it('gives one segment the whole quarter', () => {
    expect(segmentAngles(90, 1, 0)).toEqual([90, 180])
  })

  it('divides the quarter evenly', () => {
    expect(segmentAngles(180, 4, 0)).toEqual([180, 202.5])
    expect(segmentAngles(180, 4, 3)).toEqual([247.5, 270])
  })
})
