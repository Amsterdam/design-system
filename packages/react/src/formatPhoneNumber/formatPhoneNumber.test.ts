/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { formatPhoneNumber } from './formatPhoneNumber'

describe('formatPhoneNumber', () => {
  describe('mobile numbers', () => {
    it('formats a mobile number', () => {
      expect(formatPhoneNumber('0612345678')).toBe('06 1234 5678')
    })

    it('reformats a mobile number with existing spacing', () => {
      expect(formatPhoneNumber('06 12 34 56 78')).toBe('06 1234 5678')
    })
  })

  describe('landline with 2-digit area code', () => {
    it('formats an Amsterdam number', () => {
      expect(formatPhoneNumber('0202355911')).toBe('020 235 5911')
    })

    it('formats a Rotterdam number', () => {
      expect(formatPhoneNumber('0101234567')).toBe('010 123 4567')
    })
  })

  describe('landline with 3-digit area code', () => {
    it('formats a number with 3-digit area code', () => {
      expect(formatPhoneNumber('0343255922')).toBe('0343 255 922')
    })
  })

  describe('international format', () => {
    it('formats an international mobile number', () => {
      expect(formatPhoneNumber('+31612345678')).toBe('+31 6 1234 5678')
    })

    it('formats an international landline number', () => {
      expect(formatPhoneNumber('+31201234567')).toBe('+31 20 123 4567')
    })

    it('formats an international number with 3-digit area code', () => {
      expect(formatPhoneNumber('+31343255922')).toBe('+31 343 255 922')
    })

    it('handles the 0031 prefix', () => {
      expect(formatPhoneNumber('0031612345678')).toBe('+31 6 1234 5678')
    })
  })

  describe('service numbers', () => {
    it('formats an 0800 number with 4 digits', () => {
      expect(formatPhoneNumber('08001234')).toBe('0800 1234')
    })

    it('formats an 0800 number with 7 digits', () => {
      expect(formatPhoneNumber('08001234567')).toBe('0800 123 4567')
    })

    it('formats an 0900 number with 4 digits', () => {
      expect(formatPhoneNumber('09001234')).toBe('0900 1234')
    })
  })

  describe('already formatted input', () => {
    it('reformats a number with dashes', () => {
      expect(formatPhoneNumber('020-235 5911')).toBe('020 235 5911')
    })

    it('reformats a number with parentheses', () => {
      expect(formatPhoneNumber('(020) 2355911')).toBe('020 235 5911')
    })
  })

  describe('unrecognised input', () => {
    it('returns a short number unchanged', () => {
      expect(formatPhoneNumber('14 020')).toBe('14 020')
    })

    it('returns an emergency number unchanged', () => {
      expect(formatPhoneNumber('112')).toBe('112')
    })
  })
})
