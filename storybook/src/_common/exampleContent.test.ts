/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import isChromatic from 'chromatic/isChromatic'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { exampleImageSource, exampleParagraph } from './exampleContent'

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

describe('exampleImageSource', () => {
  const photoId = (source: string) => source.split('/')[4]

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('requests a random photo outside Chromatic', () => {
    vi.mocked(isChromatic).mockReturnValue(false)

    expect(exampleImageSource(640, 360, 1)).toBe('https://picsum.photos/640/360?random=1')
  })

  it('names a specific photo in Chromatic', () => {
    vi.mocked(isChromatic).mockReturnValue(true)

    expect(exampleImageSource(640, 360, 1)).toMatch(/^https:\/\/picsum\.photos\/id\/\d+\/640\/360$/)
  })

  it('shows one photo at several sizes for the same index', () => {
    vi.mocked(isChromatic).mockReturnValue(true)

    expect(photoId(exampleImageSource(640, 200, 3))).toBe(photoId(exampleImageSource(1440, 450, 3)))
  })

  it('shows different photos for different indexes', () => {
    vi.mocked(isChromatic).mockReturnValue(true)

    expect(photoId(exampleImageSource(640, 360, 0))).not.toBe(photoId(exampleImageSource(640, 360, 1)))
  })
})
