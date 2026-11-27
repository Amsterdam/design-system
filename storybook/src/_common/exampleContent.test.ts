/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import isChromatic from 'chromatic/isChromatic'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { exampleImage, exampleParagraph } from './exampleContent'
import examplePhoto01 from './images/example-photo-01.jpg'
import examplePhoto02 from './images/example-photo-02.jpg'
import examplePhoto16 from './images/example-photo-16.jpg'

vi.mock('chromatic/isChromatic', () => ({ default: vi.fn(() => false) }))

describe('example content', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('picks a random entry outside Chromatic', () => {
    vi.mocked(isChromatic).mockReturnValue(false)

    vi.spyOn(Math, 'random').mockReturnValue(0)
    const firstEntry = exampleParagraph()

    vi.spyOn(Math, 'random').mockReturnValue(0.999)
    expect(exampleParagraph()).not.toBe(firstEntry)
  })

  it('always picks the first entry in Chromatic', () => {
    vi.mocked(isChromatic).mockReturnValue(false)
    vi.spyOn(Math, 'random').mockReturnValue(0)
    const firstEntry = exampleParagraph()

    vi.mocked(isChromatic).mockReturnValue(true)
    vi.spyOn(Math, 'random').mockReturnValue(0.999)
    expect(exampleParagraph()).toBe(firstEntry)
  })
})

describe('exampleImage', () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns the same local photo inside and outside Chromatic', () => {
    vi.mocked(isChromatic).mockReturnValue(false)
    expect(exampleImage(1)).toBe(examplePhoto02)

    vi.mocked(isChromatic).mockReturnValue(true)
    expect(exampleImage(1)).toBe(examplePhoto02)
  })

  it('defaults to the first local photo', () => {
    expect(exampleImage()).toBe(examplePhoto01)
  })

  it('wraps around after the last local photo', () => {
    expect(exampleImage(13)).toBe(examplePhoto16)
    expect(exampleImage(14)).toBe(examplePhoto01)
    expect(exampleImage(15)).toBe(examplePhoto02)
  })
})
