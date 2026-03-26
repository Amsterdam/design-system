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

    it('formats a mobile number in the 068 range', () => {
      expect(formatPhoneNumber('0681234567')).toBe('06 8123 4567')
    })

    it('returns a number in the 066 pager range unchanged, as it is not mobile telephony', () => {
      expect(formatPhoneNumber('0661234567')).toBe('0661234567')
    })

    it('returns a number in the 067 range unchanged, as it is not mobile telephony', () => {
      expect(formatPhoneNumber('0671234567')).toBe('0671234567')
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

  describe('numbers for businesses and institutions', () => {
    it('formats an 088 number, grouped like a 2-digit area code rather than as an area code', () => {
      expect(formatPhoneNumber('0888989294')).toBe('088 898 9294')
    })

    it('reformats an 088 number with existing spacing', () => {
      expect(formatPhoneNumber('088 898 92 94')).toBe('088 898 9294')
    })

    it('formats an 085 number', () => {
      expect(formatPhoneNumber('0851234567')).toBe('085 123 4567')
    })

    it('formats an 087 number', () => {
      expect(formatPhoneNumber('0871234567')).toBe('087 123 4567')
    })

    it('formats an 084 number', () => {
      expect(formatPhoneNumber('0841234567')).toBe('084 123 4567')
    })

    it('formats an 091 number', () => {
      expect(formatPhoneNumber('0911234567')).toBe('091 123 4567')
    })

    it('formats an international 088 number', () => {
      expect(formatPhoneNumber('+31888989294')).toBe('+31 88 898 9294')
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

    it('drops a written-out trunk zero from a landline number', () => {
      expect(formatPhoneNumber('+31 (0)20 123 4567')).toBe('+31 20 123 4567')
    })

    it('drops a written-out trunk zero from a mobile number', () => {
      expect(formatPhoneNumber('+31 (0)6 1234 5678')).toBe('+31 6 1234 5678')
    })

    it('drops a written-out trunk zero after the 0031 prefix', () => {
      expect(formatPhoneNumber('0031 (0)20 123 4567')).toBe('+31 20 123 4567')
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

    it('formats an 0906 number', () => {
      expect(formatPhoneNumber('09061234')).toBe('0906 1234')
    })

    it('formats an 0909 number', () => {
      expect(formatPhoneNumber('09091234')).toBe('0909 1234')
    })

    it('formats an 0909 number with 7 digits', () => {
      expect(formatPhoneNumber('09091234567')).toBe('0909 123 4567')
    })
  })

  describe('municipal service numbers', () => {
    it('formats the number of Amsterdam, which has a 2-digit area code', () => {
      expect(formatPhoneNumber('14020')).toBe('14 020')
    })

    it('formats the number of a municipality with a 3-digit area code', () => {
      expect(formatPhoneNumber('140343')).toBe('14 0343')
    })

    it('reformats a municipal number with existing spacing', () => {
      expect(formatPhoneNumber('14 020')).toBe('14 020')
    })

    it('returns a number unchanged when the area code does not exist', () => {
      expect(formatPhoneNumber('14099')).toBe('14099')
    })
  })

  describe('already formatted input', () => {
    it('reformats a number with dashes', () => {
      expect(formatPhoneNumber('020-235 5911')).toBe('020 235 5911')
    })

    it('reformats a number with parentheses', () => {
      expect(formatPhoneNumber('(020) 2355911')).toBe('020 235 5911')
    })

    it('formats an already formatted number to the same result', () => {
      expect(formatPhoneNumber(formatPhoneNumber('0888989294'))).toBe('088 898 9294')
    })
  })

  describe('unrecognised input', () => {
    it('returns an emergency number unchanged', () => {
      expect(formatPhoneNumber('112')).toBe('112')
    })

    it('returns a three-digit service number unchanged', () => {
      expect(formatPhoneNumber('116117')).toBe('116117')
    })

    it('returns a number with an unknown prefix unchanged, rather than grouping it on a guess', () => {
      expect(formatPhoneNumber('0891234567')).toBe('0891234567')
    })

    it('returns an empty string unchanged', () => {
      expect(formatPhoneNumber('')).toBe('')
    })

    it('returns text unchanged', () => {
      expect(formatPhoneNumber('bel ons')).toBe('bel ons')
    })
  })

  describe('returns an empty string for non-string input', () => {
    const formatPhoneNumberUnchecked = formatPhoneNumber as unknown as (phoneNumber: unknown) => string

    it('for null', () => {
      expect(formatPhoneNumberUnchecked(null)).toBe('')
    })

    it('for undefined', () => {
      expect(formatPhoneNumberUnchecked(undefined)).toBe('')
    })
  })
})
