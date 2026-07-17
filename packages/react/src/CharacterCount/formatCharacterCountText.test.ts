/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import {
  formatCharacterCountTextAr,
  formatCharacterCountTextDe,
  formatCharacterCountTextEn,
  formatCharacterCountTextFr,
  formatCharacterCountTextNl,
  formatCharacterCountTextTr,
} from './formatCharacterCountText'

describe('formatCharacterCountText', () => {
  it('formats the count in Arabic with number–noun agreement', () => {
    expect(formatCharacterCountTextAr(0, 1)).toBe('0 من 1 حرف')
    expect(formatCharacterCountTextAr(1, 2)).toBe('1 من 2 حرفين')
    expect(formatCharacterCountTextAr(2, 3)).toBe('2 من 3 أحرف')
    expect(formatCharacterCountTextAr(7, 10)).toBe('7 من 10 أحرف')
    expect(formatCharacterCountTextAr(11, 11)).toBe('11 من 11 حرفًا')
    expect(formatCharacterCountTextAr(50, 100)).toBe('50 من 100 حرفًا')
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
