/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import isChromatic from 'chromatic/isChromatic'
import { afterEach, describe, expect, it, vi } from 'vitest'

import { exampleParagraph } from './exampleContent'

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
