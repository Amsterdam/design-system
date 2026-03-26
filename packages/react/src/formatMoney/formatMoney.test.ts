/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatMoney } from './formatMoney'

/** The function typed to accept the runtime-invalid input that untyped JavaScript callers can still pass. */
const formatMoneyUnchecked = formatMoney as unknown as (amount: unknown) => string

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

  it('formats negative zero as zero', () => {
    expect(formatMoney(-0)).toBe('€ 0,-')
  })

  it('formats a negative amount', () => {
    expect(formatMoney(-250)).toBe('€ -250,-')
  })

  it('rounds to two decimal places', () => {
    expect(formatMoney(9.999)).toBe('€ 10,00')
  })

  it('shows two decimals for an amount with a single decimal place', () => {
    expect(formatMoney(1234.5)).toBe('€ 1.234,50')
  })

  it('absorbs binary floating-point error', () => {
    expect(formatMoney(0.1 + 0.2)).toBe('€ 0,30')
  })

  describe('returns an empty string for input that is not a finite number', () => {
    it('for null', () => {
      expect(formatMoneyUnchecked(null)).toBe('')
    })

    it('for an empty string', () => {
      expect(formatMoneyUnchecked('')).toBe('')
    })

    it('for undefined', () => {
      expect(formatMoneyUnchecked(undefined)).toBe('')
    })

    it('for NaN', () => {
      expect(formatMoneyUnchecked(NaN)).toBe('')
    })

    it('for a numeric string', () => {
      expect(formatMoneyUnchecked('198')).toBe('')
    })

    it('for Infinity', () => {
      expect(formatMoneyUnchecked(Infinity)).toBe('')
    })
  })
})
