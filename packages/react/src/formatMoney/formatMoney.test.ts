/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatMoney } from './formatMoney'

describe('formatMoney', () => {
  it('formats a whole amount with a trailing dash', () => {
    expect(formatMoney(198)).toBe('€ 198,-')
  })

  it('formats an amount with cents', () => {
    expect(formatMoney(198.5)).toBe('€ 198,50')
  })

  it('formats an amount with two decimal places', () => {
    expect(formatMoney(1040.25)).toBe('€ 1.040,25')
  })

  it('uses a period as thousands separator', () => {
    expect(formatMoney(1000)).toBe('€ 1.000,-')
  })

  it('formats millions', () => {
    expect(formatMoney(1000000)).toBe('€ 1.000.000,-')
  })

  it('formats zero', () => {
    expect(formatMoney(0)).toBe('€ 0,-')
  })

  it('formats a negative amount', () => {
    expect(formatMoney(-250)).toBe('€ -250,-')
  })

  it('rounds to two decimal places', () => {
    expect(formatMoney(9.999)).toBe('€ 10,00')
  })
})
