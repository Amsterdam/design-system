/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import {
  formatCharacterCountOverLimitTextAr,
  formatCharacterCountOverLimitTextDe,
  formatCharacterCountOverLimitTextEn,
  formatCharacterCountOverLimitTextFr,
  formatCharacterCountOverLimitTextNl,
  formatCharacterCountOverLimitTextTr,
  formatCharacterCountTextAr,
  formatCharacterCountTextDe,
  formatCharacterCountTextEn,
  formatCharacterCountTextFr,
  formatCharacterCountTextNl,
  formatCharacterCountTextTr,
} from './formatCharacterCountText'

describe('formatCharacterCountText', () => {
  // The noun agrees with the maximum. One case per Arabic plural category, named so the expected
  // forms can be checked without reading the implementation.
  it('formats the count in Arabic with number–noun agreement', () => {
    expect(formatCharacterCountTextAr(0, 0)).toBe('0 من 0 حرف') // zero
    expect(formatCharacterCountTextAr(0, 1)).toBe('0 من 1 حرف') // one
    expect(formatCharacterCountTextAr(1, 2)).toBe('1 من 2 حرفين') // two
    expect(formatCharacterCountTextAr(2, 3)).toBe('2 من 3 أحرف') // few
    expect(formatCharacterCountTextAr(7, 10)).toBe('7 من 10 أحرف') // few
    expect(formatCharacterCountTextAr(11, 11)).toBe('11 من 11 حرفًا') // many
    expect(formatCharacterCountTextAr(50, 99)).toBe('50 من 99 حرفًا') // many
    expect(formatCharacterCountTextAr(50, 100)).toBe('50 من 100 حرف') // other
    expect(formatCharacterCountTextAr(50, 1000)).toBe('50 من 1000 حرف') // other
  })

  it('formats the count in Arabic by the remainder, not the size, of the maximum', () => {
    expect(formatCharacterCountTextAr(50, 103)).toBe('50 من 103 أحرف') // few
    expect(formatCharacterCountTextAr(50, 110)).toBe('50 من 110 أحرف') // few
    expect(formatCharacterCountTextAr(50, 111)).toBe('50 من 111 حرفًا') // many
  })

  it('formats the count in German', () => {
    expect(formatCharacterCountTextDe(7, 10)).toBe('7 von 10 Zeichen')
  })

  it('formats the count in English with a singular for a maximum of one character', () => {
    expect(formatCharacterCountTextEn(0, 1)).toBe('0 of 1 character')
    expect(formatCharacterCountTextEn(1, 1)).toBe('1 of 1 character')
    expect(formatCharacterCountTextEn(7, 10)).toBe('7 of 10 characters')
  })

  it('formats the count in French with a singular below two characters', () => {
    expect(formatCharacterCountTextFr(0, 10)).toBe('0 caractère sur 10')
    expect(formatCharacterCountTextFr(1, 10)).toBe('1 caractère sur 10')
    expect(formatCharacterCountTextFr(7, 10)).toBe('7 caractères sur 10')
  })

  it('formats the count in Dutch with a singular for a maximum of one character', () => {
    expect(formatCharacterCountTextNl(0, 1)).toBe('0 van 1 teken')
    expect(formatCharacterCountTextNl(1, 1)).toBe('1 van 1 teken')
    expect(formatCharacterCountTextNl(7, 10)).toBe('7 van 10 tekens')
  })

  it('formats the count in Turkish', () => {
    expect(formatCharacterCountTextTr(7, 10)).toBe('10 karakterden 7')
  })
})

describe('formatCharacterCountOverLimitText', () => {
  // The noun agrees with the excess rather than with the maximum, so the categories are exercised again.
  it('formats the excess in Arabic with number–noun agreement', () => {
    expect(formatCharacterCountOverLimitTextAr(1)).toBe('1 حرف زيادة') // one
    expect(formatCharacterCountOverLimitTextAr(2)).toBe('2 حرفين زيادة') // two
    expect(formatCharacterCountOverLimitTextAr(5)).toBe('5 أحرف زيادة') // few
    expect(formatCharacterCountOverLimitTextAr(11)).toBe('11 حرفًا زيادة') // many
    expect(formatCharacterCountOverLimitTextAr(100)).toBe('100 حرف زيادة') // other
  })

  it('formats the excess in German', () => {
    expect(formatCharacterCountOverLimitTextDe(1)).toBe('1 Zeichen zu viel')
    expect(formatCharacterCountOverLimitTextDe(5)).toBe('5 Zeichen zu viel')
  })

  it('formats the excess in English with a singular for one character', () => {
    expect(formatCharacterCountOverLimitTextEn(1)).toBe('1 character too many')
    expect(formatCharacterCountOverLimitTextEn(5)).toBe('5 characters too many')
  })

  it('formats the excess in French with a singular below two characters', () => {
    expect(formatCharacterCountOverLimitTextFr(1)).toBe('1 caractère de trop')
    expect(formatCharacterCountOverLimitTextFr(5)).toBe('5 caractères de trop')
  })

  it('formats the excess in Dutch with a singular for one character', () => {
    expect(formatCharacterCountOverLimitTextNl(1)).toBe('1 teken te veel')
    expect(formatCharacterCountOverLimitTextNl(5)).toBe('5 tekens te veel')
  })

  it('formats the excess in Turkish', () => {
    expect(formatCharacterCountOverLimitTextTr(1)).toBe('1 karakter fazla')
    expect(formatCharacterCountOverLimitTextTr(5)).toBe('5 karakter fazla')
  })
})
