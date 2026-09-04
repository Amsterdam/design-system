/**
 * @license EUPL-1.2+
 * Copyright Gemeente Amsterdam
 */

import { describe, expect, it } from 'vitest'

import { districts, eventCategories, newsCategories, searchTopics } from './exampleContent'
import { formatFieldValue } from './formatFieldValue'

describe('formatFieldValue', () => {
  it('lower cases a single word', () => {
    expect(formatFieldValue('Centrum')).toBe('centrum')
  })

  it('replaces a space with a hyphen', () => {
    expect(formatFieldValue('Stadsgebied Weesp')).toBe('stadsgebied-weesp')
  })

  it('keeps a hyphen that the label already has', () => {
    expect(formatFieldValue('Nieuw-West')).toBe('nieuw-west')
  })

  it('replaces a comma and the space after it with one hyphen', () => {
    expect(formatFieldValue('Ontmoeting, zorg en welzijn')).toBe('ontmoeting-zorg-en-welzijn')
  })

  it('collapses a hyphen followed by a space into one hyphen', () => {
    expect(formatFieldValue('Informatie- en participatiebijeenkomsten')).toBe('informatie-en-participatiebijeenkomsten')
  })

  it('strips the accent from a letter that carries one', () => {
    expect(formatFieldValue('Taalcafé')).toBe('taalcafe')
  })

  it('keeps digits', () => {
    expect(formatFieldValue('Top 400/600')).toBe('top-400-600')
  })

  it('leaves no hyphen at either end', () => {
    expect(formatFieldValue('  Zuidoost!  ')).toBe('zuidoost')
  })

  // The value is what tells one option from another, so two labels in a list must never collapse to one value.
  it.each([
    ['districts', districts],
    ['eventCategories', eventCategories],
    ['newsCategories', newsCategories],
    ['searchTopics', searchTopics],
  ])('gives every label in %s a distinct value', (_name, labels) => {
    const values = labels.map(formatFieldValue)

    expect(new Set(values).size).toBe(labels.length)
  })
})
